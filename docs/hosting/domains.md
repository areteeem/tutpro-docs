---
title: Domains and cross-app routing
description: Connect product hostnames, HTTPS, authentication callbacks, and app origins.
---

# Domains and cross-app routing

Choose the final hostnames before building. Each app’s account origin, Supabase Auth allowlist, email links, and cross-app return routing must use the same HTTPS values.

## Recommended hostname map

| App | Example URL |
| --- | --- |
| Teacher/account | `https://www.example.com` |
| Student | `https://student.example.com` |
| Decks | `https://decks.example.com` |
| Assess | `https://assess.example.com` |
| Schools | `https://schools.example.com` |
| Wordly | `https://wordly.example.com` |
| Help | `https://docs.example.com` |

## Connect DNS and certificates

1. Add each hostname to its app’s hosting project.
2. Copy the exact DNS record shown by the host. The record type and value vary by project and domain provider.
3. Add the record with the DNS provider and wait for verification.
4. Wait for HTTPS certificates to be active before testing authentication links.

## Configure Supabase Auth

In **Authentication → URL Configuration**, set the canonical site URL and allow exact sign-in, confirmation, recovery, and OAuth callback URLs for the apps that initiate auth. Keep preview and localhost URLs separate from production.

## Configure app origins

Set each frontend’s `VITE_TUTPRO_ACCOUNT_ORIGIN` and product origin variables to the same hostnames in the table. Set the Teacher app’s allowed return-origin list to only the product origins you own. Set the Schools console’s school ID separately for each configured school deployment.

## Verify routing

- Open each app directly and through the account screen.
- Sign in and confirm return to the initiating app.
- Test confirmation and password recovery links.
- Accept a student invitation and confirm the final Student URL.
- Confirm unapproved return origins are rejected.

<div className="actionLinks"><a href="./backend">Return to backend setup →</a><a href="./releases">Verify releases →</a></div>
