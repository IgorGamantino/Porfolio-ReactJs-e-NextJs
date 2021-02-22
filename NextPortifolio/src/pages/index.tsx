import React from 'react'
import Head from 'next/head'
import {
  Container,
  Navigation,
  Main,
  Info,
  Animation,
  ContentImg,
  Profile,
  Icons
} from '../styles/pages/Home'
import Image from 'next/image'

import photo from '../assets/euProfile.jpg'
import react from '../assets/react.gif'
import instaLogo from '../assets/logo-instagram.png'
import gitHub from '../assets/github.png'
import linkLogo from '../assets/linkedin.png'
import whatLogo from '../assets/whatsapp.png'
import About from './About'
// import gitHub from '../assets/github.png'
// import linkLogo from '../assets/linkedin.png'
// import whatLogo from '../assets/whatsapp.png'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Igor Amantino</title>
        </Head>
        <Navigation>
          <ul>
            <a href="/About">About</a>
            <a href="/Skills">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </ul>
        </Navigation>
        <Main>
          <ContentImg>
            <Profile src={photo} alt="igor" width={250} height={250} />
          </ContentImg>

          <Info>
            <h2>I'am</h2>
            <h1>Igor Amantino</h1>
            <p>
              Motivated programmer, Web developer with React, more passionate
              also about Mobile Development with React-Native.
            </p>
          </Info>

          <Animation
            wrapper="p"
            loop={Infinity}
            steps={[
              " I'am developer Mobile React-Native.",
              5000,
              "I'am developer Web ReactJs.",
              3000
            ]}
          />
        </Main>
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
      </Container>
    </>
  )
}

export default Home
