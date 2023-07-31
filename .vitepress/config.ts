import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reiziger documentatie",
  description: "Documentatie omtrent het beheer en gebruik van reiziger het verhuursportaal voor jeugdbewegingen",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: 'Project informatie', link: '/guide/wat-is-reiziger' },
      { text: 'Installatie', link: '/guide/installatie' },
      { text: 'Configuratie', link: '/guide/configuratie' },
      {
        text: 'Accountbeheer', 
        collapsed: true, 
        items: [
          { text: 'Profielbeheer', link: 'account/profielbeheer' },
          { text: 'Browser sessies', link: 'account/browser-sessies' },
          { text: '2FA authenticatie', link: 'account/two-factor-authenticatie' },
        ]
      },
      {
        text: 'Gebruikersbeheer',
        collapsed: true,
        items: [
          { text: 'Gebruikers', link: '/gebruikersbeheer/gebruikers' },
          { text: 'Permissies', link: '/gebruikersbeheer/permissiebeheer' },
        ]
      }, 
      {
        text: 'Verhuringsportaal', 
        collapsed: true, 
        items: [
          { text: 'Huurders', link: 'verhuringen/huurders'}, 
          { text: 'Verhuringen', link: 'verhuringen' },
        ],
      },
      { text: 'Activiteitenlogboek', link: 'activiteitenlogboek' },
      { text: 'Facturatie', link: 'facturatie' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/just-another-hackaton/Reiziger' }
    ]
  }
})
