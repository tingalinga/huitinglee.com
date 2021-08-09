import React from "react";

import ZoojaIcon from "utils/components/zoojaicon";
import { Logo, LogoProps, logoPresets } from "utils/components/logo";

import outofthyme_image from "assets/projects/outofthyme.png";
import captsule_image from "assets/projects/captsule.png";
import captsule_pdf from "assets/projects/CAPTsule AY19:20.pdf";
import rocketpad_demo from "assets/projects/rocketpad_demo.mp4";
import jazzttitude_stickers from "assets/projects/jazzttitude_stickers.png";

import app from "app.module.css";
import experience from "./experience.module.css";
import projects from "./projects.module.css";

interface ProjectProps {
  name: string;
  image: string;
  period: string;
  role: string;
  description?: string[];
  contributions?: string[];
  actions?: { name: string; link: string }[];
  skills: { technical: LogoProps[]; design: LogoProps[] };
}

interface ProjectList {
  [project: string]: ProjectProps;
}

const projectList: ProjectList = {
  outofthyme: {
    name: "Out of Thyme",
    image: outofthyme_image,
    period: "Aug 20 - Dec 20",
    role: "Game Programmer",
    description: [
      "Out of Thyme is a single-player platformer game featuring a player-controlled character and" +
        "their time-controlling thyme. Interact with the world by throwing the time-controlling thyme at" +
        "objects to “rewind” their effects/state (e.g throwing thyme at a projectile to reverse its motion).",
      "This game was created by a team of 4 for the module NM3216 Game Design and got showcased at the NUS" +
        " Arts Festival.",
    ],
    contributions: [
      "Coded and developed a platform game using GameMaker Studio 2.",
      "Designed and arranged levels on Miro, as well as recruited playtesters for quality assurance testing.",
      "Sourced for royalty free art and drew sprites for the game art.",
    ],
    actions: [
      {
        name: "play on itch.io",
        link: "https://tingalinga.itch.io/out-of-thyme",
      },
    ],
    skills: {
      technical: [logoPresets.gamemaker],
      design: [logoPresets.miro, logoPresets.photoshop],
    },
  },
  rocketpad: {
    name: "RocketPad",
    image: rocketpad_demo,
    period: "Oct 19 - July 20",
    role: "UI/UX Designer",
    description: [
      "RocketPad is a prototype which aims to elevate the struggles of budding startups and to improve their" +
        "chances of success.",
      "This project was completed in accordance to the CS3240 Interaction Design module.",
    ],
    contributions: [
      "Conducted in-depth reasearch on the problem statement and formulated a solution.",
      "Built a high fidelity prototype on Figma.",
    ],
    actions: [
      {
        name: "visit project site",
        link: "https://itshuitingg6.wixsite.com/rocketpad",
      },
      {
        name: "try out the prototype on figma",
        link: "https://www.figma.com/proto/5Ivl6GvTRRAIUqL1ZwVYO2/CS3240-Final-Prototype",
      },
    ],
    skills: {
      technical: [],
      design: [logoPresets.figma, logoPresets.wix],
    },
  },
  captsule: {
    name: "CAPTsule",
    image: captsule_image,
    period: "Aug 20 - Dec 20",
    role: "Game Programmer",
    description: [
      "CAPTsule is a annual yearbook publication distributed in College of Alice and Peter Tan (CAPT)." +
        "It encapsulates the respective academic year in CAPT and showcases the residents and events they have experienced.",
    ],
    contributions: [
      "Designed and published the 90-page yearbook using Adobe Illustrator.",
    ],
    actions: [
      {
        name: "view captsule ay18/19 edition",
        link: captsule_pdf,
      },
    ],
    skills: {
      technical: [],
      design: [logoPresets.illustrator],
    },
  },
  jazzttitude: {
    name: "Jazzttitude Publicity Merch and Video",
    image: jazzttitude_stickers,
    period: "Jan 20 - May 20",
    role: "Publicity Director",
    description: [
      "NUS Jazzttitude was founded in 2006 specializing mainly in the dance genre of Street Jazz.",
    ],
    contributions: [
      "Managed and curated the crew’s social media platform with event posts and publicity videos.",
      "Started a merchandise shop selling stickers and shirts for the crew to obtain funds.",
      "Coordinated and planned the publicity video with Premiere Pro.",
    ],
    actions: [
      {
        name: "view @nus.jazzttitude's instagram",
        link: "https://www.instagram.com/nus.jazzttitude",
      },
      {
        name: "watch Jazzttitude Publicity Video 2019",
        link: "https://www.youtube.com/watch?v=ZcHNRy7L_n0",
      },
    ],
    skills: {
      technical: [],
      design: [
        logoPresets.procreate,
        logoPresets.photoshop,
        logoPresets.illustrator,
        logoPresets.premierepro,
      ],
    },
  },
};

export default class Projects extends React.Component {
  renderProjectsDisplay = (project: ProjectProps) => {
    const image =
      project.name !== projectList.rocketpad.name ? (
        <img
          className={experience.projects_image}
          alt={project.image}
          src={project.image}
        />
      ) : (
        <video className={experience.projects_image} controls muted>
          <source src={project.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    return (
      <div key={project.name} className={experience.container}>
        <div className={experience.projects_subcontainer}>
          {image}
          <p className={experience.title}>
            {project.name}
            <span className={experience.subheading}> | {project.period}</span>
          </p>
          <p className={experience.subheading}>{project.role}</p>
          {project.description?.map((line) => (
            <p
              key={line.substring(0, 10) + "..."}
              className={projects.description}
            >
              {line}
            </p>
          ))}
          <ul className={projects.contributions}>
            {project.contributions?.map((line) => (
              <li key={line.substring(0, 10) + "..."}>{line}</li>
            ))}
          </ul>
          {project.actions?.length &&
            project.actions.map((action) => (
              <div className={experience.action}>
                <a
                  key={action.name}
                  href={action.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="link icon"
                    src="https://img.icons8.com/material-outlined/50/666666/link--v1.png"
                  />
                  {action.name}
                </a>
              </div>
            ))}
          <div className={experience.skills}>
            {Object.entries(project.skills).map((skill) => {
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
      </div>
    );
  };

  render(): JSX.Element {
    return (
      <div id="skills" className={app.page_block}>
        <h2 className={app.heading_box}>
          <ZoojaIcon icon="e" sideIcon />
          Projects
        </h2>
        {Object.values(projectList).map((project) =>
          this.renderProjectsDisplay(project)
        )}
      </div>
    );
  }
}
