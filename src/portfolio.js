/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rohan Khurana Portfolio",
    type: "website",
    url: "https://github.com/rohan-khurana/",
  },
};

//Home Page
const greeting = {
  title: "Rohan Khurana",
  logo_name: "RohanKhurana",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://www.dropbox.com/s/wnxog2ilel26j8g/Rohan-Khurana-SDE.pdf?dl=0",
  portfolio_repository: "https://github.com/rohan-khurana/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rohan-khurana/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohan-khurana-cse/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCTqlWmuEZxVg87e-3Pp4dRA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rohankhurana.cse@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/rohan_khurana__/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rohan.khurana.07/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rohan_khurana__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "XR Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing creative and unique Augmented Reality and Virtual Reality based Mobile Applications",
        "⚡ Experience of working with Unity 3D, Google ARCore, Spark AR and Lens Studio.",
        "⚡ Building and improving experiential prototypes, develop new visualizations, animations and effects",
      ],
      softwareSkills: [
        {
          skillName: "Unity 3D",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google ARCore",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Vuforia",
          fontAwesomeClassname: "simple-icons:vuforia",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Wikitude",
          fontAwesomeClassname: "assets/images/wikitude.png",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Google Cardboard",
          fontAwesomeClassname: "simple-icons:googlecardboard",
          style: {
            backgroundColor: "transparent",
            color: "#f16522",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#058e0c",
          },
        },
        {
          skillName: "Spark AR",
          fontAwesomeClassname: "simple-icons:sparkar",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Lens Studio",
          fontAwesomeClassname: "la:snapchat",
          style: {
            backgroundColor: "transparent",
            color: "#f7f301",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "simple-icons:blender",
          style: {
            backgroundColor: "transparent",
            color: "#ea882b",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS, Javascript and Bootstrap.",
        "⚡ Creating application backend in Node, PHP & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
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
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "777bb3",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#6d07f4",
          },
        },
      ],
    } /*
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },*/,
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/rohankhdbzmf",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/rohankhurana",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@rohankhurana.cse",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#323754",
      },
      profileLink: "https://github.com/rohan-khurana/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "KIET Group of Institutions, Ghaziabad - AKTU",
      subtitle: "B.Tech(Hons) in Computer Science and Engineering",
      logo_path: "kiet_logo.png",
      alt_name: "KIET Group of Institutions",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Aggregate Percentage: 90.6% (till 5th Semester)",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have received award from respected director and HoD(CSE) for consistently best performance in academics.",
      ],
      website_link: "https://www.kiet.edu/",
    },
    {
      title: "Baal Baari Public School, Modinagar - CBSE",
      subtitle: "High School and Senior Secondary",
      logo_path: "bbps_logo.png",
      alt_name: "KIET Group of Institutions",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ High School Percentage: 95%",
        "⚡ Senior Secondary Percentage: 96%",
        "⚡ I have studied (5+1) subjects in my Senior Year - Physics, Chemistry, Mathematics, English Core, Computer Science and Physical Education",
        "⚡ Apart from this, I also a headed Student Council as Head Boy in my Senior Year.",
        "⚡ I have 'Student of the Year Award 2015' for consistently best performance in academics.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PQMUU3FJTKSV",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Severance",
      logo_path: "Michigan_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TQAJYJCUV95B",
      alt_name: "University of Michigan",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/HCZWMU82EBT5",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Artificial Intelligence Foundations",
      subtitle: "- SkillUp Online",
      logo_path: "skillup.jpg",
      certificate_link:
        "https://in.skillup.online/certificates/fc52f01a7937416c9e700f4f9e386d52",
      alt_name: "SkillUp",
      color_code: "#ffffff",
    },
    {
      title: "Interactivity with JavaScript",
      subtitle: "- Colleen van Lent",
      logo_path: "Michigan_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DA93UX75DUSW",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Building Database Applications in PHP",
      subtitle: "- Charles Severance",
      logo_path: "Michigan_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6M2D8PV8C3LZ",
      alt_name: "University of Michigan",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to SQL",
      subtitle: "- Charles Severance",
      logo_path: "Michigan_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/7YBMCRHTCGQZ",
      alt_name: "University of Michigan",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/f14bcbab-e08e-419f-a76c-513664044a69?source=linked_in_profile",
      alt_name: "Google",
      color_code: "#009dd6",
    },
    {
      title: "Introduction to Augmented Reality and ARCore",
      subtitle: "- Google Daydream Impact",
      logo_path: "daydream_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/33LEPWDLVVUM",
      alt_name: "Augmented Reality",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Volunteership and Hackathons",
  description:
    "I have worked evolving startups as XR Developer and Web Developer. I love organising events and that is why I am also involved with many technical society of my college as Core Team Lead and Student Mentor.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "HITS Solutions, Meerut",
          company_url: "https://www.linkedin.com/in/hits-solutions-76bb161b8/",
          logo_path: "hits_logo.jpg",
          duration: "Dec 2020 - Jan 2021",
          location: "Work From Home",
          description:
            "I worked as a Backend Developer on a website in a team of 4 members. I majorly dealt with designing Database Schema, Database integration using PHP-MySQL, setting up user login and authentication and validation, and improved frontend layout of 5 web pages.",
          color: "#ee3c26",
        },
        {
          title: "AR Developer Intern",
          company: "Dwarfstar Studios LLP, New Delhi",
          company_url:
            "https://www.linkedin.com/company/dwarfstar-studios-llp/",
          logo_path: "dwarfstar_logo.png",
          duration: "Jun 2019 - July 2019",
          location: "Remote",
          description:
            "I worked as a Team Lead and Augmented Reality Intern, worked on a unity-based android application, handled overall integration of the project, designed UI of the application, wrote screen capturing and animation scripts, designed 2 3D models, and designed 3 banners for image targets with 5-star feature recognition on Vuforia. My team delivered the project on time.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Core Team Lead & Student Mentor",
          company: "Innogeeks - A Technical Society of KIET",
          company_url: "https://innogeeks.in/",
          logo_path: "innogeeks_logo.png",
          duration: "Jan 2020 - PRESENT",
          location: "Ghaziabad, Uttar Pradesh",
          description:
            "Innogeeks is a technical Society of KIET Group of Institutions, Ghaziabad which focuses on peer-to-peer learning among students. As Core Lead - Domain and Training, I take care of the decision making, management of club's domain activities, student's training, project allotment and team building.",
          color: "#4285F4",
        },
        {
          title: "Student Placement Coordinator",
          company: "KIET Group of Institutions",
          company_url: "https://www.kiet.edu/overview-cprc",
          logo_path: "kiet_logo.png",
          duration: "Mar 2021 - PRESENT",
          location: "Ghaziabad, Uttar Pradesh",
          description:
            "SPC is a program initiated by KIET-Corporate Relations and Placement Centre to spread awareness of Placement activities brought by CRPC in the college in the respective Departments. As an SPC, I work closely with Team CRPC of KIET, act as link between student and CRPC and help students in reolving their placement related queries.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rohankhurana.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write technical blogs on New Emerging Technologies.",
    link: "https://medium.com/@rohan_khurana",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "C-448 Modi Pon Colony, Modinagar, Dist. Ghaziabad, Uttar Pradesh",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-8449031904",
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
  contactPageData,
};
