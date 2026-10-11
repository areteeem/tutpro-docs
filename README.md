# TutPro Help

TutPro Help is a branded Docusaurus documentation site for the Teacher workspace, Student app, Decks, TutPro Assess, Schools, and self-hosted deployments. It uses TutPro identity and theme tokens; Docusaurus product branding is not shown in the site UI.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm start
```

The development server prints its local URL. Production static output is generated with:

```bash
npm run build
```

The generated site is in `build/`. Preview it locally with `npm run serve`.

## Documentation structure

- `docs/` contains task-based Markdown/MDX guides.
- `sidebars.js` defines guide navigation.
- `docusaurus.config.js` sets product name, routes, color mode, and navbar/footer actions.
- `src/css/custom.css` contains TutPro light/dark theme tokens and documentation typography.
- `src/pages/index.jsx` is the custom help-center landing page.
- `static/img/` contains the TutPro logo assets.

## Deployment

This repository is the separate Vercel project for `docs.tutpro.org`. Vercel runs `npm run build` and serves the `build/` directory. Add a custom domain in the project settings, apply the exact DNS record Vercel provides, then verify DNS and HTTPS. The documentation site has no Supabase dependency or runtime secrets.

## Writing guidelines

- Start with the user’s task and name the product area and action labels.
- Link action names to the live app when the route is stable.
- Keep screenshots desktop and light-theme, and never include real invitation secrets or private student records.
- Keep product claims tied to the current implementation. Describe limits and role requirements where they affect a step.
- Run `npm run build` to validate internal MDX and routes before deployment.
