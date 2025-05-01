// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AlonCS', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/PersonalPortfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
    
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alonzo Cabrera',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alonzo-cabrera-8530a0297',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'alonzocabrera48@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1MyvpM9W4ydCwp0TVwa0ICO448cv3FAzI/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Html',
    'CSS',
    'JavaScript',
    'Python',
    'Firebase',
    'Git',
    'PHP',
    'React.js',
    'Docker',
    'AWS'
  ],
  experiences: [
    {
      company: 'Digital nest',
      position: 'Web Developer',
      from: 'August 2024',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Farm-ng',
      position: 'Sales and Education',
      from: 'July 2024',
      to: 'November 2024',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services (AWS)',
      year: 'April 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Hartnell College',
      degree: 'Associate of Arts in Mathematics',
      from: 'August 2024',
      to: 'Present',
    },
    {
      institution: 'Alisal High School',
      degree: 'High school Diploma',
      from: 'August 2020',
      to: 'May 2024',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  bblog: {
    source: 'dev', 
    username: '', // Empty username will hide this section
    limit: 2,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },experiences: [
      {
        company: 'Digital nest',
        position: 'Web Developer',
        from: 'August 2024',
        to: 'Present',
        companyLink: 'https://example.com',
      },
      {
        company: 'Farm-ng',
        position: 'Sales and Education',
        from: 'July 2024',
        to: 'November 2024',
        companyLink: 'https://example.com',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        body: 'Amazon Web Services (AWS)',
        year: 'April 2024',
        link: 'https://example.com',
      },
    ],
    educations: [
      {
        institution: 'Hartnell College',
        degree: 'Associate of Arts in Mathematics',
        from: 'August 2024',
        to: 'Present',
      },
      {
        institution: 'Alisal High School',
        degree: 'High school Diploma',
        from: 'August 2020',
        to: 'May 2024',
      },
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
