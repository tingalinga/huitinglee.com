import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import MasterPage from 'pages/masterpage';
import About from 'pages/about';
import Experience from 'pages/experience';
import Projects from 'pages/projects';
import Contact from 'pages/contact';

import { addNavigationHandler } from 'utils/isInViewport';

class App extends React.Component {
  render() {
    addNavigationHandler();

    return (
      <div>
        <HashRouter hashType="noslash">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<MasterPage />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
