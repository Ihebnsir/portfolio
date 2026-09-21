const certifications = [
  {
    id: 'ccna-presentation-reseaux',
    title: 'CCNA: Présentation des réseaux',
    issuer: 'Cisco Networking Academy',
    institution: 'École Nationale d\'Electronique et des Télécommunications de Sfax',
    instructor: 'Achraf Makhloufi',
    date: '15 Jun 2026',
    category: 'Networking',
    description: 'A foundational networking certification covering the essential concepts of computer networks, networking devices, communication principles, and the fundamentals required to understand and build modern IP networks.',
    skills: ['Computer Networking', 'Network Fundamentals', 'Cisco Networking', 'IP Networks', 'Network Devices'],
    credentialId: '5a9704bc-8e91-429a-a20b-7f79a33a3d9e',
    fileName: 'CCNA-_Introduction_to_Networks_certificate_ihebncir-enetcom27-gmail-com_5a9704bc-8e91-429a-a20b-7f79a33a3d9e.pdf',
  },
  {
    id: 'full-stack-js-node-react',
    title: 'Full Stack JS (Node & React) Training',
    issuer: '9antra',
    recipient: 'Iheb Ncir',
    training: 'Two Months of Full Stack JS (Node & React) training and coaching',
    date: '01/09/2026',
    website: 'www.9antra.tn',
    category: 'Full-Stack Development',
    description: 'A practical Full Stack JavaScript training focused on building modern web applications using React and Node.js, with hands-on development and coaching.',
    skills: ['JavaScript', 'React', 'Node.js', 'Full-Stack Development', 'Web Development'],
    fileName: 'Nsir Iheb.pdf',
  },
  {
    id: 'hedera-certified-foundation',
    title: 'Hedera Certified Foundation (HCF)',
    issuer: 'Hedera / Hashgraph Association',
    category: 'Blockchain / Web3',
    description: null,
    skills: [],
    fileName: 'b4b09dae-2d05-47bd-bfb7-e0453a7d48d9.pdf',
  },
  {
    id: 'hedera-certified-developer-associate',
    title: 'Hedera Certified Developer Associate (HCDA)',
    issuer: 'Hedera / Hashgraph Association',
    category: 'Blockchain / Web3',
    description: null,
    skills: [],
    fileName: '774000d1-9f75-478e-97c0-8416503d652a.pdf',
  },
  {
    id: 'hedera-business-foundation',
    title: 'Hedera Business Foundation (HBF)',
    issuer: 'Hedera / Hashgraph Association',
    category: 'Blockchain / Web3',
    description: null,
    skills: [],
    fileName: '512b631b-2117-4f8d-9ada-118def017bbd.pdf',
  },
];

const certificationsWithUrls = certifications.map((certification) => ({
  ...certification,
  pdfUrl: `${process.env.PUBLIC_URL}/certificates/${encodeURIComponent(certification.fileName)}`,
}));

export default certificationsWithUrls;
