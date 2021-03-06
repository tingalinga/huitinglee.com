import ZoojaIcon from "utils/components/zoojaicon";
import { Logo, LogoProps, logoPresets } from "utils/components/logo";
import useWindowDimensions from "utils/windowdimensions";

import app from "app.module.css";
import experience from "./experience.module.css";

interface ExperienceProps {
  company: string;
  site: string;
  period: string;
  role: string;
  additional_notes?: string;
  description: string[];
  actions?: { name: string; link: string }[];
  skills: { technical: LogoProps[]; design: LogoProps[] };
}

interface ExperienceList {
  [company: string]: ExperienceProps;
}

const experienceList: ExperienceList = {
  govtech: {
    company: "Government Technology Agency (GovTech)",
    site: "https://www.tech.gov.sg",
    period: "Jan 21 - Jul 21",
    role: "Full Stack Engineer Intern",
    description: [
      "In-charge of Full-stack Development of the GALE (GovTech Assisted Living Ecosystem) Onboard Web Application.",
      "Cleaned and revamped the UI/UX of the onboarding application with ReactJS, HTML and CSS.",
      "Worked with the ACAS (Advanced Cyber Attack Simulation) department to improve security on the Backend " +
        "using Java and Spring.",
      "Migrated backend server from Enos to Keycloak using SpringBoot, Java and Kong.",
    ],
    skills: {
      technical: [
        logoPresets.react,
        logoPresets.javascript,
        logoPresets.springboot,
        logoPresets.keycloak,
        logoPresets.kong,
        logoPresets.html,
        logoPresets.css,
      ],
      design: [],
    },
  },
  datature: {
    company: "Datature",
    site: "https://datature.io",
    period: "June 20 – Dec 20",
    role: "Frontend Software Engineer Intern",
    description: [
      "Designed the UI/UX for the beta product Datature Nexus as well as coded the frontend of the product " +
        "interface using NextJS, TypeScript and HTML/CSS.",
      "Conducted User Testing for the Beta Prototype with potential clients/investors.",
      "Built and designed the website with Adobe XD and Wordpress for the Beta product promotion.",
    ],
    actions: [
      {
        name: "View Datature Nexus Product site",
        link: "https://datature.io",
      },
      {
        name: "View Datature Portal site",
        link: "https://datature.io/portal",
      },
    ],
    skills: {
      technical: [
        logoPresets.nextjs,
        logoPresets.typescript,
        logoPresets.cssmodules,
        logoPresets.react,
        logoPresets.javascript,
        logoPresets.auth0,
        logoPresets.wordpress,
        logoPresets.github,
      ],
      design: [logoPresets.sketch, logoPresets.xd, logoPresets.premierepro],
    },
  },
  cs2103t: {
    company: "Nationcal University of Singapore",
    site: "https://www.nus.edu.sg",
    period: "Aug 20 - Dec 20",
    role: "CS2103/T Teaching Assistant",
    additional_notes:
      "CS2103/T is an NUS module that covers four main areas of software development, namely: object-" +
      "oriented system analysis, object-oriented system modelling and design, implementation, and testing," +
      " with emphasis on system modelling and design and implementation of software modules that work " +
      "cooperatively to fulfils the requirements of the system.",
    description: [
      "Mentored 2 teams of 5 students throughout their individual and group projects.",
      "Taught and covered the aforementioned topics of Software Development in weekly tutorial classes.",
      "Gave feedback to students on their code quality and projects.",
    ],
    skills: {
      technical: [logoPresets.java, logoPresets.javafx, logoPresets.github],
      design: [],
    },
  },
  aurora: {
    company: "Aurora Interactive",
    site: "https://teamaurorasg.wixsite.com/home",
    period: "Aug 19 – May 20",
    role: "Freelance Lead Illustrator",
    description: [
      "Collaborated with a team of entrepreneurs and developed a card game project as a designer.",
      "Conceptualised and designed the 60-card game using Procreate and Adobe Illustrator.",
    ],
    actions: [
      {
        name: "View Breaking Barriers Product site",
        link: "https://teamaurorasg.wixsite.com/home",
      },
    ],
    skills: {
      technical: [],
      design: [
        logoPresets.procreate,
        logoPresets.illustrator,
        logoPresets.photoshop,
      ],
    },
  },
};

const Experience = () => {
  const { width } = useWindowDimensions();

  const renderExperienceDisplay = (company: ExperienceProps) => {
    return (
      <div key={company.company} className={experience.container}>
        <p className={experience.title}>
          {company.role}
          <span className={experience.subheading}> | {company.period}</span>
        </p>
        <div className={experience.action}>
          <a href={company.site} target="_blank" rel="noreferrer">
            {company.company}
          </a>
        </div>
        <p className={experience.additional_notes}>
          {company.additional_notes}
        </p>
        <ul className={experience.description}>
          {company.description.map((line) => (
            <li key={line.substring(0, 10) + "..."}>{line}</li>
          ))}
        </ul>
        {company.actions?.length &&
          company.actions.map((action) => (
            <div key={action.name} className={experience.action}>
              <a href={action.link} target="_blank" rel="noreferrer">
                <img
                  alt="link icon"
                  src="https://img.icons8.com/material-outlined/50/666666/link--v1.png"
                />
                {action.name}
              </a>
            </div>
          ))}

        <div className={experience.skills}>
          {Object.entries(company.skills).map((skill) => {
            if (skill[1].length <= 0) return null;
            return (
              <div key={skill[0]} className={experience.skills_type}>
                <p className={experience.subheading}>{skill[0]} stack</p>
                <div className={experience.logos}>
                  {skill[1].map((logoProps) => (
                    <Logo key={logoProps.name} {...logoProps} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className={app.page_block}>
      {width > 768 ? (
        <h2 className={app.heading_box}>
          <ZoojaIcon icon="G" sideIcon />
          Experience
        </h2>
      ) : (
        <>
          <h2 className={app.heading_box}>
            <ZoojaIcon icon="G" sideIcon />
          </h2>
          <h2 className={app.heading_box}>Experience</h2>
        </>
      )}
      {Object.values(experienceList).map((experience) =>
        renderExperienceDisplay(experience)
      )}
    </div>
  );
};

export default Experience;
