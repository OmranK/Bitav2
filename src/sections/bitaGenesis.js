/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Image, Link, Button } from 'theme-ui';
import TextFeature from '../components/text-feature';

import FeatureThumb from '../assets/deck.png';

const data = {
  subTitle: 'Bita Genesis',
  title: 'The Bita Genesis Collection',
  description: 'The Bita Genesis Collection is the commemorative NFT collection of BITAstir available on OpenSea!',
  btnName: 'View Collection',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }} id='platform'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} description={data.description} />

          <Link href={'https://opensea.io/BitAstir'} target='_blank' variant='default' sx={styles.center}>
            <Button variant='primary' aria-label={'Explore Collection'}>
              {'Explore Collection'}
            </Button>
          </Link>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt='Thumbnail' />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  center: {
    textDecoration: 'none',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', 'center', 'center', 'flex-start'],
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    order: [0, null, null, 0],
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
