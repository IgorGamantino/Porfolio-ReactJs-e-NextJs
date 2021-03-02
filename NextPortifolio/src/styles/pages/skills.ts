import styled from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const DivTitle = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-content: center;
  align-items: center;

  h1 {
    font-size: 1.3rem;
    align-items: center;
    color: #fff;
    width: 10rem;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #fff;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    left: 6rem;
    text-decoration: none;
  }

  ul:hover {
    color: #fff;
  }

  div {
    position: absolute;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  img {
    width: 1.4rem;
    display: flex;
  }

  p {
    font-size: 0.8rem;
    margin-top: 2px;
    text-decoration: none;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 1.5rem;
      width: 13rem;
    }

    ul {
      left: 10rem;
    }

    img {
      width: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media ${device.mobileM} {
    ul {
      left: 3rem;
    }
  }
  @media ${device.mobileL} {
    ul {
      left: 4.3rem;
    }
  }

  @media ${device.tablet} {
    ul {
      left: 10rem;
    }
  }

  @media ${device.laptop} {
    ul {
      left: 22rem;
    }
  }
`
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
  margin-left: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const Main = styled.div`
  max-width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
export const ContainerLogo = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  transition: scale 10s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;

    h1 {
      margin-top: 10px;
      font-size: 1rem;
    }

    img {
      width: 5rem;
    }

    @media ${device.tablet} {
      margin: 20px;
    }
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  div:hover {
    transform: scale(1.2);
  }
`
