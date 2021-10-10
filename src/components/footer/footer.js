/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from '../link';
import data from './footer.data';
import FooterLogo from '../../assets/logo2.svg';

// import { Helmet } from 'react-helmet';
// import Iframe from 'react-iframe';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/'>
            <Image src={FooterLogo} alt='Logo'></Image>
          </Link>
        </Box>

        {/* <Box sx={styles.widget}>
          <Helmet>
            <script src='https://www.createmytoken.com/scripts/embed.js' async></script>
          </Helmet>
          <Iframe
            url='https://www.createmytoken.com/token-watcher/eth-mainnet/0x284b19a5fa65f706422c0c86566e407b0e70e537:534c5a7a64486a2e706e67/embed/'
            frameBorder='0'
            height='325'
            width='550'
            style='height:325px;width:550px;'
            loading='eager'
            sandbox='allow-forms allow-modals allow-popups allow-scripts allow-same-origin'
            scrolling='no'
          />
        </Box> */}
        {/* <Box sx={styles.footer.menus}>
          <nav>
            {data.menuItem.map((item, i) => (
              <Link path={item.path} key={i} label={item.label} sx={styles.footer.link} />
            ))}
          </nav>
        </Box> */}
        <Text sx={styles.footer.copyright}>Copyright BitAstir {new Date().getFullYear()} </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      marginTop: '20px',
      borderTop: '2px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [5, null, 6],
      pb: ['0px', null, '0px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },

  widget: {
    textDecoration: 'none',
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
