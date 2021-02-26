import React from 'react'
import Link from 'next/link'

import {
  Container,
  SubTitle,
  DivTitle,
  ContainerLogo,
  Main
} from '../../styles/pages/skills'

import Html from '../../assets/skills/html.png'
import Css from '../../assets/skills/css.png'
import Javascript from '../../assets/skills/javascript.png'
import react from '../../assets/skills/react.png'
import typescript from '../../assets/skills/typescript.png'
import styled from '../../assets/skills/logo.png'
import cell from '../../assets/skills/phone.png'
import redux from '../../assets/skills/redux.png'
import home from '../../assets/home.png'

const Skills: React.FC = () => {
  return (
    <Container>
      <DivTitle>
        <h1>SKILLS</h1>
        <ul>
          <Link href="/">
            <div>
              <img src={home} />
              <p>Home</p>
            </div>
          </Link>
        </ul>
      </DivTitle>
      <SubTitle>Using Now:</SubTitle>
      <Main>
        <ContainerLogo>
          <div>
            <img src={Html} />
            <h1>HTML</h1>
          </div>
          <div>
            <img src={Css} />
            <h1>CSS </h1>
          </div>
          <div>
            <img src={Javascript} />
            <h1>Javascript</h1>
          </div>
          <div>
            <img src={react} />
            <h1>React</h1>
          </div>
          <div>
            <img src={typescript} />
            <h1>Typescript</h1>
          </div>
          <div>
            <img src={styled} />
            <h1>Styled-Components</h1>
          </div>
          <div>
            <img src={cell} />
            <h1>React Native</h1>
          </div>
          <div>
            <img src={redux} />
            <h1>Redux</h1>
          </div>
        </ContainerLogo>
      </Main>
    </Container>
  )
}

export default Skills
