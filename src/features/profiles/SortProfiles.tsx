import styled from 'styled-components'
import { useAppDispatch } from '../../app/hooks'
import { setSort } from './profilesSlice'

const SortProfiles = () => {
  const dispatch = useAppDispatch()

  const updateSort = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    let value = (e.target as HTMLOptionElement).value
    dispatch(setSort({ value }))
  }

  return (
    <Wrapper>
      <section className='sort-wrapper'>
        <form className='sort-form'>
          <label htmlFor='sort' className='sort-label'>
            Сортировать по
          </label>
          <select name='sort' className='select-sort'>
            <option value='a' onClick={updateSort}>
              A - Z
            </option>
            <option value='z' onClick={updateSort}>
              Z - A
            </option>
          </select>
        </form>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 2rem;
  .sort-wrapper {
    width: 225px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    border: 2px solid rgba(155, 155, 155, 0.2);
    border-radius: 10px;
  }
  .select-sort {
    background: transparent;
    border: 2px solid var(--black);
    cursor: pointer;
    margin-left: 0.5rem;
  }
  option {
    background: var(--white);
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      background: none;
      border: 2px solid var(--black);
      color: var(--black);
    }
  }
`

export default SortProfiles
