import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/profile.png',
    bio: 'PhD Student <br>  <a href="https://sites.google.com/view/matrix-lab" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> MATRIX Lab</a>  <br> <a href="https://cds.iisc.ac.in" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> Department of Computational and Data Sciences</a> <br> <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer" style="color: #007acc;">Indian Institute of Science (IISc), Bangalore</a> <br>',
    name: 'Gourab Panigrahi',
    // status: '🌸',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/gourabp7'
      },
      {
        icon: 'i-simple-icons-googlescholar',
        link: 'https://scholar.google.com/citations?user=Cn4q0OQAAAAJ'
      },
      {
        icon: 'i-simple-icons-linkedin',
        link: 'https://www.linkedin.com/in/gourab-panigrahi-083939237'
      },
      {
        icon: 'i-simple-icons-orcid',
        link: 'https://orcid.org/0000-0001-8121-3320'
      },
      {
        icon: 'i-simple-icons-acm',
        link: 'https://dl.acm.org/profile/99661043822'
      },
      {
        icon: 'i-simple-icons-gmail',
        link: 'mailto:pgourab@iisc.ac.in'
      }
    ]
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'gourabp7.github.io/',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  // subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Gourab Panigrahi',
}
