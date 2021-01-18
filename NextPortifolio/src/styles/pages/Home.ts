import styled from 'styled-components'
import Image from 'next/image'
import Typical from 'react-typical'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Navigation = styled.nav`
  padding: 23px 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  a {
    color: #c4c4c4;
    margin: 16px;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 17px;
  }
`

export const Main = styled.main`
  margin-top: 10rem;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`

export const Info = styled.div`
  max-width: 600px;
  margin: 0 auto;
  h1 {
    color: #fff;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 34px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }
`

export const ContentImg = styled.div`
  margin-top: 10rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 111;
  border-radius: 15px;
  left: 30px;
  top: 30px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  position: fixed !important;
`

export const Icons = styled.div`
  position: absolute;
  right: 20px;
  transition: color 2s;

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    line-height: 100%;
    margin-top: 16px;
    text-align: center;
  }

  li:hover {
    color: #fff;
  }
`
export const Animation = styled(Typical)`
  margin-left: 320px;
  font-size: 32px;
  font-style: italic;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
`
