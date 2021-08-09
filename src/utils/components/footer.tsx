import totoro_footer from "assets/totoro_footer.png";

import useWindowDimensions from "utils/windowdimensions";

import app from "app.module.css";
import components from "utils/components/components.module.css";

const Footer = () => {
  const openLink = (url: string): void => window.open(url, "_blank")?.focus();
  const openEmail = (url: string): void => window.open(url, "_self")?.focus();

  const webFooter = (
    <>
      <img
        className={components.footer_image}
        alt="footer"
        src={totoro_footer}
      />
      <div className={components.footer_background} />
      <div className={components.footer_content}>
        <div className={components.footer_content_left}>
          <span className={components.footer_heading}>huiting lee</span>
          <div className={components.buttons}>
            <img
              alt="github"
              className={app.info_btn}
              src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
              onClick={() => openLink("https://github.com/tingalinga")}
            />
            <img
              alt="linkedin"
              className={app.info_btn}
              src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled--v1.png"
              onClick={() =>
                openLink("https://www.linkedin.com/in/huiting-lee-6a2b061a1/")
              }
            />
            <img
              alt="email"
              className={app.info_btn}
              src="https://img.icons8.com/ios-glyphs/40/ffffff/email-sign.png"
              onClick={() => openEmail("mailto:huiting.lee@u.nus.edu")}
            />
          </div>
        </div>
        {/* 
      Removed temporarily for now
      <div className={components.footer_content_center}>
        <div className={components.footer_zoojaicon}>
          <ZoojaIcon icon="c" />
        </div>
        <span className={components.footer_text}>Have a great day!</span>
      </div> 
      */}
        <div className={components.footer_content_right}>
          <div className={components.footer_credits}>
            Icons by{" "}
            <a href="https://icons8.com" target="_blank" rel="noreferrer">
              Icons8
            </a>
          </div>
          <div className={components.footer_credits}>
            Ⓒ 2021 All artwork by Huiting Lee
          </div>
        </div>
      </div>
    </>
  );

  const mobileFooter = (
    <>
      <img
        className={components.footer_image}
        alt="footer"
        src={totoro_footer}
      />
      <div className={components.footer_background} />

      <div className={components.footer_content}>
        <span className={components.footer_heading}>huiting lee</span>
        <div className={components.buttons}>
          <img
            alt="github"
            className={app.info_btn}
            src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
            onClick={() => openLink("https://github.com/tingalinga")}
          />
          <img
            alt="linkedin"
            className={app.info_btn}
            src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled--v1.png"
            onClick={() =>
              openLink("https://www.linkedin.com/in/huiting-lee-6a2b061a1/")
            }
          />
          <img
            alt="email"
            className={app.info_btn}
            src="https://img.icons8.com/ios-glyphs/40/ffffff/email-sign.png"
            onClick={() => openEmail("mailto:huiting.lee@u.nus.edu")}
          />
        </div>

        <div className={components.footer_credits}>
          Icons by{" "}
          <a href="https://icons8.com" target="_blank" rel="noreferrer">
            Icons8
          </a>
          <br />Ⓒ 2021 All artwork by Huiting Lee
        </div>
      </div>
    </>
  );

  const { width } = useWindowDimensions();
  return (
    <div className={components.footer}>
      {width > 768 ? webFooter : mobileFooter}
    </div>
  );
};

export default Footer;
