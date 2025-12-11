/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pelumi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pelumi Johnson Portfolio",
    type: "website",
    url: "http://Pelumijohnson.com/",
  },
};

//Home Page
const greeting = {
  title: "Pelumi Johnson",
  logo_name: "Cyber_Lyon",
  nickname: "CyberLyon",
  subTitle:
    "A passionate individual rising in the digital world with a heart to learn, to strengthen, and to protect the spaces where people build their lives. Because if we don’t stand up for what matters most, who will?",
  resumeLink:
    "https://docs.google.com/document/d/1CCCAGnBNnLx5yMCVcSkDInhSwshAYsA44MTWF1-gWD4/edit?usp=sharing",
  portfolio_repository:
    "https://github.com/Pelumi-Johnson/Pelumi-Johnson-Cybersecurity-Portfolio",
  githubProfile:
    "https://github.com/Pelumi-Johnson/Pelumi-Johnson-Cybersecurity-Portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Pelumi-Johnson/Pelumi-Johnson-Cybersecurity-Portfolio",
  // linkedin: "https://www.linkedin.com/in/cyberlyon/",
  // gmail: "pelumijohnson1999@gmail.com",
  // instagram: "https://www.instagram.com/lumijohnson_?igsh=ajJhYXJoY3kyM3Fh&utm_source=qr"

  {
    name: "Gmail",
    link: "mailto:pelumijohnson1999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cyberlyon/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/lumijohnson_?igsh=ajJhYXJoY3kyM3Fh&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Github",
    link:
      "https://github.com/Pelumi-Johnson/Pelumi-Johnson-Cybersecurity-Portfolio",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity & Digital Defense",
      fileName: "DataScienceImg",
      skills: [
        "⚡Strengthen system defenses using Linux security measures, encryption basics, fail2ban protection, honeypot awareness, and sound configuration habits.",
        "⚡ Apply core SOC practices such as alert triage, log correlation, prioritization, and clear documentation based on severity and impact.",
        "⚡ Investigate incidents using Splunk searches, packet captures, and cross-log comparisons to understand what happened and why.",
        "⚡ Recognize patterns of account misuse, credential abuse, brute-force attempts, and suspicious login activity across systems.",
        "⚡ Monitor and interpret security alerts from SIEM, firewall, IDS/IPS, VPN logs, and endpoint activity to identify unusual or risky behaviors.",
      ],

      softwareSkills: [
        {
          skillName: "Splunk",
          fontAwesomeClassname: "logos-splunk",
        },

        {
          // Wireshark uses your PNG image (no icon class)
          skillName: "Wireshark",
          fontAwesomeClassname: "",
          imageSrc: "Wireshark_Icon.png",
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: { backgroundcolor: "transparent", color: "#1A73E8" },
        },
        {
          skillName: "Cisco Networking",
          fontAwesomeClassname: "simple-icons:cisco",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos-bash-icon",
        },
      ],
    },
    {
      title: "Cloud & Network Foundations",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build and troubleshoot small networks using Packet Tracer labs (switches, routers, VLANs, DHCP, NAT, and wireless)",
        "⚡ Configure AWS VPC components such as subnets, route tables, internet gateways, and security groups",
        "⚡ Launch and manage Linux-based EC2 instances for lab environments and security exercises",
        "⚡ Practice secure connectivity with VPN concepts, site-to-site tunnels, and basic cloud security hardening.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
        },

        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Linux, Scripting & Security Tooling",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Explore offensive security concepts through reconnaissance and enumeration, using tools like Shodan, Censys, TryHackMe labs, and CVE lookups to understand exposure and risk.",
        "⚡ Use directory and endpoint discovery techniques with tools such as Gobuster, curl, and scanning utilities to reveal hidden application paths and misconfigurations.",
        "⚡ Practice password and cryptography challenges using Cain, OpenSSL, hash cracking exercises, and controlled attack simulations to understand real attacker behavior.",
        "⚡ Strengthen Linux command-line confidence by managing processes, permissions, services, logs, and scripting basic command pipelines for analysis.",
      ],
      softwareSkills: [
        {
          skillName: "TryHackMe",
          fontAwesomeClassname: "simple-icons:tryhackme",
        },

        {
          skillName: "OpenSSL",
          fontAwesomeClassname: "simple-icons:openssl",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "VirtualBox",
          fontAwesomeClassname: "simple-icons:virtualbox",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Terminal / CLI Tools",
          fontAwesomeClassname: "simple-icons:gnometerminal",
        },
      ],
    },
    {
      title: "Programming & Scripting Foundations",
      fileName: "DesignImg",
      skills: [
        "⚡  Read, write, and modify code in core languages like HTML, CSS, JavaScript, Python, and Java for web, scripting, and coursework tasks.",
        "⚡ Use Node.js and npm to run scripts, manage packages, and experiment with simple backend and automation workflows.",
        "⚡ Work comfortably in VS Code with extensions, integrated terminal, and basic debugging to speed up problem-solving and project work.",
        "⚡ Apply Git-based workflows to track changes, commit progress, and keep cybersecurity labs and experiments organized.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },

        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Rutgers University",
      iconifyClassname: "",
      imageSrc: "rutgers_logo.png",
      style: {
        color: "#CC0033",
      },
      profileLink: "https://www.rutgers.edu/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "fa-brands:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/cyberlyon/",
    },
    {
      siteName: "University of Maryland Global Campus",
      iconifyClassname: "",
      imageSrc: "umgc_logo.png",
      style: {
        color: "#003C71",
      },
      profileLink: "https://www.umgc.edu/",
    },
    {
      siteName: "Per Scholas",
      iconifyClassname: "",
      imageSrc: "Perbaby.png", // EXACT match including uppercase P
      style: { color: "#0B74DE" },
      profileLink: "https://perscholas.org/",
    },

    {
      siteName: "Forage Virtual Experience",
      iconifyClassname: "",
      imageSrc: "forage_logo.png",
      style: {
        color: "#0047AB",
      },
      profileLink: "https://www.theforage.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Maryland Global Campus (UMGC)",
      subtitle: "B.S. in Cybersecurity Technology",
      logo_path: "umgc_logo.png", // ✔ updated
      alt_name: "UMGC",
      duration: "2025 – 2026 (In Progress)",
      descriptions: [
        "⚡ Studying core cybersecurity topics including network security, cloud technologies, risk management, and digital forensics.",
        "⚡ Building secure architectures using AWS and cloud-native controls aligned with modern security frameworks.",
        "⚡ Strengthening incident response skills through labs on log analysis, access control, and threat modelling.",
      ],
      website_link: "https://www.umgc.edu/",
    },
    {
      title: "Rutgers University",
      subtitle: "B.A. in Sociology",
      logo_path: "rutgers_logo.png", // ✔ updated
      alt_name: "Rutgers University",
      duration: "Completed",
      descriptions: [
        "⚡Developed strong foundations in research, human behavior, and critical thinking.",
        "⚡ Built communication and analytical skills that now support user-focused security analysis and reporting.",
        "⚡ Experience working with data, patterns, and social systems that translates well into threat and risk analysis.",
      ],
      website_link:
        "https://www.linkedin.com/in/cyberlyon/details/education/1756576471687/single-media-viewer/?profileId=ACoAADgYxP0BfxWoN4uj3iKUttJq3q13V49r3X4",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cybersecurity Analyst Training",
      subtitle: "Per Scholas",
      logo_path: "Per-Scholas-Secondary-Logo-Dark.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1WJSBi4p7HZvj8NSzNn7iPNDO2F3CUo5Z?usp=drive_link",
      color_code: "#F4CA63",
    },
    {
      title: "Cybersecurity Virtual Experience Programs",
      subtitle: "Deloitte, AIG, Mastercard, Telstra, Tata (Forage)",
      logo_path: "For.png", // <-- your Forage logo file
      certificate_link:
        "https://drive.google.com/drive/folders/1V6mrRsUy4aQ0KMA6IoJbsNWzodvlASd9?usp=sharing",
      alt_name: "The Forage",
      color_code: "#F5F3EE",
    },
    {
      title: "CompTIA CySA+ (Cybersecurity Analyst)",
      subtitle: "CompTIA",
      logo_path: "CySA.png", // <- your logo file
      certificate_link:
        "https://www.credly.com/badges/88c40610-8285-435e-9431-a49d62c420be/linked_in_profile",
      alt_name: "CompTIA CySA+",
      color_code: "#FFFFFF",
    },
    {
      title: "Security Operations & Hands-On Labs",
      subtitle: "TryHackMe",
      logo_path: "TryHackMe_Bj.png", // ✔ correct logo
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "TryHackMe",
      color_code: "#F5F5F5",
    },

    {
      title: "Linux Essentials Certification",
      subtitle: "Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/2449d679-2aa9-4c5f-9bba-8ff3cb602b7a/linked_in_profile",
      alt_name: "Cisco Networking Academy",
      color_code: "#1D4E80", // <-- perfect non-blue background
    },
    {
      title: "Splunk Core Certified User",
      subtitle: "Splunk",
      logo_path: "splun.png", // <-- Your logo file, exactly as named
      certificate_link:
        "https://www.credly.com/badges/4b3df1fc-2885-4cdb-bb18-8c65ffc2f656/linked_in_profile",
      alt_name: "Splunk User",
      color_code: "#F8F9FA", // soft white header (you can change later if you want)
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Training and Volunteership",
  description:
    "Building a cybersecurity career shaped by hands on training, real world work experience, and faith rooted leadership. These experiences strengthen my character, focus, and commitment to serving people with excellence.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Delivery Associate",
          company: "Amazon",
          company_url: "https://www.amazon.com/",
          logo_path: "amazon.png",
          duration: "2023 – Present",
          location: "New Jersey, USA",
          description:
            "⚡ Analyzed route data and corrected mapping errors on the fly, improving navigation efficiency and keeping workflows smooth in changing traffic and weather conditions.\n" +
            "⚡ Maintained secure chain of custody procedures and verified delivery accuracy, reinforcing attention to detail, documentation discipline, and operational risk awareness.\n" +
            "⚡ Resolved device faults and navigation issues by diagnosing symptoms, rebooting scanners and phones, and adjusting routing settings to restore functionality during delivery operations.",

          color: "#FF9900",
        },
        {
          title: "Customer Service Representative",
          company: "Vans, a VF Company",
          company_url: "https://www.vans.com/",
          logo_path: "Vans_log.png", // ⬅️ EXACT file name
          duration: "Mar 2022 – Jun 2022",
          location: "Elizabeth, New Jersey, USA",
          description:
            "⚡ Assisted over 50 customers per shift with sizing, product recommendations, and point-of-sale support, using registers and inventory systems to locate items and complete purchases.\n" +
            "⚡ Collaborated with 5 to 7 teammates on floor sets, displays, and opening/closing tasks, adapting to changing priorities while keeping wait times low and store operations running smoothly.\n" +
            "⚡ Managed and organized a backroom inventory of 500+ shoe units, optimizing layout and labeling so restocking, cycle counts, and order pulls were faster and supportive for the whole team.",

          color: "#000000",
        },
      ],
    },
    {
      title: "Practical Experience & Training Programs",
      work: false,
      experiences: [
        {
          title: "Cybersecurity Analyst Training",
          company: "Per Scholas",
          company_url: "https://perscholas.org/",
          logo_path: "per_logo.png",
          duration: "2025",
          location: "Newark, NJ",
          description:
            "⚡Strengthened habits like documentation discipline, teamwork under pressure, and analytical reasoning through a 15-week training that contributed to earning the CySA+ certification.\n" +
            "⚡Investigated alerts and walked through incident response playbooks, practicing to think like a SOC analyst when deciding what to escalate, document, and communicate to stakeholders.\n" +
            "⚡Completed cybersecurity analyst training focused on SIEM analysis, log review, threat detection, and network security fundamentals through structured hands-on labs and guided instruction.",
          color: "#0071B8",
        },

        {
          title: "Networking & Linux Training",
          company: "Cisco Networking Academy",
          company_url: "https://www.netacad.com/",
          logo_path: "Cis.png",
          duration: "2025",
          location: "Hybrid",
          description:
            "⚡Practiced troubleshooting connectivity issues, verifying addressing, and adjusting configurations while learning how software and hardware interact in real network environments.\n" +
            "⚡Built practical networking foundations using Cisco Packet Tracer, configuring routers, switches, VLANs, and basic routing to visualize how data moves securely across different segments.\n" +
            "⚡Completed Linux Essentials coursework focused on command-line navigation, permissions, processes, and basic security, preparing for later work in Kali, Ubuntu, and SOC-style investigations.",
          color: "#1BA0D7",
        },

        {
          title: "Cybersecurity Virtual Experience Programs",
          company: "Deloitte, AIG, Mastercard, Telstra, Tata (Forage)",
          company_url: "https://www.theforage.com/",
          logo_path: "for_logo.png",
          duration: "2025 – Present",
          location: "Remote",
          description:
            "⚡Strengthened analytical thinking, threat identification, and incident breakdown skills by working through structured, case-based cyber scenarios.\n" +
            "⚡Built real-world context for security operations by practicing how analysts review evidence, document findings, and communicate recommendations clearly.\n" +
            "⚡Completed virtual cybersecurity projects simulating SOC investigations, risk assessments, log analysis, and advisory tasks designed to mirror enterprise security expectations and workflows.",
          color: "#0047AB",
        },

        {
          title: "Security Operations and Hands-On Cyber Labs",
          company: "TryHackMe",
          company_url: "https://tryhackme.com/",
          logo_path: "TryHackMe_Bj.png",
          duration: "2025 – Present",
          location: "Remote",
          description:
            "⚡Strengthened investigation and problem-solving skills through exercises that mimic SOC workflows including log inspection, credential attacks, evidence collection, and system analysis.\n" +
            "⚡Built practical familiarity with Linux, security tooling, and attacker behaviors while advancing through structured learning paths focused on blue-team readiness and defensive skill growth.\n" +
            "⚡Completed cybersecurity labs covering reconnaissance, enumeration, privilege escalation, and testing techniques across realistic attack-style environments designed for analyst development.",
          color: "#C91A2B",
        },

        {
          title: "Cybersecurity Coursework & Skill Development",
          company: "uCertify Platform (UMGC)",
          company_url: "https://www.ucertify.com/",
          logo_path: "ucert.logo.png",
          duration: "2025 – Present",
          location: "Remote",
          description:
            "⚡Completed course modules in networking, cloud concepts, Linux, and troubleshooting, working through uCertify labs that strengthened learning and understanding across multiple domains.\n" +
            "⚡Built disciplined study habits and practical familiarity with foundational cybersecurity topics while preparing for advanced work in analysis, operations, and future certification pathways.\n" +
            "⚡Strengthened technical comprehension by working through case-based exercises, configuration tasks, and platform quizzes aligned with UMGC course objectives and industry expectations.",
          color: "#C91A2B",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Leader & Outreach",
          company: "InterVarsity Christian Fellowship",
          company_url: "https://intervarsity.org/",
          logo_path: "InterVarsity.png",
          duration: "2023 - 2024",
          location: "Rutgers University",
          description:
            "⚡ Led small groups while facilitating discussion, mentorship, and spiritual formation, strengthening communication, active listening, and leadership presence.\n" +
            "⚡ Strengthened public speaking, leadership confidence, and relationship-building through consistent service, supporting individuals and guiding group dynamics with clarity and empathy.\n" +
            "⚡Organized outreach events and coordinated campus engagement efforts, developing logistical planning skills, teamwork, event execution, and student interactions across diverse groups.",
          color: "#1E6F9F",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects come from hands-on labs at Per Scholas, UMGC, Raspberry Pi, and personal builds. They center on SOC analysis, network defense, cloud security, and real-world troubleshooting.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Pelumi_logo.png",
    description:
      "I’m always open to conversations about cybersecurity, cloud, and early-career opportunities. The best way to reach me is through LinkedIn or email, I aim to respond within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I share reflections from my cybersecurity journey, including the labs I’ve completed, the lessons gained from training programs, and clear explanations of the concepts I’m learning.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Newark, NJ, USA 07106",
    locality: "Newark",
    country: "USA",
    region: "New Jersey",
    postalCode: "07106",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Newark",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
