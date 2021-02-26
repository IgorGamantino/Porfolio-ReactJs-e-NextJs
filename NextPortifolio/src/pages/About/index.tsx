import React from 'react'

import {
  Container,
  Main,
  HobblieTitle,
  Icon,
  Tophome
} from '../../styles/pages/styles'
import home from '../../assets/home.png'

import Link from 'next/link'

const About: React.FC = () => {
  return (
    <Container>
      <Tophome>
        <h1 className="about">About</h1>
        <Link href="/">
          <div>
            <img src={home} />
            <p>Home</p>
          </div>
        </Link>
      </Tophome>

      <Main>
        <p>
          My name is Igor Amantino, I started my career as a developer at early
          2020, studying javascript, after a little knowledge, I met rocketseat
          and started making the GoStack bootcamp, they covered several subjects
          and technologies such as NodeJS, ReactJS, React-native and typescript
          and I currently work as
          <span> ReactJS and React-Native and Typescript </span>
          developer at Compasso-Uol, English study 1h a day looking for a day
          international career or living abroad.
        </p>
        <HobblieTitle>Hobbies 🛹🏋️📈 </HobblieTitle>
        <Icon>🛹</Icon>
        <p>
          Since I liked to skate a little, today it's been 10 years that I am
          still in this sport I continue since that boy's passion but nowadays I
          practice this sport only on weekends.
        </p>
        <Icon>🏋️</Icon>
        <p>
          I practice physical exercises daily to maintain a better health and
          enjoy the sport.
        </p>
        <Icon>📈</Icon>
        <p>
          I entered the financial market a few months ago, but I already fell in
          love with the market, I think about keeping my investments in the long
          term and guaranteeing a better future and a peaceful retirement.
        </p>
      </Main>
    </Container>
  )
}

export default About
