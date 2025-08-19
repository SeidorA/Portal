import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Portal',
  tagline: 'Encuentra toda la documentación de los productos de Seidor',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://SeidorA.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Portal/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SeidorA', // Usually your GitHub org/user name.
  projectName: 'Portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
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
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Portal',
      logo: {
        alt: 'Products Portal',
        src: 'img/logo.svg',
      },
      items: [
        {
            label: 'Productos',
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
              },{
                label: 'Doxa',
                to: '/docs/doxa/intro',
                sidebarId: 'doxaSidebar'
              },{
                label: 'Cloud Costing',
                to: '/docs/cc/intro',
                sidebarId: 'ccSidebar'

              },{
                label: 'Harbinger',
                to: '/docs/harbinger/intro',
                sidebarId: 'harbingerSidebar'
              },{
                label: 'Feelings',
                to: '/docs/feelings/intro',
                sidebarId: 'feelingsSidebar'
              }
              
            ],
        },
        {
          label: 'Act In',
          position: 'left',
          items:[ 
              {
                label: 'Success Factors',
                to: '/docs/successfactors/intro',
                sidebarId: 'successfactorsSidebar',
              },
              {
                label: 'Business One analytics',
                to: '/docs/businessoneanalytics/intro',
                sidebarId: 'businessone',
              },
              {
                label: 'ByDesign',
                to: '/docs/bydesign/intro',
                sidebarId: 'bydesign',
              },
              {
                label: 'S/4HANA Analytics​',
                to: '/docs/s4hanaanalytics/intro',
                sidebarId: 's4hanaanalytics',
              },
              {
                label: 'Planning',
                to: '/docs/planning/intro',
                sidebarId: 'planning',
              },
          ]

        },

        {to: '/blog', label: 'Blog', position: 'left'},
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
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
