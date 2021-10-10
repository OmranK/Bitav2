/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text, Image, Link, Button } from 'theme-ui';
import SectionHeader from '../components/section-header';
import Performance from '../assets/feature/performance.svg';
import Partnership from '../assets/feature/partnership.svg';
import Subscription from '../assets/feature/subscription.svg';
import Support from '../assets/feature/support.svg';
import Tokenomics from '../assets/tokenomics.pdf';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'Power',
    title: 'A Voice ',
    text: 'At its core, BITA is a governance token that allows for the participation in the DAO.  ',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id='utility'>
      <Container>
        <SectionHeader slogan='The Power of $BITA' title='What can I do with BITA?' />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>
            {' BITA is the ERC20 token protocol that is the lifeblood of BitAstir.'}
          </Text>

          <Text sx={styles.wrapper.title}>{' There are 3 main utilities for the $BITA token.'}</Text>
        </Box>

        <Box sx={styles.center}>
          <Image src={Subscription} alt='Subscription icon' />
        </Box>
        <SectionHeader slogan='- Governance -' title='Be a Voice in the DSO' />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>
            {
              ' At its core, BITA is a governance token with the primary purpose of giving the holder power within the organization.'
            }
          </Text>
          <Text sx={styles.wrapper.title}>{' To wield BITA in this way, holders must stake their tokens.'}</Text>
          <Text sx={styles.wrapper.title}>{' The vessel that is BitAstir will be steered by these stakers. '}</Text>
          <Text sx={styles.wrapper.title}>
            {' Individual stakers will submit proposals, and stakers in the organization will vote on them. '}
          </Text>
        </Box>

        <Box sx={styles.center}>
          <Image src={Partnership} alt='Partnership icon' />
        </Box>
        <SectionHeader slogan='- Staking -' title='Put Tokens to Work' />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>{' Staking is a form of capital commitment.'}</Text>
          <Text sx={styles.wrapper.title}>
            {
              " BitAstir's main philosophy of staking is an inverted model, where holders can stake their tokens towards athletes allowing them to become BitAthletes."
            }
          </Text>
        </Box>

        <Box sx={styles.center}>
          <Image src={Performance} alt='Performance icon' />
        </Box>
        <SectionHeader slogan='- Providing Liquidity -' title='Expand The BITA Pool' />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>
            {
              ' Where staking is comitting capital to an athlete, providing liquidity is comitting capital to the organization. '
            }
          </Text>
          <Text sx={styles.wrapper.title}>{' Liquidity is the cornerstone of any financial instrument.'}</Text>
          <Text sx={styles.wrapper.title}>
            {' For BitAstir to thrive, participants must commit to the organization via Liquidity Pools (LPs).'}
          </Text>
        </Box>

        <Box sx={styles.center}>
          <Image src={Support} alt={'Support icon'} />
        </Box>
        <SectionHeader slogan='- Tiers -' title='Climb the Ranks' />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.title}>
            {
              'Regardless of wether you stake towards athletes (pure-staking) or towards the organization (LP-staking), '
            }
          </Text>{' '}
          <Text sx={styles.wrapper.title}>
            {
              'BITAstir will leverage a tiered structure based on asset weight - the higher your status, the bigger your voice.'
            }
          </Text>
          <Text sx={styles.wrapper.title}>{'10,000 Tokens Staked- Baby Broker.'}</Text>
          <Text sx={styles.wrapper.title}>{'100,000 Tokens Staked- Broker.'}</Text>
          <Text sx={styles.wrapper.title}>{'1,000,000 Tokens Staked- Big Broker.'}</Text>
          <Text sx={styles.wrapper.title}>{'10,000,000 Tokens Staked- WWW Broker (World Wide Wonder Broker).'}</Text>
        </Box>

        <Grid sx={styles.grid}>
          <Link href={Tokenomics} variant='default' target='_blank' sx={styles.center}>
            <Button variant='primaryIdentical' aria-label={'Read the Tokenomics Paper'}>
              {'Read the Tokenomics Paper'}
            </Button>
          </Link>

          <Link
            href={'https://etherscan.io/token/0x284B19a5fA65F706422C0c86566e407B0E70e537'}
            target='_blank'
            variant='default'
            sx={styles.center}
          >
            <Button variant='primaryIdentical' aria-label={'View Token Contract On-Chain'}>
              {'View Token Contract On-Chain'}
            </Button>
          </Link>

          <Link variant='default' sx={styles.center}>
            <Button variant='secondaryInactive' aria-label={'Read the Full White Paper'}>
              {'Read the Full White Paper'}
            </Button>
          </Link>

          <Link variant='default' sx={styles.center}>
            <Button variant='secondaryInactive' aria-label={'Join Launchpad!'}>
              {'Join Launchpad!'}
            </Button>
          </Link>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    marginTop: '-30px',
    title: {
      textAlign: 'center',
      fontSize: [2, 3],
      color: 'heading_secondary',
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
  center: {
    textDecoration: 'none',
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
