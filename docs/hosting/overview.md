---
title: Self-hosting overview
description: Step-by-step deployment plan for the TutPro apps, shared Supabase backend, domains, and verification.
---

# Self-hosting overview

Use this sequence when deploying TutPro apps under your own domains. Each frontend is built and released independently; the Teacher, Student, Decks, Assess, Schools, Wordly, and Help URLs must be configured to point to the same intended account and backend where applicable.

## Before you begin

Prepare a Supabase organization/project, a hosting project for each app, DNS access for the domains, and email delivery for Supabase Auth. Use separate development/preview and production environments. Keep the public client key separate from all server secrets.

## Deployment sequence

1. Choose final HTTPS hostnames and write down each app’s origin.
2. Create the Supabase project and configure Auth site/redirect URLs.
3. Apply the complete ordered TutPro migration chain; then apply the Decks database chain if Decks is part of this deployment.
4. Deploy the Edge Functions required by the apps and set their server secrets.
5. Add each app’s client variables in its hosting project. Add AI/provider credentials only to server-side environments.
6. Build and deploy each frontend separately: Teacher, Student, Decks, Assess, Schools, Wordly, and Help.
7. Connect each hostname and wait for HTTPS to become active.
8. Test account sign-in, return routing, invitations, Student data, Teacher assignments, Assess attempts/AutoCheck, school access, and Wordly’s local backup behavior.

Read [backend setup](./backend), [domains](./domains), and [release verification](./releases) in order. Then follow each app-specific checklist below.

| App | Hostname example | Backend |
| --- | --- | --- |
| Teacher / account | `www.example.com` | Shared Supabase Auth, database, and Edge Functions |
| Student | `student.example.com` | Same Supabase project and student portal functions |
| Decks | `decks.example.com` | Same Supabase project plus Decks tables/functions |
| Assess | `assess.example.com` | Shared Auth/database and Assess integration function |
| Schools | `schools.example.com` | Shared Supabase project; configured for one school |
| Wordly | `wordly.example.com` | Browser-local data in the current app |
| Help | `docs.example.com` | Static site; no app database |

TutPro Check needs its separately supplied application package and release instructions before it can be included in this deployment plan.
