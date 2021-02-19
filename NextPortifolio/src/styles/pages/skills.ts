import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const DivTitle = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    top: -30px;
    left: 300px;
    display: flex;
    text-align: flex-end;
  }
`

export const Title = styled.h1`
  color: #fff;
  border: 2px solid #fff;
  padding: 10px;
  width: 300px;
  height: 60px;
  text-align: center;
`

export const SubTitle = styled.div`
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  margin-left: 40px;
  text-transform: uppercase;
`
export const ContainerLogo = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  width: 800px;
  height: 500px;
  justify-content: center;

  div {
    align-items: center;
    justify-content: center;
    margin-left: 15px;
  }
`

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;

  h1 {
    margin-top: 10px;
  }
`
export const Main = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`
