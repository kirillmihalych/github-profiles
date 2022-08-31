import styled from 'styled-components'
import { SearchForm, ButtonsContainer } from './index'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <Link to='/' className='nav-logo'>
          <AiFillGithub /> Гит-хаб профили
        </Link>
        <SearchForm />
        <ButtonsContainer />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  .navbar {
    width: 90vw;
    max-width: 1170px;
    height: 55px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    .navbar {
      display: grid;
      place-content: center;
      gap: 1rem;
      margin: 1rem;
    }
  }
`

export default Navbar
