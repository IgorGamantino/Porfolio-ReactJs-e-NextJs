import React from 'react'
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
import Link from 'next/link'

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
        <header>
          <title>Igor Amantino</title>
        </header>
        <Navigation>
          <ul>
            <Link href="/About">About</Link>
            <Link href="/Skills">Skills</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Contact</Link>
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
              <a
                href="https://www.instagram.com/amantino.higoor/"
                target="_brank"
              >
                <Image src={instaLogo} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/IgorGamantino" target="_brank">
                <Image src={gitHub} width={30} height={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/igor-amantinoipaussu/"
                target="_brank"
              >
                <Image src={linkLogo} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="http://wa.me/55014998441160" target="_brank">
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
