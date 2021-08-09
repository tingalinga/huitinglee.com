import ZoojaIcon from "utils/components/zoojaicon";
import { Logo, LogoProps, logoPresets } from "utils/components/logo";
import useWindowDimensions from "utils/windowdimensions";

import app from "app.module.css";
import skills from "./skills.module.css";

interface SkillList {
  [skill: string]: {
    confident: LogoProps[];
    tried: LogoProps[];
  };
}

export const skillList: SkillList = {
  technical: {
    confident: [
      logoPresets.javascript,
      logoPresets.typescript,
      logoPresets.java,
      logoPresets.react,
      logoPresets.css,
    ],
    tried: [
      logoPresets.csharp,
      logoPresets.html,
      logoPresets.springboot,
      logoPresets.keycloak,
      logoPresets.dart,
      logoPresets.flutter,
    ],
  },
  design: {
    confident: [
      logoPresets.figma,
      logoPresets.sketch,
      logoPresets.illustrator,
      logoPresets.xd,
    ],
    tried: [
      logoPresets.photoshop,
      logoPresets.premierepro,
      logoPresets.procreate,
      logoPresets.aseprite,
    ],
  },
  "game development": {
    confident: [logoPresets.unity, logoPresets.gamemaker],
    tried: [],
  },
};

const Skills = () => {
  const { width } = useWindowDimensions();

  const renderSkillDisplay = (skill: string) => {
    return (
      <>
        <p>
          <strong>{skill}</strong>
        </p>
        <div className={app.container}>
          <div className={skills.skills_display}>
            <p className={skills.subheading}>I am confident in</p>
            {skillList[skill].confident.map((logoProp) => (
              <Logo key={logoProp.name} {...logoProp} />
            ))}
          </div>
          {skillList[skill].tried.length > 0 && (
            <div className={skills.skills_display}>
              <p className={skills.subheading}>I have dabbled in</p>
              {skillList[skill].tried.map((logoProp) => (
                <Logo key={logoProp.name} {...logoProp} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div id="skills" className={app.page_block}>
      {width > 768 ? (
        <h2 className={app.heading_box}>
          <ZoojaIcon icon="U" sideIcon />
          Skills
        </h2>
      ) : (
        <>
          <h2 className={app.heading_box}>
            <ZoojaIcon icon="U" sideIcon />
          </h2>
          <h2 className={app.heading_box}>Skills</h2>
        </>
      )}
      <div>
        {renderSkillDisplay("technical")}
        {renderSkillDisplay("design")}
        {renderSkillDisplay("game development")}
      </div>
    </div>
  );
};

export default Skills;
