# TutPro Help

An independent, static documentation site for TutPro account setup, Student invitations and workspaces, and school migration. It has no build step or runtime dependencies; Vercel serves the HTML and CSS files directly.

## Local preview

Run `npx serve .` in this directory, then open the address it prints. No user data or credentials are required.

## Deployment

This directory is the root of the separate Vercel project `tutpro-docs`. Its production alias is `https://tutpro-docs.vercel.app`. The custom domain `docs.tutpro.org` is attached to the Vercel project and needs a `docs` CNAME at the DNS provider pointing to `ce96f2b738bf1111.vercel-dns-017.com`.

The site intentionally contains no analytics, external fonts, scripts, or cookies.

## Contributing

Edit the relevant HTML page and shared `style.css`, verify links and mobile layout, then deploy the separate Vercel project. Avoid publishing real invitation URLs or student data in examples. Contributions are available under the MIT license.
