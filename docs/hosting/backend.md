---
title: Backend and database setup
description: Create Supabase, apply the correct migration chains, deploy functions, and configure secrets.
---

# Backend and database setup

The Teacher, Student, Decks, Assess, and Schools apps use Supabase services. Use one intended Supabase project for suite sign-in and connected student workflows. Wordly and Help do not require this database in their current versions.

## 1. Create the project and Auth configuration

Create a Supabase project in your organization. In **Project Settings → API**, note the project URL and public client key. In **Authentication → URL Configuration**, set the site URL and allow exact HTTPS callback/redirect URLs for each app. Configure email delivery and any OAuth providers before using production accounts.

Choose final domains first. The same account origin must be used in each product’s environment and Auth allowlist.

## 2. Apply database migrations

The current TutPro shared schema is the ordered chain in the Teacher app’s `supabase/migrations/` directory. Apply the complete chain with the Supabase CLI; do not copy selected SQL snippets or execute the legacy full-setup SQL files on top of migrations.

```sh
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase db push --dry-run
# Review the pending migration list and SQL, then:
npx supabase db push
```

The project reference is the unique ID in your Supabase project URL. Keep the migration history intact and back up production before applying a release.

### What the shared migration chain establishes

Run **all committed migrations in filename order**. They form one release chain; later fixes expect earlier tables and functions. Main migration groups include:

| Migration family | What it supports |
| --- | --- |
| `20260702`–`20260731` | Decks student identity restoration, sync heads/projection receipts, group lessons, personal data scopes, school feed/announcements, teacher identity, courses, and enrollments |
| `20260819`–`20260826` | School-scoped permission policies, privacy/security enforcement, enrollment, licensing, role distribution, school authorization, and onboarding/business provisioning |
| `20260901`–`20260915` | Personal teacher feed delivery, enrollment/course selection, library setup preferences, and external calendar busy sources |
| `20260921`–`20260923` | Shared SSO claims, student portal identity boundaries, account deletion/access controls, Assess assignment/submission integration, and explicit Assess RLS policies |
| `20260924`–`20260930` | Idempotent school/licensing setup, activation, Inbox tasks, response publishing access, certificates, campus resource scheduling, access hierarchy, and provider disconnect/reinvite |
| `20261001`–`20261008` | Teacher branch links, campus pricing/equipment/expenses, homework images, student campus history, payroll/budgets, tombstone enforcement, group payment ledger, and projection receipt checks |

The exact migration files and sequence in the release you deploy are authoritative. If a migration dry run lists a destructive or unexpected change, stop and review the SQL and backup before applying it.

### Decks database migrations

Decks has its own ordered `supabase/migrations/` chain for flashcard tables, row security, teacher/student profiles, assignments, sharing, courses, study requirements, spaced-repetition progress, study modes, and role preservation. Apply all migrations in that product’s chain in filename order after the shared account/profile schema exists. Do not apply the old `create_tables.sql` as an additional schema install.

### Student migrations

The Student app’s numbered `migrations/001–008` are an older app-specific chain. The current shared TutPro chain owns the production student portal and feed security model. Do not run the legacy Student files on the shared production database unless the release instructions explicitly identify a separate database that requires them; duplicate tables or policies can conflict with the shared schema.

Assess integration migrations are already part of the shared TutPro chain. Schools uses that same chain and does not have a separate schema install. Wordly and Help have no database migrations in their current setup.

## 3. Deploy Edge Functions

Deploy the functions used by the products you enable. The shared functions include `school_admin`, `student_portal`, `student_enrollment`, `student_signup`, `license_redeem`, `assess_tutpro`, and SSO functions (`sso_issue`, `sso_consume`, `student_sso_claim`). Other features use `homework_images`, `external_calendar`, `check_share`, and administrative auth functions. Use the CLI command with the target project ref:

```sh
npx supabase functions deploy student_portal --project-ref YOUR_PROJECT_REF
npx supabase functions deploy student_enrollment --project-ref YOUR_PROJECT_REF
npx supabase functions deploy student_signup --project-ref YOUR_PROJECT_REF
npx supabase functions deploy assess_tutpro --project-ref YOUR_PROJECT_REF
npx supabase functions deploy school_admin --project-ref YOUR_PROJECT_REF
npx supabase functions deploy license_redeem --project-ref YOUR_PROJECT_REF
```

