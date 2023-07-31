import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reiziger documentatie",
  description: "Documentatie omtrent het beheer en gebruik van reiziger het verhuursportaal voor jeugdbewegingen",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: 'Project informatie', link: 'docs/guide/wat-is-reiziger' },
      { text: 'Installatie', link: 'docs//guide/installatie' },
      { text: 'Configuratie', link: 'docs//guide/configuratie' },
      {
        text: 'Accountbeheer',
        collapsed: true,
        items: [
          { text: 'Profielbeheer', link: 'docs/account/profielbeheer' },
          { text: 'Beveiligings logboek', link: 'docs/account/beveiligingslogboek' },
          { text: 'Browser sessies', link: 'docs/account/browser-sessies' },
          { text: '2FA authenticatie', link: 'docs/account/two-factor-authenticatie' },
        ]
      },
      {
        text: 'Gebruikersbeheer',
        collapsed: true,
        items: [
          { text: 'Gebruikers', link: 'docs/gebruikersbeheer/gebruikers' },
          { text: 'Permissies', link: 'docs//gebruikersbeheer/permissiebeheer' },
        ]
      },
      {
        text: 'Verhuringsportaal',
        collapsed: true,
        items: [
          { text: 'Huurders', link: 'docs/verhuringen' },
          { text: 'Verhuringen', link: 'docs/verhuringen/index' },
        ],
      },
      { text: 'Activiteitenlogboek', link: 'docs/activiteitenlogboek' },
      { text: 'Facturatie', link: 'docs/facturatie' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/just-another-hackaton/Reiziger' }
    ]
  }
})
