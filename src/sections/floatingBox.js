/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Text, Link } from 'theme-ui';

export default function FloatingBox() {
  return (
    <Container sx={styles.floatingBox}>
      <Link
        href={'https://bitastirofficial.medium.com/bita-token-distribution-round-1-9fd0190ea22f'}
        target='_blank'
        sx={styles.link}
      >
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>{''}</Text>
          <Text sx={styles.wrapper.title}>{' Token Distribution has begun ! '}</Text>
          <Text sx={styles.wrapper.title}>{'Read the official Token Distribution Announcement'}</Text>
        </Box>
      </Link>
    </Container>
  );
}

const styles = {
  floatingBox: {
    width: '50vw',
    height: '10vh',
    borderRadius: '4px',
    backgroundColor: '#28385E',
    '&:hover': {
      boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 50px -5px',
    },
    margin: '0 auto',
    marginTop: '-5vh',
    marginBottom: '-5vh',
    zIndex: '1',
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    title: {
      textAlign: 'center',
      fontSize: [10.5, 10.5, 10.5, 12.5],
      color: 'white',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 2],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
