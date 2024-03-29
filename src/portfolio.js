﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Luke Pritchard',
  title: "Hey there, I'm Luke",
  subTitle: emoji(
    'A passionate Software Engineer 🚀 with experience in building full stack web apps with TypeScript and React. Skilled in deploying microservices and automating infrastructure using GCP, k8s, and Terraform.',
  ),
  resumeLink:
    'https://drive.google.com/file/d/1ppIoC2x03iSgwerDuNkPKlmhyao7TMge/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/luke-pritch',
  linkedin: 'https://www.linkedin.com/in/luke-p/',
  stackoverflow: 'https://stackoverflow.com/users/7024144/lpritchard',
  email: 'lp@lukepritchard.ca',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle:
    'Software Engineer that is rapidly growing and learning his skillset',
  skills: [
    emoji(
      '⚡ Developing full stack enterprise web applications and microservices',
    ),
    emoji(
      '⚡ Building scalable cloud infrastructure for client needs',
    ),
    emoji(
      '⚡ Integrating third party services such as AWS, GCP, and Docker',
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'HTML5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'TS/JS',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'React.JS',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    // {
    //   skillName: 'Rust',
    //   fontAwesomeClassname: 'fab fa-rust',
    // },
    // {
    //   skillName: 'Go',
    //   fontAwesomeClassname: 'fab fa-golang',
    // },
    {
      skillName: 'GCP',
      fontAwesomeClassname: 'fab fa-google',
    },
    {
      skillName: 'Linux',
      fontAwesomeClassname: 'fab fa-linux',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'McMaster University',
      logo: require('./assets/images/mcmasterLogo2.png'),
      subHeader:
        'Bachelor of Engineering & Society in Computer Engineering',
      duration: 'Graduated 2019',
      desc:
        'A holistic education extending beyond the technical and into the broader impacts of engineering design',
      descBullets: [
        'Final year Inquiry explored the societal implications of newly adopted Computer Vision systems, advised by Vector Institute affiliate Dr. Reza Samavi',
        'Took Courses on Software Engineering, Operating Systems, Computer Architecture',
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Ada Health',
      companylogo: require('./assets/images/Ada_logo_new.jpg'),
      companyurl: 'https://ada.com',
      date: 'April 2022 – Present',
      desc:
        'Part of the Enterprise Delivery Team for Canada, delivering a assessment platform for Ontario Health.',
      descBullets: [
        'Automating our onboarding process with Terraform, NodeJS, and Google Cloud Platform',
        'Taking ownership of our internal tooling, including our internal APIs and an internal dashboard',
      ],
    },
    {
      role: 'Front End Developer',
      company: 'MobiStream',
      companylogo: require('./assets/images/mobistreamLogo.png'),
      companyurl: 'https://shadowhq.io/',
      date: 'Feb 2021 – March 2022',
      desc:
        'Built enterprise web portals, ownership over authentication flow, supporting multiple methods and dashboard customization. Owned the desktop incident flow for ShadowHQ, a cross-platform incident/ransomware response system.',
      descBullets: [
        'Electron for ShadowHQ desktop application',
        'React, Redux, Docker and AWS for web portal',
      ],
    },
    {
      role: 'Software Engineer - Contractor',
      company: 'nyble',
      companylogo: require('./assets/images/nyble.png'),
      companyurl: 'https://nyble.com/',
      date: 'Sept 2021 – Jan 2022',
      desc:
        'Helped build nyble’s MVP a buy now pay later platform for providing lease payment options to small buisnesses. Owned the in-store lease confirmation flow for the company’s first users. ',
      descBullets: [
        'TypeScript, React and Apollo for the frontend',
        'TypeScript, Node, GraphQL, Apollo, Prisma and Postgres for the backend',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Synergenics',
      companylogo: require('./assets/images/synergenicsLogo.png'),
      companyurl: 'https://www.synergenics.ca/',
      date: 'April 2019 – Sept 2020',
      desc:
        'Split between Developer and Technician Work, Working in a front end role to develop in-house React based applications. Created donateABLE to mine cryptocurrency in the browser for local charities. Maintained and managed existing WordPress CMS sites for dozens of clients.',
      descBullets: [
        'TypeScript and React for the frontend',
        'Firebase and Firestore for the backend',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'luke-pritch', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'false', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle:
    'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle:
        'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title:
        'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url:
        'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅',
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Feel free to reach out to discuss a project or job opportunity',
  number: '',
  email: 'lp@lukepritchard.ca',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
