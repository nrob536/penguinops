// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Your Name - Data Scientist',
  tagline: 'Building data-driven solutions',
  favicon: 'img/favicon.ico',

  url: 'https://nrob536.github.io',
  baseUrl: '/',

  organizationName: 'nrob536',
  projectName: 'nrob536.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs
        blog: {
          showReadingTime: true,
          blogTitle: 'Data Science Blog',
          blogDescription: 'Lessons learned in data science',
          postsPerPage: 10,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Nestor M. Robinson',
        logo: {
          alt: 'Portfolio Logo',
          src: 'img/logo-dark.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/work', label: 'Work', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nrob536',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/nrob536',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nrob536',
              },
              {
                label: 'Email',
                href: 'mailto:nrob536@aucklanduni.ac.nz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nestor M. Robinson. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['Python', 'R', 'SQL', "JavaScript", "bash"],
      },
    }),
};

module.exports = config;