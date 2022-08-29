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
  .navbar {
    width: 90vw;
    max-width: 1170px;
    height: 55px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Navbar
