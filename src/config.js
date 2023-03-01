module.exports = {
  siteTitle: 'Abraao Carvalho',
  siteDescription:
    "I am passionate Front-end developer having an experience with HTML, CSS, JavaScript and React.js",
  siteKeywords:
    'Abraao Carvalho, Abraao, Carvalho, Abraham Carvalho, abrahamcarvalhoo, front end developer, web developer, javascript',
  siteUrl: 'https://abrahamcarvalhoo.com',
  siteLanguage: 'en',
  googleAnalyticsID: 'UA-XXXXX-X',
  name: 'Abraao Carvalho',
  location: 'England, UK',
  email: 'abraham.carvalhoo@gmail.com',
  github: 'https://github.com/abrahamcarvalhoo',
  twitterUsername: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abrahamcarvalhoo',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/abrahamcarvalhoo',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/abrahamcarvalhoo',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
