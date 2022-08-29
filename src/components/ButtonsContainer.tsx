import styled from 'styled-components'

const ButtonsContainer = () => {
  return <Wrapper>Коробка с кнопками</Wrapper>
}

const Wrapper = styled.section`
  @media screen and (max-width: 414px) {
    display: none;
  }
`

export default ButtonsContainer
