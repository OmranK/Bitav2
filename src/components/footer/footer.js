/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from '../link';
import { Link as LinkT } from 'theme-ui';
import data from './footer.data';
import { FaTwitter, FaLinkedin, FaMediumM } from 'react-icons/fa';
import FooterLogo from '../../assets/logo2.svg';

const social = [
  {
    name: 'twitter',
    path: 'https://twitter.com/BitAstir',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/in/omrank/',
    icon: <FaLinkedin />,
  },
  {
    name: 'medium',
    path: 'https://bitastirofficial.medium.com',
    icon: <FaMediumM />,
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/'>
            <Image src={FooterLogo} alt='Logo'></Image>
          </Link>
          {/* 
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link path={item.path} key={i} label={item.label} sx={styles.footer.link} />
              ))}
            </nav>
          </Box> */}
        </Box>

        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {social.map((socialItem, i) => (
              <Box as='span' key={i} sx={styles.social.icon}>
                <LinkT href={socialItem.path} target='_blank' variant='default' sx={styles.link}>
                  {socialItem.icon}
                </LinkT>
              </Box>
            ))}
          </Box>
        </Box>

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

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  link: {
    textDecoration: 'none',
    color: 'text',
    cursor: 'pointer',
    '&:hover': {
      color: 'secondary',
    },
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 20,
      mr: '20px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },
};
