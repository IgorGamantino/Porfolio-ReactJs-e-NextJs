import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
`

export const Title = styled.a``

export const Tophome = styled.header`
  display: flex;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    justify-content: center;
    align-items: center;
  }

  a {
    color: #c4c4c4;
    font-size: 20px;
    position: relative;
    top: -30px;
    left: 455px;
    text-decoration: none;
  }
`

export const Main = styled.main`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  border: 5px solid #fff;
  padding: 5px;
  flex-direction: column;
  width: 1080px;

  p {
    padding: 10px;
    font-size: 25px;
  }

  span {
    color: #fff;
  }
`
export const HobblieTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
`
export const Icon = styled.h1`
  font-size: 50px;
`
