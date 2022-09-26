import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch } from '../app/hooks'
import { fetchProfiles } from '../features/profiles/profilesSlice'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleSubmit = (
    e: React.BaseSyntheticEvent<
      Event,
      EventTarget & HTMLFormElement,
      EventTarget
    >
  ) => {
    e.preventDefault()
    if (query.length < 1) return
    dispatch(fetchProfiles(`https://api.github.com/search/users?q=${query}`))
    setQuery('')
    navigate('/')
  }

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Найти профиль'
          value={query}
          onChange={handleChange}
          className='input-search'
        />
        <button type='submit' className='btn-search'>
          <AiOutlineSearch className='icon-search' />
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
  .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    background: rgba(149, 157, 165, 0.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
  }
  .input-search {
    padding: 0px 10px;
    background: transparent;
    letter-spacing: 0.05rem;
    flex: 1;
    border: none;
    outline: none;
  }
  .btn-search {
    cursor: pointer;
    height: 35px;
    width: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .icon-search {
    width: 20px;
    height: 20px;
    color: var(--white);
  }
`

export default SearchForm
