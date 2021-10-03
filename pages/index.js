import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';

import SEO from '../src/components/seo';
import Layout from '../src/components/layout';

import Banner from '../src/sections/banner';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='BitAstir - A Decentralized Sports Organization' />
        <Banner />
        {/* <About /> */}
        {/* <Bita /> */}
        {/* <FloatingBox /> */}
        {/* <BitaFeatures /> */}
        {/* <Roadmap /> */}
        {/* <BitAthlete /> */}
        {/* <BitaGenesis /> */}
        {/* <BitaSport /> */}
        {/* <Package /> */}
        {/* <TeamSection /> */}
        {/* <TestimonialCard /> */}
      </Layout>
    </ThemeProvider>
  );
}
