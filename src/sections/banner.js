/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Background from '../assets/bg1.jpg';

export default function Banner() {
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' variant='heroPrimary'>
            The Worlds First <br />
          </Heading>
          <Box sx={styles.banner.contentBox}>
            <Heading as='h1' variant='heroColumn'>
              <span sx={styles.banner.colorText}>D</span>ecentralized <br />
              <span sx={styles.banner.colorText}>S</span>ports <br />
              <span sx={styles.banner.colorText}>O</span>rganization <br />
            </Heading>
          </Box>
          <Text as='p' variant='heroSecondary'>
            Live on the Ethereum blockchain. <br />
            <br />
          </Text>
          <Text as='p' variant='heroFinal'>
            Pre-IDO sold out. <br />
            500+ participants. <br />
            2 Billion+ BITA sold. <br />
            $500K+ raised.
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    height: '100vh',

    minHeight: '100%',
    background: `linear-gradient(0deg, rgba(44, 57, 75, 0.5), rgba(44, 57, 75, 0.5)), url(${Background})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0, 0',
    },
    contentBox: {
      width: ['80%', '100%', null, null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
    underlined: {
      color: '#FF4C29',
      textDecoration: 'under',
    },
    colorText: {
      color: '#FF4C29',
    },
  },
};
