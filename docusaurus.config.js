const {themes: prismThemes} = require('prism-react-renderer');

module.exports = {
  title: 'TutPro Help',
  tagline: 'Guides for teaching, studying, and running your school with TutPro.',
  favicon: 'img/favicon.svg',
  url: 'https://docs.tutpro.org',
  baseUrl: '/',
  organizationName: 'areteeem',
  projectName: 'tutpro-docs',
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [[
    'classic',
    {
      docs: {
        routeBasePath: 'guides',
        sidebarPath: './sidebars.js',
        editUrl: undefined,
        showLastUpdateTime: false,
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ]],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Help',
      logo: {
        alt: 'TutPro',
        src: 'img/tutpro-mark.svg',
        srcDark: 'img/tutpro-mark-on-dark.svg',
        href: '/',
        width: 30,
        height: 30,
      },
      items: [
        {to: '/guides/accounts', label: 'Guides', position: 'left'},
        {href: 'https://www.tutpro.org', label: 'Open TutPro', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {title: 'Products', items: [
          {label: 'Teacher', href: 'https://www.tutpro.org'},
          {label: 'Student', href: 'https://student.tutpro.org'},
          {label: 'Decks', href: 'https://decks.tutpro.org'},
          {label: 'Assess', href: 'https://assess.tutpro.org'},
          {label: 'Wordly', href: 'https://wordly.tutpro.org'},
        ]},
        {title: 'Help', items: [
          {label: 'Browse all guides', to: '/guides/accounts'},
          {label: 'Contact support', href: 'mailto:inquire@tutpro.org'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} TutPro. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
