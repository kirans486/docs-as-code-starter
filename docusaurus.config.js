// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/*
 * HOW TO PUBLISH WHERE
 * --------------------
 * GitHub Pages (project site):  url = https://<org>.github.io   baseUrl = /<repo>/
 * Company subdomain:            url = https://docs.company.com  baseUrl = /
 * Company subpath:              url = https://www.company.com   baseUrl = /docs/
 *
 * Set the defaults below, or override per environment with DOCS_URL and
 * DOCS_BASE_URL (the deploy workflows do this), so the file never changes.
 */
const ORG = 'YOUR-ORG';
const REPO = 'YOUR-REPO';

const url = process.env.DOCS_URL || `https://${ORG}.github.io`;
const baseUrl = process.env.DOCS_BASE_URL || `/${REPO}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APIConnect',
  tagline: 'Build. Secure. Manage APIs',
  favicon: 'img/favicon.svg',

  url,
  baseUrl,
  organizationName: ORG, // GitHub org or user
  projectName: REPO, // GitHub repo name
  trailingSlash: false,

  // Quality gates: a broken link fails the build (and the PR check).
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    mermaid: true,
    hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},

  i18n: {defaultLocale: 'en', locales: ['en']},

  clientModules: ['./src/clientModules/d3-transition.js'],

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // "Edit this page" links straight into GitHub.
          editUrl: `https://github.com/kirans486/docs-as-code-starter/`,
          showLastUpdateTime: false, // needs full git history in CI (fetch-depth: 0)
        },
        blog: false, // switch on if you need release notes or a blog
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  // Fonts, analytics, extra scripts: see the commented examples.
  // headTags: [],
  // scripts: [],
  // stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'APIConnect',
      logo: {alt: 'APIConnect Logo', src: 'img/apiconnect-logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs'},
        {href: `https://github.com/kirans486/docs-as-code-starter/`, label: 'GitHub', position: 'right'},
      ],
    },

footer: {
  style: 'dark',
  links: [
    {
      title: 'Getting started',
      items: [
        {
          label: 'Introduction',
          to: '/docs/getting-started/intro',
        },
        {
          label: 'Architecture',
          to: '/docs/getting-started/architecture',
        },
        {
          label: 'Quick Start',
          to: '/docs/getting-started/quick-start',
        },
      ],
    },
    {
      title: 'User Guides',
      items: [
        {
          label: 'Register an API',
          to: '/docs/user-guides/register-api',
        },
        {
          label: 'Create an API Token',
          to: '/docs/user-guides/create-api-token',
        },
        {
          label: 'Make an API Request',
          to: '/docs/user-guides/make-api-request',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'Release Notes',
          to: '/docs/release-notes/version-1.0',
        },
        {
          label: 'GitHub Repository',
          href: `https://github.com/kirans486/docs-as-code-starter/`,
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} APIConnect. Built with Docusaurus.`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  }),
};

export default config;
