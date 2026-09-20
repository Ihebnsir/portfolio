export const cvUrl = '/documents/Iheb-Nsir-CV.pdf';

export const profile = {
  name: 'Iheb Ncir',
  title: 'Telecommunications engineering student and full-stack developer',
  welcome: 'Welcome To My Portfolio',
  location: 'Tunis, Tunisia',
  availability: 'Available for new projects',
  bio: 'Telecommunications engineering student and full-stack developer focused on building resilient systems, secure networks, and practical product experiences that connect technical depth with business value.',
  seo: {
    title: 'Iheb Ncir | Telecommunications Engineering Student & Full-Stack Developer',
    description: 'Portfolio of Iheb Ncir, a telecommunications engineering student and full-stack developer building resilient systems, secure networks, and practical digital product experiences.',
    url: 'https://iheb-ncir.com',
    image: '/portrait.jpg',
  },
  roles: [
    'A Full-Stack Developer',
    'A Network Builder',
    'A Cybersecurity Learner',
    'A Telecom Engineer',
  ],
  social: {
    github: 'https://github.com/Ihebnsir',
    linkedin: 'https://www.linkedin.com/in/iheb-nsir-7a275227',
    emailLocal: ['iheb', 'ncir', 'portfolio'],
    emailDomain: 'gmail.com',
  },
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: cvUrl, external: true },
  { label: 'Contact', href: '#contact' },
];

export const getEmailHref = () => {
  const localPart = profile.social.emailLocal.join('.');
  return `mailto:${localPart}@${profile.social.emailDomain}`;
};