Some public enrollment/signup endpoints are configured for no JWT verification and perform their own validation. Preserve the function’s configured JWT mode; do not disable verification on other functions. Deploy the functions referenced by your selected release, then run the deployment verification command included with the release.

## 4. Set server secrets in Supabase

Supabase Edge Functions receive the project URL and service-role credential in their server runtime. Never copy the service-role key into a browser app or any `VITE_*` variable. Store only additional keys required for enabled features as Edge Function secrets:

| Secret | Used for | Where to obtain/set |
| --- | --- | --- |
| `ENTITLEMENT_LEASE_SECRET` | Server-issued license entitlement leases | Generate a long random value; set in Supabase **Project Settings → Edge Functions → Secrets** |
| `LICENSE_CODE_PEPPER` | License-code hashing | Generate a unique random value; set as a function secret |
| `APP_ADMIN_MASTER_CODE_SHA256` | Optional master license administration | Hash the chosen master code; set only the hash as a function secret |
| `IMGBB_API_KEY` | Homework image uploads through the image proxy | Create an ImgBB API key and set it as a Supabase secret; uploaded image URLs may be publicly readable |
| `PRIVACY_WORKER_SECRET` | Authorized privacy-job worker requests | Generate a long random value and set it as a function secret and only in the trusted worker |
| `AUTH_LINK_REDIRECT_TO` | Optional admin-generated auth links | Set to the exact trusted HTTPS return URL |
| `IMP_LINK_REDIRECT_TO` | Optional audited impersonation links | Set to the exact trusted HTTPS return URL; restrict access to the admin function |

Set secrets from the CLI or dashboard. Do not put secret values in docs, shell history, Git, screenshots, or client environment files.

```sh
npx supabase secrets set ENTITLEMENT_LEASE_SECRET=REPLACE_WITH_RANDOM_VALUE --project-ref YOUR_PROJECT_REF
```

## 5. Configure each frontend

Set public client configuration in the matching hosting project’s environment settings. The public Supabase key is expected to be exposed in the browser; all authorization must still be enforced by RLS and server-side functions.

| App | Client variables to configure | Where they belong |
| --- | --- | --- |
| Teacher | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_TUTPRO_ACCOUNT_ORIGIN`, `VITE_TUTPRO_TEACHER_ORIGIN`, `VITE_TUTPRO_STUDENT_ORIGIN`, `VITE_TUTPRO_DECKS_ORIGIN`, `VITE_TUTPRO_QUIZFLOW_ORIGIN`, `VITE_TUTPRO_SCHOOLS_ORIGIN`, `VITE_AUTH_ALLOWED_RETURN_ORIGINS` | Teacher frontend project → environment variables; origins must match the final HTTPS domains |
| Student | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_API_BASE_URL`, `VITE_TUTPRO_ACCOUNT_ORIGIN`, `VITE_USE_SUPABASE` | Student frontend project; set `VITE_API_BASE_URL` to the Teacher/backend API origin used by this build |
| Decks | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (or supported `VITE_SUPABASE_PUBLISHABLE_KEY`), `VITE_TUTPRO_ACCOUNT_ORIGIN`, `VITE_DECKS_URL` | Decks frontend project |
| Schools console | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SCHOOL_ID`, `VITE_TUTPRO_ACCOUNT_ORIGIN` | Schools console project; `VITE_SCHOOL_ID` selects the school for that console build |
| Assess | Use the client variables declared by the supplied Assess deployment environment template; the frontend source/environment template is not in the available checkout | Assess frontend project; do not guess variable names or add service-role credentials |
| Wordly | No backend environment keys in the current local-first app | Static frontend project |
| Help | No backend environment keys | Static docs project |

Additional optional client values are documented in each app’s `.env.example` file. Copy variable names and defaults from that release, not from another version.

## 6. Verify backend security

Confirm Row Level Security is enabled for every exposed table, validate the intended role policies, and test with separate teacher/student accounts. Never solve access problems by disabling RLS or publishing a service-role key. The Student app must see only the active provider’s permitted data. School and Assess integration flows must pass their authenticated authorization checks.

<div className="actionLinks"><a href="https://supabase.com/dashboard">Open Supabase dashboard ↗</a><a href="./domains">Configure domains and redirects →</a><a href="./releases">Build and verify releases →</a></div>
