import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nestor M.",
  lastName: "Robinson",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Data Scientist | Social Sector Analytics",
  avatar: "/images/avatar.jpg",
  email: "nrob536@aucklanduni.ac.nz",
  location: "Pacific/Auckland", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish", "Te Reo Maori"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about social sector analytics, evidence-based policy making, and the intersection of
      data science with social investment principles.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nrob536",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nrob536/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data science for social good and evidence-based policy making.
  </>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">COVID-19 Data Portal</strong></>,
    href: "/work/covid-19-data-portal-social-impact",
  },
  subline: (
    <>
      I'm Nestor, a data scientist at <Logo icon="/trademarks/logo-light.png" style={{ display: "inline-flex", top: "0.50em", marginLeft: "-0.25em" }}/> Stats NZ, where I develop data solutions
      <br /> for social good and evidence-based policy.  
Experienced in social sector analytics, administrative data, and public health dashboards.  
Passionate about using data to improve community outcomes.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nestor is a Carterton, Wairarapa based data scientist with a passion for using data for social good.
        Specializing in social sector analytics, he transforms complex administrative and survey data 
        into actionable insights for evidence-based policy making. His work includes public health dashboards,
        economic impact analysis, and community indicators that serve diverse stakeholders across government and civil society.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tautauranga Aotearoa - Stats NZ",
        timeframe: "Feb 2023 - Present",
        role: "Kaitātari Hoahoa — Design Analyst",
        achievements: [
          <>
           Led development and maintenance of two national data portals: Ngā Tūtohu Aotearoa - Indicators Aotearoa New
Zealand and the COVID-19 Data Portal, serving government agencies and public health decision-makers.
          </>,
          <>
            Managed administrative and technical operations for 200+ R Shiny applications on StatsNZ platform, 
            ensuring reliable access to social and economic data for policy analysts and researchers.
          </>,
          <>
            Administered StatsNZ public-facing GitHub repositories, promoting open data initiatives and transparent 
            government analytics practices.
          </>,
          <>
            Developed interactive dashboards for census-related products including Estimated Resident Population (ERP),
            supporting demographic analysis for social investment planning and resource allocation.
          </>,
          <>
            Applied statistical modeling frameworks to evaluate population estimates, directly informing government 
            funding decisions for health, education, and social services.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "National Instutute of Water and Atmospheric Research (NIWA)",
        timeframe: "Feb 2021 - Apr 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed R Shiny applications for climate data quality control, supporting environmental monitoring 
            for agricultural and public health planning in New Zealand.
          </>,
          <>
            Enhanced quality control procedures for the national weather station network, ensuring reliable data 
            for climate research and agricultural decision-making.
          </>,
          <>
            Co-authored Standard Operating Procedures for Climate Data services, establishing best practices 
            for data governance and stakeholder communication.
          </>,
          <>
            Delivered climate data analysis for 10+ commercial contracts, providing evidence-based insights 
            for agricultural, insurance, and infrastructure planning decisions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Auckland",
        description: <>Doctoral degree - Biological Sciences</>,
      },
      {
        name: "Universidad Autonomad de Baja California Sur",
        description: <>Master’s in Marine and Coastal Sciences</>,
      },
      {
        name: "Instituto Technologico de Bocal del Rio",
        description: <>Bachelor’s Degree, Biology</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Social Sector Data Analytics",
        description: <>Expert in administrative data, survey analysis, and social investment principles. 
        Experienced with IDI-style datasets covering health, education, justice, and social services.</>,
        images: [
          {
            src: "/images/projects/project-01/ianz-project.jpg",
            alt: "Social sector analytics project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Statistical & Econometric Modeling",
        description: <>Proficient in time series analysis, causal inference, and economic impact assessment. 
        Strong foundation in R, Python, SQL, and SAS for policy evaluation and forecasting.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Statistical modeling project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Visualization & Communication",
        description: <>Creating interactive dashboards and reports for diverse stakeholders. 
        Experience with R Shiny, web technologies, and presenting complex findings to non-technical audiences.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Data visualization project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
