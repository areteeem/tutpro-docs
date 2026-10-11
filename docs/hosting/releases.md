---
title: Build, deploy, and verify
description: Build each app independently and check suite sign-in, data, and assignment workflows.
---

# Build, deploy, and verify

Each app has its own build and hosting project. Deploy Teacher, Student, Decks, Assess, Schools, Wordly, and Help independently. A successful frontend build does not apply database migrations or deploy Edge Functions.

## Build and deploy

1. Install dependencies from the app’s lockfile using the documented Node/npm version.
2. Add that app’s environment values to its hosting project.
3. Run the app’s production build command and resolve build errors.
4. Deploy a preview and verify the expected hostname and route behavior.
5. Promote the verified version to production.

Use a separate deployment for Wordly and Help. Wordly’s browser-local data does not automatically move when its domain or origin changes; export user content before changing its storage origin.

## Backend release

Review the Supabase migration dry run and Edge Function changes before release. Apply the ordered shared migration chain, deploy required functions, and verify the linked migration/function state. Use a production backup and tested rollback plan for database changes.

## End-to-end release checklist

- Supabase Auth sign-in, confirmation, and recovery work from every app origin.
- Student invitation creates or links the intended provider workspace.
- Student data and updates remain limited to the intended provider.
- Teacher schedule, homework, grades, payments, and school permissions work with test accounts.
- Decks assignments open and record progress for the intended student.
- Assess publishes, accepts attempts, records responses, and supports AutoCheck review.
- Schools console shows only its configured school and respects audit-log access.
- Wordly content exports before browser/origin changes.
- DNS and HTTPS are active for every hostname.
- No service-role key, API secret, test student data, or invitation token appears in client bundles or screenshots.

<div className="actionLinks"><a href="./backend">Backend setup ↗</a><a href="./domains">Domain setup ↗</a></div>
