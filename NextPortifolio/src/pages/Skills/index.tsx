import React from 'react'
import Image from 'next/image'

import {
  Container,
  SubTitle,
  Title,
  DivTitle,
  ContainerLogo,
  IconsDiv,
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
        <Title>SKILLS</Title>
        <a href="/">
          <Image src={home} width={30} height={30} />
        </a>
      </DivTitle>
      <SubTitle>Using Now:</SubTitle>
      <Main>
        <ContainerLogo>
          <IconsDiv>
            <Image src={Html} width={50} height={60} />
            <h1>HTML</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={Css} width={50} height={60} />
            <h1>CSS </h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={Javascript} width={50} height={60} />
            <h1>Javascript</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={react} width={50} height={60} />
            <h1>React</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={typescript} width={50} height={60} />
            <h1>Typescript</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={styled} width={50} height={60} />
            <h1>Styled-Components</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={cell} width={50} height={60} />
            <h1>React Native</h1>
          </IconsDiv>
          <IconsDiv>
            <Image src={redux} width={50} height={60} />
            <h1>Redux</h1>
          </IconsDiv>
        </ContainerLogo>
      </Main>
    </Container>
  )
}

export default Skills
