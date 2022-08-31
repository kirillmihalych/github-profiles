import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { useGetSearchProfileQuery } from '../features/api/apiSlice'

const SearchForm = () => {
  const [skip, setSkip] = useState(true)
  const [query, setQuery] = useState('')
  const { data: profiles } = useGetSearchProfileQuery(query, { skip })

  const preventDefault = (e: any) => e.preventDefault()
  const handleChange = (e: any) => setQuery(e.target.value)

  const handleOnClickedBtn = () => {
    setSkip((prev) => !prev)
    setTimeout(() => {
      setQuery('')
      setSkip((prev) => !prev)
    }, 100)
  }

  return (
    <Wrapper>
      <form className='search-form' onSubmit={preventDefault}>
        <input
          type='text'
          placeholder='text'
          value={query}
          onChange={handleChange}
          className='input-search'
        />
        <button
          type='submit'
          className='btn-search'
          onClick={handleOnClickedBtn}
        >
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
    text-transform: capitalize;
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
