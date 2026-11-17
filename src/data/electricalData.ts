export type WorkSector = 'Commercial' | 'Industrial' | 'Strata & Comms';
export type WorkStatus = 'In Progress' | 'Commissioned';

export interface ProjectWork {
  id: string;
  title: string;
  client: string;
  sector: WorkSector;
  status: WorkStatus;
  location: string;
  specLine: string;
  summary: string;
  deliverables: string[];
  outcome: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CoreService {
  num: string;
  title: string;
  description: string;
  scopeOption: string;
}

export interface CostGuideItem {
  id: string;
  label: string;
  exGstMin: number;
  exGstMax: number;
  isTender?: boolean;
  scopeOption: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credential: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ClientQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
}

export const QUOTE_SCOPES = [
  'Commercial Fit-Out & Wiring',
  'Switchboard & 3-Phase Upgrade',
  'Testing, Tagging & Compliance',
  'Preventive Maintenance / 24/7 Repair',
  'Data & ACMA Network Cabling',
] as const;

export const WORKS_LIST: ProjectWork[] = [
  {
    id: 'parramatta-cbd-fitout',
    title: 'Level 9 Office Power & Cat6A Fit-Out',
    client: 'Macquarie Legal Group',
    sector: 'Commercial',
    status: 'In Progress',
    location: 'Parramatta CBD, NSW 2150',
    specLine: '400A Sub-Main · 84 Cat6A Drops',
    summary:
      'Power distribution, DALI lighting, dual-feed UPS server circuits, and Fluke-tested Cat6A cabling delivered out-of-hours.',
    deliverables: [
      '48-pole commercial distribution board with surge protection',
      '112 workstation power and Cat6A umbilical drops',
      'AS/NZS 2293 emergency and exit lighting certification',
      'NSW Fair Trading CCEW lodged on completion',
    ],
    outcome: 'Zero disruption to occupied floors during fit-out',
    imageSrc: '/src/assets/images/work_commercial_fitout_1794916997239.jpg',
    imageAlt: 'WestGrid electrician terminating Cat6A data cabling inside a Parramatta commercial office fit-out',
  },
  {
    id: 'silverwater-switchboard',
    title: 'Three-Phase Switchboard & Thermal Remediation',
    client: 'MetroFresh Cold Logistics',
    sector: 'Industrial',
    status: 'In Progress',
    location: 'Silverwater, NSW 2128',
    specLine: '630A 3-Phase · Weekend Cutover',
    summary:
      'Replacing an overheating 630A main switchboard via temporary generator bypass to keep cold-storage rooms running continuously.',
    deliverables: [
      'Pre-built IP54 Form 3b switchboard tested off-site',
      '250 kVA generator bypass protecting refrigeration load',
      '240mm² XLPE sub-main terminations and thermal scan',
    ],
    outcome: '0 °C cold-chain variance during 4-hour night cutover',
    imageSrc: '/src/assets/images/work_industrial_switchboard_1794916998112.jpg',
    imageAlt: 'Industrial electrician performing thermal imaging and multimeter testing on a 415V three-phase switchboard',
  },
  {
    id: 'cbd-main-distribution',
    title: 'Multi-Storey Main Board & Compliance Audit',
    client: 'Harbourview Strata SP84102',
    sector: 'Strata & Comms',
    status: 'Commissioned',
    location: 'Sydney Metro, NSW',
    specLine: '250A CT Metering · AFSS Compliant',
    summary:
      'Upgraded legacy switchboards with individual RCBO protection, cleared defective exit lighting, and issued full compliance logs.',
    deliverables: [
      'Main distribution board commissioning and labelling',
      'AS/NZS 3760 plant test and tag register',
      'Annual Fire Safety Statement electrical sign-off',
    ],
    outcome: '100% pass on annual strata safety inspection',
    imageSrc: '/src/assets/images/hero_electricians_site_1794916996135.jpg',
    imageAlt: 'Two licensed Australian electricians inspecting circuit breakers and digital drawings at a commercial main switchboard',
  },
  {
    id: 'rydalmere-comms-ups',
    title: 'Server Room UPS & Structured Network Upgrade',
    client: 'Western Health Diagnostics',
    sector: 'Strata & Comms',
    status: 'Commissioned',
    location: 'Rydalmere, NSW 2116',
    specLine: '30 kVA UPS · Fluke Certified',
    summary:
      'Installed backup UPS power and dedicated pathology circuits alongside neatened Cat6A patching and rack telemetry.',
    deliverables: [
      '30 kVA double-conversion UPS with maintenance bypass',
      'AS/NZS 3003 body-protected clinic circuits',
      'Fluke DSX certification report for all data links',
    ],
    outcome: 'Executed over Sunday closure with zero clinic downtime',
    imageSrc: '/src/assets/images/team_tech_portrait_1794916998305.jpg',
    imageAlt: 'ACMA-registered electrical and data technician certifying patch panel links with a Fluke tester',
  },
];

export const CORE_SERVICES: CoreService[] = [
  {
    num: '01',
    title: 'Switchboards & Three-Phase Power',
    description:
      'Main board upgrades, RCBO safety switches, surge protection, and night/weekend cutovers built to AS/NZS 3000.',
    scopeOption: 'Switchboard & 3-Phase Upgrade',
  },
  {
    num: '02',
    title: 'Commercial & Warehouse Fit-Outs',
    description:
      'Complete power design, LED lighting, EV fleet bays, and ACMA Cat6A data cabling under one contractor.',
    scopeOption: 'Commercial Fit-Out & Wiring',
  },
  {
    num: '03',
    title: 'Testing, Tagging & Compliance Audits',
    description:
      'AS/NZS 3760 test & tag, RCD trip logs, emergency exit lighting tests, and thermography with digital handover packs.',
    scopeOption: 'Testing, Tagging & Compliance',
  },
  {
    num: '04',
    title: 'Preventive Maintenance & 24/7 Fault Repair',
    description:
      'Scheduled maintenance contracts and rapid Sydney metro call-outs for power outages, tripping mains, and equipment faults.',
    scopeOption: 'Preventive Maintenance / 24/7 Repair',
  },
];

export const COST_GUIDE_ITEMS: CostGuideItem[] = [
  {
    id: 'board-upgrade',
    label: 'Commercial Distribution Board & RCBO Upgrade (Up to 36-Pole)',
    exGstMin: 2400,
    exGstMax: 3900,
    scopeOption: 'Switchboard & 3-Phase Upgrade',
    note: 'Includes Type A RCBOs, circuit tracing, labelling & NSW CCEW.',
  },
  {
    id: 'compliance-bundle',
    label: 'Workplace Compliance Audit (50× Test & Tag + RCD + Exit Lights)',
    exGstMin: 420,
    exGstMax: 680,
    scopeOption: 'Testing, Tagging & Compliance',
    note: 'Includes digital AS/NZS 3760 asset register & compliance report.',
  },
  {
    id: 'data-power',
    label: 'Office Expansion (8× Cat6A Data Drops + 4× Dual GPOs)',
    exGstMin: 1850,
    exGstMax: 2900,
    scopeOption: 'Data & ACMA Network Cabling',
    note: 'Includes ACMA Open Cabler termination & Fluke pass report.',
  },
  {
    id: 'three-phase-outlet',
    label: 'Warehouse 3-Phase 32A/63A Machinery Circuit (Up to 25m)',
    exGstMin: 1200,
    exGstMax: 2150,
    scopeOption: 'Switchboard & 3-Phase Upgrade',
    note: 'Includes heavy-duty conduit, IP66 isolator & phase rotation check.',
  },
  {
    id: 'fitout-tender',
    label: 'Full Tenancy Fit-Out or Multi-Site Maintenance Agreement',
    exGstMin: 0,
    exGstMax: 0,
    isTender: true,
    scopeOption: 'Commercial Fit-Out & Wiring',
    note: 'Fixed proposal issued after an on-site walk-through or plan review.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mark Jenkins',
    role: 'Director & Master Electrician',
    credential: 'NSW Lic #384912C · 19 Yrs Exp',
    bio: 'Leads project scoping, switchboard engineering, and direct client handovers from our Parramatta office.',
    imageSrc: '/src/assets/images/team_director_portrait_1794916998005.jpg',
    imageAlt: 'Portrait of Mark Jenkins, Director and Master Electrician at WestGrid Electrical in Parramatta',
  },
  {
    name: 'Sarah Callahan',
    role: 'Comms, Data & Compliance Lead',
    credential: 'ACMA Open Cabler · AS/NZS 3003',
    bio: 'Oversees Cat6A/fibre fit-outs, UPS backup systems, and clinical/commercial compliance testing.',
    imageSrc: '/src/assets/images/team_tech_portrait_1794916998305.jpg',
    imageAlt: 'Portrait of Sarah Callahan holding a Fluke network certifier in a Sydney office',
  },
  {
    name: 'Daniel Kowalski',
    role: 'Industrial & 3-Phase Supervisor',
    credential: 'Level 2 ASP · Thermography Certified',
    bio: 'Manages heavy industrial distribution, cold-chain bypasses, and 24/7 metro fault response.',
    imageSrc: '/src/assets/images/work_industrial_switchboard_1794916998112.jpg',
    imageAlt: 'Daniel Kowalski testing an industrial three-phase distribution board in Silverwater',
  },
];

export const CLIENT_QUOTES: ClientQuote[] = [
  {
    quote:
      'WestGrid delivered our 1,400 m² Parramatta office fit-out four days ahead of lease handover, with every circuit labelled and our CCEW sent the same afternoon.',
    author: 'Claire Henderson',
    role: 'Facilities Lead',
    company: 'Macquarie Legal Group',
    location: 'Parramatta CBD',
  },
  {
    quote:
      'When our cold-room sub-main failed at 5:30 AM, their crew had temporary power running within two hours and completed the permanent 400A repair over the weekend.',
    author: 'Greg Telford',
    role: 'Operations Manager',
    company: 'MetroFresh Cold Logistics',
    location: 'Silverwater NSW',
  },
];
