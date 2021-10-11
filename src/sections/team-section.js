/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import TeamCard from '../components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMedium, FaGithub } from 'react-icons/fa';

import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/team/member-2.png';
import Member3 from '../assets/team/member-3.png';
import Member4 from '../assets/team/member-4.png';
import Member5 from '../assets/team/member-5.png';
import Member6 from '../assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member2,
    altText: 'Fritz Valdeus',
    title: 'Fritz Valdeus',
    designation: 'Sports Guru',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/fritz.valdeus.12',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/fritz-valdeus-50a07b105/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member3,
    altText: 'Andrey Didovskiy',
    title: 'Andrey Didovskiy',
    designation: 'System Architect',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/andreydidovskiy/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/AndreyDidovskiy',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'medium',
        path: 'https://medium.com/@andreydidovskiy',
        icon: <FaMedium />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member1,
    altText: 'Losaire Bien-Aime',
    title: 'Losaire Bien-Aime',
    designation: 'Financial Advisor',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/losaire.bienaime',
        icon: <FaFacebookF />,
      },

      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/losaire-bien-aime-99795831',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'twitter',
        path: 'https://www.twitter.com/@losaireA',
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member6,
    altText: 'Omran Khoja',
    title: 'Omran Khoja',
    designation: 'Software Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/omrank/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/OmranK',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member4,
    altText: 'Zachary Roehn',
    title: 'Zachary Roehn',
    designation: 'Engineer - NFT Design',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/zachary-roehn-848b76167/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/KingCADllc',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/zackerrorr/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member5,
    altText: 'Jean Eddy Ulysse',
    title: 'Jean Eddy Ulysse',
    designation: 'General Advisor',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jean-eddy-ulysse-9550a57b',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'facebook',
        path: 'https://www.facebook.com/jeaneddyulysse',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'twitter',
        path: 'https://www.twitter.com/@eddyulysse1',
        icon: <FaTwitter />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section sx={styles.teamSection} id='team'>
      <Container>
        <SectionHeader slogan='Our Team' title='The talented individuals bringing the BitAstir vision to life.' />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  teamSection: {
    // marginTop: '10px',
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
  },
};
