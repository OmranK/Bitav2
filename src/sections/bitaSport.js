/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Image, Link, Button } from 'theme-ui';
import TextFeature from '../components/text-feature';

import FeatureThumb from '../assets/core-feature.png';

const data = {
  subTitle: 'BitaSport',
  title: 'The BitaSport Platform',
  description:
    'The BitaSport platform will bring together Athletes, Managers, Supporters and Fans all in one place for a seamless experience.',
  btnName: 'Get Started',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }} id='platform'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt='Thumbnail' />
        </Box>

        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            // btnName={data.btnName}
            // btnURL={data.btnURL}
          />

          <Link target='_blank' variant='default' sx={styles.center}>
            <Button variant='secondaryInactive' aria-label={'Coming Soon'}>
              {'Coming Soon'}
            </Button>
          </Link>
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
    justifyContent: 'flex-end',
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
    textAlign: ['center', null, null, 'right'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pl: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },

    mx: ['auto', null, null, 0],
    '.img': {
      direction: ['rtl', 'ltr'],
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
