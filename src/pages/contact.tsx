import React from "react";

import Contact from "components/contact";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";
import Footer from "utils/components/footer";

import app from "app.module.css";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}

export default ContactPage;
