/** @jsxRuntime classic */
/** @jsx jsx */
//small change for push
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column.js';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import Subscription from '../assets/key-feature/subscription.svg';
import Support from '../assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'A broker for athletic talent',
    text: "BitAstir's first feature will be the BitAthlete system. BitAthlete will allow althetes to kick start the monitezation of their talent.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'A talent management platform',
    text: "The BitAthlete system will live on the BitaSport platform. BitAthlete's will have full control of their profiles and portfolios.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'A platform for monetizing & managing athletes',
    text: 'The BitaSport platform will also be accesible to Talent Managers and Supporters who will be able to carry out their own respective roles.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'An authority for the Sports Industry',
    text: 'The BitAstir DSO will dictate the future of the BitaSport platform. A few ideas we have are decentralized streaming and decentralized fantasy sports. ',
  },
];

const titleText =
  "As a DSO (Decentralized Sports Organization), BitAstir's mission is to become the world's leading Sovereign Sports Authority." +
  'We aim to accelerate the digitization & decentralization of sport. Through the provision of a sophisticated, economically sound, blockchain based infrastructure.';

export default function About() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='about'>
      <Container>
        <SectionHeader
          slogan='About Us'
          title=' 
        BitAstir aims to accelerate the decentralization of sports through a sophisticated application of blockchain technology. BitAstir will serve multiple functions.'
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn key={item.id} src={item.imgSrc} alt={item.altText} title={item.title} text={item.text} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)'],
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '90px', null, '10000px'],
  },
};

// const data = [
//   {
//     id: 1,
//     imgSrc: Performance,
//     altText: 'Fast Performance',
//     title: 'A broker for athletic talent',
//     text: "BitAstir's first feature will be the BitAthlete system. BitAthlete will allow althetes to kick start the monitezation of their talent.",
//   },
//   {
//     id: 2,
//     imgSrc: Partnership,
//     altText: 'Partnership deal',
//     title: 'A talent management platform',
//     text: "The BitAthlete system will live on the BitaSport platform. BitAthlete's will have full control of their profiles and portfolios.",
//   },
//   {
//     id: 4,
//     imgSrc: Support,
//     altText: 'Customer Support',
//     title: 'A platform for monetizing & managing athletes',
//     text: 'The BitaSport platform will also be accesible to Talent Managers and Supporters who will be able to carry out their own respective roles.',
//   },
//   {
//     id: 3,
//     imgSrc: Subscription,
//     altText: 'Pro Subscription',
//     title: 'An authority for the Sports Industry',
//     text: 'The BitAstir DSO will dictate the future of the BitaSport platform. A few ideas we have are decentralized streaming and decentralized fantasy sports. ',
//   },
// ];

// export default function About() {
//   return (
//     <section sx={{ variant: 'section.keyFeature' }} id='about'>
//       <Container>
//         <SectionHeader
//           slogan='About Us'
//           title='
//         BitAstir aims to accelerate the decentralization of sports through a sophisticated application of blockchain technology. BitAstir will serve multiple functions.'
//         />
//         <Grid sx={styles.grid}>
//           {data.map((item) => (
//             <FeatureCardColumn key={item.id} src={item.imgSrc} alt={item.altText} title={item.title} text={item.text} />
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }
