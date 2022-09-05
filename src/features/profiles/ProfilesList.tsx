import { useAppSelector } from '../../app/hooks'
import { selectProfiles } from './profilesSlice'
import { LoadingSpinner } from '../../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProfilesList = () => {
  const { profiles, status } = useAppSelector(selectProfiles)

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  if (status === 'rejected') {
    return <h3 className='error'>Что-то пошло не так ...</h3>
  }

  return (
    <Wrapper>
      {profiles.map((profile) => {
        const { id, login, avatar_url: avatar } = profile

        return (
          <article key={id} className='profile'>
            <img src={avatar} alt='avatar img' className='img-profile' />
            <h2 className='title-profile'>{login}</h2>
            <Link to={`/profiles/${login}`} className='link-btn'>
              Подробнее
            </Link>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 3rem auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  .img-profile {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
  }
  .profile:hover {
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .title-profile {
    color: var(--red);
  }
  .error {
    width: 90vw;
    max-width: 1170px;
    margin: 3rem auto;
    text-align: center;
  }
`

export default ProfilesList
