/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { Link } from 'react-scroll';
import Logo from '../logo';
import LogoLight from '../../assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id='Header'>
      <Container sx={styles.container}>
        <Logo src={LogoLight} />
        <Flex as='nav' sx={styles.nav}>
          {menuItems.map((menuitem, i) => (
            <Link activeClass='active' to={menuitem.path} spy={true} smooth={true} offset={-70} duration={500} key={i}>
              {menuitem.label}
            </Link>
          ))}
        </Flex>
        <Button className='buy_btn' variant='secondary' aria-label='Get Started'>
          Buy $BITA
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'white',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.buy_btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      // color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 2,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 3,
      fontWeight: 'heading',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
