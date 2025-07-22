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
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
        alt: 'My Site Logo',
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
              },
              {
                label: 'Doxa',
                to: '/docs/doxa/intro',
                sidebarId: 'doxavar',
              },
              {
                label: 'Harbinger',
                to: '/docs/harbinger/intro',
                sidebarId: 'harbingervar',
              },
              {
                label: 'Cloud Costing',
                to: '/docs/cloud-costing/intro',
                sidebarId: 'cloudcostingvar',
              },{
                label: 'Feelings',
                to: '/docs/feelings/intro',
                sidebarId: 'feelingsvar',
              }
            ],
        },
        {
          label: 'Act In',
          position: 'left',
          items: [
            {
              label: 'Success Factors',
              to: '/docs/act-in/intro',
              sidebarId: 'actinvar',
            },
            {
              label: 'Business One analytics​',
              to: '/docs/act-in-admin/intro',
              sidebarId: 'actinadminvar', 
            },
            {
              label: 'ByDesign',
              to: '/docs/act-in-bydesign/intro',
              sidebarId: 'actinbydesignvar',
            },
            {
              label: 'S/4HANA Analytics​',
              to: '/docs/act-in-s4hana/intro',
              sidebarId: 'actins4hanavar',
            },
            {
              label: 'SAC Planning',
              to: '/docs/act-in-sac-planning/intro',
              sidebarId: 'actinsacplanningvar',
            }
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
