import React from 'react';

import Header from '../parts/header';
import Footer from '../parts/footer';
import HowItWorks from './parts/how-it-works';
import HowItWorksFlow from './parts/how-it-works-flow';
import MainSection from './parts/main-section';

import styles from './styles.scss';

function Landing() {
  return (
    <div className="landing">
      <style jsx>{styles}</style>
      <Header />
      <MainSection />
      <HowItWorks />
      <HowItWorksFlow />
      <Footer />
    </div>
  );
}

export default Landing;
