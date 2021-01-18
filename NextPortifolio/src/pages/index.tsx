import React from 'react'
import Head from 'next/head'
import Typical from 'react-typical'
import {
  Container,
  Navigation,
  Main,
  Info,
  Animation,
  ContentImg,
  Icons
} from '../styles/pages/Home'
import Image from 'next/image'

import photo from '../assets/pessoal1.png'
import react from '../assets/react.gif'
import instaLogo from '../assets/logo-instagram.png'
import gitHub from '../assets/github.png'
import linkLogo from '../assets/linkedin.png'
import whatLogo from '../assets/whatsapp.png'
// import gitHub from '../assets/github.png'
// import linkLogo from '../assets/linkedin.png'
// import whatLogo from '../assets/whatsapp.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Navigation>
        <Image src={react} width={30} height={30} />
        <ul>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </ul>
      </Navigation>
      <Main>
        <ContentImg>
          <Image src={photo} alt="igor" width={250} height={250} />
        </ContentImg>
        <Icons>
          <ul>
            <li>
              <a href="https://www.instagram.com/amantino.higoor/">
                <Image src={instaLogo} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/IgorGamantino">
                <Image src={gitHub} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/igor-amantinoipaussu/">
                <Image src={linkLogo} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="http://wa.me/55014998441160">
                <Image src={whatLogo} width={30} height={30} />
              </a>
            </li>
          </ul>
        </Icons>
        <Info>
          <h2>I'am</h2>
          <h1>Igor Amantino</h1>
          <p>
            Motivated programmer, Web developer with React, more passionate also
            about Mobile Development with React-Native
          </p>
        </Info>
        <Animation
          wrapper="p"
          loop={Infinity}
          steps={[
            " I'am developer Mobile React-Native",
            5000,
            "I'am developer Web ReactJs",
            3000
          ]}
        />
      </Main>
    </Container>
  )
}

export default Home
