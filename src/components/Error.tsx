import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <h2>Что-то пошло не так ...</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  color: var(--black);
`

export default Error
