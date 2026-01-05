import 'dotenv/config';
import webpack from 'webpack';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)




const config: Config = {
  title: 'Portal',
  tagline: 'Encuentra toda la documentación de los productos de Seidor',
  favicon: 'img/favicon.png',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },


  // Use a small plugin to inject selected environment variables into the
  // client bundle at build time. Put this inside `plugins` so Docusaurus
  // validation accepts it.
  plugins: [
    function supabaseEnvPlugin() {
      return {
        name: 'supabase-env-plugin',
        configureWebpack() {
          return {
            plugins: [
              new webpack.DefinePlugin({
                'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL || ''),
                'process.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY || ''),
              }),
            ],
          };
        },
      };
    },
    function buildExitPlugin() {
      return {
        name: 'build-exit-plugin',
        async postBuild() {
          // Force exit after build completes to avoid hanging processes
          if (process.env.NODE_ENV === 'production') {
            setTimeout(() => {
              process.exit(0);
            }, 1000);
          }
        },
      };
    },
  ],

  // Set the production url of your site here
  url: 'https://products.seidoranalytics.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // Deployment settings: GitHub Pages specific fields removed becausenp
  // this project no longer uses GitHub Pages.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
      es: {
        htmlLang: 'es-ES',
        label: 'Español',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/SeidorA/Portal/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Portal',
      logo: {
        alt: 'Products Portal',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Productos',
          type: 'dropdown',
          position: 'left',
          items: [
            {
              label: 'Crestone',
              to: '/docs/crestone/intro',
              sidebarId: 'crestonevar',
            },
            {
              label: 'Daiana',
              to: '/docs/daiana/intro',
              sidebarId: 'daianavar',
            }, {
              label: 'Doxa',
              to: '/docs/doxa/intro',
              sidebarId: 'doxaSidebar'
            }, {
              label: 'Cloud Costing',
              to: '/docs/cc/intro',
              sidebarId: 'ccSidebar'

            }, {
              label: 'Harbinger',
              to: '/docs/harbinger/intro',
              sidebarId: 'harbingerSidebar'
            }, {
              label: 'Feelings',
              to: '/docs/feelings/intro',
              sidebarId: 'feelingsSidebar'
            },
            {
              type: 'html',
              value: '<div class="dropdown-header">Act In</div>',
            },
            {
              label: 'Act-in SAP Success Factors',
              to: '/docs/successfactors/intro',
              sidebarId: 'successfactorsSidebar',
            },
            {
              label: 'Act-in SAP Business One analytics',
              to: '/docs/businessoneanalytics/intro',
              sidebarId: 'businessone',
            },
            {
              label: 'Act-in SAP ByDesign',
              to: '/docs/bydesign/intro',
              sidebarId: 'bydesign',
            },
            {
              label: 'Act-in SAP S/4HANA Analytics​',
              to: '/docs/s4hanaanalytics/intro',
              sidebarId: 's4hanaanalytics',
            },
            {
              label: 'Act-in SAP Planning',
              to: '/docs/planning/intro',
              sidebarId: 'planning',
            },

          ],
        },


        { to: '/blog', label: 'Novedades', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'custom-navbar-user',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SEIDOR Analytics',
          items: [
            {
              html: `
                <div class="logo_footer" />
              `,
            }, {
              label: 'info@seidoranalytics.com',
              href: 'mailto:info@seidoranalytics.com',
            }
          ]
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Crestone',
              to: '/docs/crestone/intro',
            }, {
              label: 'Daiana',
              to: '/docs/daiana/intro',
            },
            {
              label: 'Doxa',
              to: '/docs/doxa/intro',
            },
            {
              label: 'Cloud Costing',
              to: '/docs/cc/intro',
            },
            {
              label: 'Harbinger',
              to: '/docs/harbinger/intro',
            },
            {
              label: 'Feelings',
              to: '/docs/feelings/intro',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Success Factors',
              to: '/docs/successfactors/intro',
            },
            {
              label: 'Business One Analytics',
              to: '/docs/businessoneanalytics/intro',
            },
            {
              label: 'ByDesign',
              to: '/docs/bydesign/intro',
            },
            {
              label: 'S/4HANA Analytics​',
              to: '/docs/s4hanaanalytics/intro',
            },
            {
              label: 'Planning',
              to: '/docs/planning/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'Admin',
              to: '/docs/admin',
              sidebarId: 'doxaSidebar',
            },
            {
              label: 'Herramientas',
              to: '/docs/portal/introduccion',
            },
            {
              label: 'Big Data',
              href: 'https://www.seidoranalytics.com/big-data/',
            },
            {
              label: 'Business Analytics',
              href: 'https://www.seidoranalytics.com/business-analytics/',
            },
            {
              label: 'Ciencia de Datos',
              href: 'https://www.seidoranalytics.com/ciencia-de-datos/',
            },
            {
              label: 'Data Management',
              href: 'https://www.seidoranalytics.com/data-management/',
            },
            {
              label: 'Planificación Financiera y Operativa',
              href: 'https://www.seidoranalytics.com/planificacion-financiera-y-operativa/',
            },
            {
              label: 'Technology Management',
              href: 'https://www.seidoranalytics.com/technology-management/',
            }, {
              label: 'Data Governance',
              href: 'https://www.seidoranalytics.com/data-governance/',
            }, {
              label: 'Smart Workplace',
              href: 'https://www.seidoranalytics.com/workspace-nuvolcloud/',
            }
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      // The application ID provided by Algolia
      appId: 'CCOGV4MJ51',
      // Public API key: it is safe to commit it
      apiKey: 'bc265c316386840f54b457732db130d0',
      indexName: 'Portal Seidor',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

    }
  } satisfies Preset.ThemeConfig,
};

export default config;
