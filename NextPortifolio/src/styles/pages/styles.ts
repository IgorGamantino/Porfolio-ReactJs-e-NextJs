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
  padding: 0.5rem;
  height: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* margin-top: 40px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column; */
`
export const Tophome = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 1.4rem;
    /* font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    justify-content: center;
    align-items: center; */
  }

  img {
    display: flex;
    align-items: center;
    width: 1.2rem;
    position: relative;
    left: 4.5rem;
    font-size: 1rem;
    /* color: #c4c4c4;
    font-size: 1.25rem;
    position: relative;
    top: -30px;
    left: 455px;
    text-decoration: none; */
  }
  @media ${device.mobileS} {
    img {
      left: 6.2rem;
      cursor: pointer;
    }
  }
  @media ${device.mobileM} {
    img {
      left: 7.9rem;
      cursor: pointer;
    }
  }

  @media ${device.mobileL} {
    img {
      left: 8.9rem;
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 1.5rem;
      left: 17rem;
      cursor: pointer;
    }
  }
  @media ${device.laptopL} {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 1.5rem;
      left: 18rem;
      cursor: pointer;
    }
  }
  @media ${device.laptop} {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 1.5rem;
      left: 27rem;
      cursor: pointer;
    }
  }
`

export const Main = styled.main`
  padding: 0.3rem;

  border: 5px solid #fff;
  align-items: center;
  text-align: center;
  /* margin-top: 1.25rem;
  border: 5px solid #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-width: 60rem; */
  p {
    /* padding: 0.75rem;
    font-size: 1.5rem; */
  }

  span {
    color: #fff;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: 100%;

    p {
      font-size: 1.2rem;
    }
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    max-width: 80%;

    p {
      font-size: 1.2rem;
    }
  }

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    max-width: 50%;

    p {
      font-size: 1.3rem;
    }
  }
`
export const HobblieTitle = styled.h1`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`
export const Icon = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`
