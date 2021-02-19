import React from 'react'

import {
  Container,
  Main,
  HobblieTitle,
  Icon,
  Tophome
} from '../../styles/pages/styles'
import home from '../../assets/home.png'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <Container>
      <Tophome>
        <h1 className="about">About</h1>
        <a href="/">
          <Image src={home} width={30} height={30} />
        </a>
      </Tophome>

      <Main>
        <p>
          My name is Igor Amantino, I started my career as a developer in the
          beginning of 2020, studyng javascript, after a little knowledge, i got
          to know rocketseat and i started to make the GoStack bootcamp on it.
          NodeJS Currently i work as a ReactJS and React-Native and Typescript
          developer at Compasso-Uol, English study 1hr daily looking for a day
          international career or living.
        </p>
        <HobblieTitle>Hobbies 🛹🏋️📈 </HobblieTitle>
        <Icon>🛹</Icon>
        <p>
          Desde de pequeno gostava de andar de skate e hoje ja faz uns 10 anos
          que continuo nesse esporte mais atualmente so finais de semana
        </p>
        <Icon>🏋️</Icon>
        <p>Faço academia diaramente, atentamente para manter minha saude</p>
        <Icon>📈</Icon>
        <p>
          Entrei no mercado finançeiro a pouco meses penso em investir a longo
          tempo, gosto de investir para garantir meu futuro e minha
          aposentadoria
        </p>
      </Main>
    </Container>
  )
}

export default About
