import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';

import SEO from '../src/components/seo';
import Layout from '../src/components/layout';

import Banner from '../src/sections/banner';
import About from '../src/sections/about';
import Bita from '../src/sections/bita';
import FloatingBox from '../src/sections/floatingBox';
import BitaFeatures from '../src/sections/bita-features';
import Roadmap from '../src/sections/roadmap';
import BitAthlete from '../src/sections/bitAthlete';
import BitaGenesis from '../src/sections/bitaGenesis';
import BitaSport from '../src/sections/bitaSport';
import TeamSection from '../src/sections/team-section';
import Footer from '../src/components/footer/footer';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='BitAstir - A Decentralized Sports Organization' />
        <Banner />
        <About />
        <Bita />
        <FloatingBox />
        <BitaFeatures />
        <Roadmap />
        <BitAthlete />
        <BitaGenesis />
        <BitaSport />
        <TeamSection />
      </Layout>
    </ThemeProvider>
  );
}
