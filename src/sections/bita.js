/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Text, Image } from 'theme-ui';
import SectionHeader from '../components/section-header';

import PatternBG from '../assets/patternBG.png';
import BitaToken from '../assets/bitaToken-2.png';

const data = [
  {
    id: 1,
    title: 'Token Launch',
    text: 'Token will launch on the Ethereum blockchain on September 1st 2021.',
  },
  {
    id: 2,
    title: 'BitAthletes Are Born',
    text: 'Gather athletes from around the world to to participate in the BitaSport platform.',
  },
  {
    id: 3,
    title: 'Launch BitaSport',
    text: 'BitaSport will be the platform to participate in the Bita world where Supporters can discover BitAthletes and BitAthletes can gain Supporters',
  },
  {
    id: 4,
    title: 'Decentralize Everything',
    text: 'Additional features such as decentralized sports streaming, decentralized fantasy sports and much more.',
  },
];

export default function Bita() {
  return (
    <section sx={styles.workflow} id='bita'>
      <Container>
        <SectionHeader slogan='$Bita' title={'Your seat at the table.'} isWhite={true} />
        <Box sx={styles.thumbnail}>
          <Image sx={styles.image} src={BitaToken} alt='Thumbnail' />
        </Box>
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>{'Owning BITA unlocks the world of BitAstir.'}</Text>
          <Text sx={styles.wrapper.title}>
            {'With the intention of providing an alternative monetary asset that supersedes all existing options,'}
          </Text>
          <Text sx={styles.wrapper.title}>
            {
              '$BITA takes on the 3 core values that define money - Unit of Account, Medium of Exchange, and Store of Value. '
            }
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)'],
  },

  floatingBox: {
    width: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    margin: '0 auto',
    paddingTop: '400px',
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      textAlign: 'center',
      fontSize: [2, 3],
      color: 'white',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
  image: {
    height: 250,
    width: 250,
  },
  thumbnail: {
    mb: [7],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
