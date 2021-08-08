import app from "app.module.css";

const PageWrapper = ({ children }) => {
  return <div className={app.page}>{children}</div>;
};

export default PageWrapper;
