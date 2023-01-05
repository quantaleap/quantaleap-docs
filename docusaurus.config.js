// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  // General configuration options
  title: 'Quantaleap',
  tagline: 'The Cloud-Native IT operations platform',
  url: 'https://quantaleap.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Enable diagram in Markdown feature
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quantaleap', // Usually your GitHub org/user name.
  projectName: 'quantaleap-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // enable "Edit page" feature
          editUrl: (permalink) => {
            const baseUrl = 'https://github.com/quantaleap/quantaleap-docs'
            if (permalink.version !== 'current') {
              return `${baseUrl}/tree/main/docs/${permalink.docPath}`
            } else {
              return baseUrl
            }
          },
          routeBasePath: '/',
          lastVersion: '0.2.0',
          versions: {
            current: {
              path: '/preview',
              label: 'preview'
            }
          },
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'UA-138905008-1',
          anonymizeIP: false
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        logo: {
          href: 'https://quantaleap.eu',
          alt: 'Quantaleap Logo',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
          target: '_self'
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs'
          },
          {
            /**
             * @todo fix: no relative links allowed for versioned docs
             */
            href: 'tags',
            position: 'left',
            label: 'Topics'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/quantaleap',
            className: 'pseudo-icon github-icon',
            position: 'right'
          }
        ]
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/getting-started'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                to: 'https://reddit.com/r/quantaleap'
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/r79rftjRPy'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.quantaleap.eu'
              },
              {
                label: 'GitHub',
                to: 'https://github.com/quantaleap'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quantaleap. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'

        //... other Algolia params
      }
    })
}

module.exports = config
