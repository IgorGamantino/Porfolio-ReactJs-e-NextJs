import styled from 'styled-components'
import Image from 'next/image'
import Typical from 'react-typical'

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

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  ul {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  a {
    color: #c4c4c4;
    margin: 1rem;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1rem;
    cursor: pointer;
    transition: scale 2s;
  }
  a:hover {
    color: #fff;
    transform: scale(1.2);
  }

  @media ${device.mobileM} {
    ul {
      padding: 2px;
    }
    a {
      font-size: 1rem;
      padding: -3px;
    }
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      font-size: 1rem;
    }
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }

  @media ${device.laptop} {
    margin-top: -7rem;
  }
`
export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: flex;
    margin-top: 2rem;
    position: relative;
    left: 40%;
    align-items: center;
    width: 25rem;
  }

  @media ${device.laptop} {
    position: relative;
    left: 2rem;
    display: flex;
    top: 40%;
    bottom: -200px;
  }
`
export const Profile = styled(Image)`
  border-radius: 10px;
  margin: 0 auto;
`

export const Info = styled.div`
  margin: 0 auto;
  margin-top: 2rem;

  h2 {
    margin-left: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  p {
    padding-left: 1rem;
    font-size: 1rem;
    padding-right: 1rem;
    text-align: justify;
    font-weight: 500;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: -170px;
    right: 6rem;

    h2 {
      font-size: 1.3rem;
    }

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.3rem;
      margin-right: 6rem;
      flex-wrap: wrap;
    }
  }

  @media ${device.laptop} {
    display: flex;
    position: relative;
    justify-content: center;
    margin-left: 10rem;

    h2 {
      font-size: 24px;
    }
    h1 {
      font-size: 70px;
    }

    p {
      font-size: 20px;
    }
  }

  @media ${device.laptopL} {
    h2 {
      font-size: 24px;
    }
    h1 {
      font-size: 70px;
    }

    p {
      font-size: 20px;
    }
  }
`

export const Animation = styled(Typical)`
  margin-left: 1rem;
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  @media ${device.tablet} {
    position: absolute;
    bottom: -1px;
    left: 13%;
    font-weight: bold;
    font-style: oblique;
  }

  @media ${device.mobileM} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 2rem;
    left: 27%;
    bottom: 2rem;
    font-weight: bold;
    font-style: oblique;
  }
`

export const Icons = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  li {
    list-style: none;
    margin-left: 2rem;
    transition: scale 2s;
  }
  li:hover {
    transform: scale(1.2);
  }

  @media ${device.tablet} {
    ul {
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;
      padding-right: 2rem;
    }
    li {
      margin-bottom: 1rem;
    }
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px;
    position: relative;

    ul {
      padding-right: 15px;
    }
  }
`
// medias querys //
