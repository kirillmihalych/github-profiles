import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleProfile, selectProfiles } from './profilesSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { BsGeoAlt } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineLink } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'
import { RiBuildingLine } from 'react-icons/ri'
import { LoadingSpinner } from '../../components'
import { Error } from '../../components'
import styled from 'styled-components'

const SingleProfile = () => {
  const { login } = useParams()
  const dispatch = useAppDispatch()
  const { single_profile, status } = useAppSelector(selectProfiles)
  const {
    login: login_name,
    name: name,
    bio,
    blog,
    company,
    followers,
    public_repos: repos,
    avatar_url: img,
    html_url: link,
    location,
  } = single_profile

  useEffect(() => {
    dispatch(fetchSingleProfile(`https://api.github.com/users/${login}`))
  }, [login])

  if (status == 'loading') {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (status == 'rejected') {
    return <Error></Error>
  }

  return (
    <Wrapper>
      <article className='single-profile'>
        {/* Аватар*/}
        <div className='avatar-holder'>
          <img src={img} alt='avatar img' className='avatar-img' />
        </div>
        {/* Имя */}
        <div className='name'>
          <h2>{name}</h2>
          <h3>{login_name}</h3>
        </div>
        {/* Ссылка на Гитхуб */}
        <div className='button'>
          <a href={link} target='_blank'>
            Гитхаб
          </a>
        </div>
        {/* Био */}
        <div className='bio'>
          <p>{bio}</p>
        </div>
        {/* Фолловеры и Репозиторий */}
        <div className='followers-repos'>
          <h3 className='followers'>
            <FiUsers></FiUsers>
            {followers} подписчиков
          </h3>
          <h3 className='repos'>
            <GoRepo></GoRepo>
            {repos} репозиториев
          </h3>
        </div>
        {/* Другая информация */}
        <div className='info-profile'>
          <h4>
            <RiBuildingLine></RiBuildingLine> {company ? company : 'Не указано'}
          </h4>
          <h4>
            <BsGeoAlt></BsGeoAlt> {location ? location : 'Не указано'}
          </h4>
          <h4>
            <AiOutlineLink></AiOutlineLink> {blog ? blog : 'Не указано'}
          </h4>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 350px;
  max-width: 90vw;
  margin: 3rem auto;
  .avatar-holder {
    text-align: center;
    margin-bottom: 1rem;
  }
  .avatar-img {
    border-radius: 50%;
    width: 275px;
    height: 275px;
    box-shadow: 0 0 0 5px var(--black), inset 0 0 0 5px var(--black),
      inset 0 0 0 5px var(--black), inset 0 0 0 5px var(--black),
      inset 0 0 0 5px var(--black);
  }
  .name {
    margin-bottom: 1rem;
    h2 {
      margin-bottom: 0.5rem;
      color: var(--black);
    }
    h3 {
      margin-bottom: 0.5rem;
      color: var(--grey);
    }
  }
  .button {
    a {
      padding: 5px 10px;
      color: var(--white);
      background: var(--red);
      text-decoration: none;
      letter-spacing: 0.1rem;
    }
  }
  .bio {
    color: var(--black);
    letter-spacing: 0.05rem;
  }
  .followers-repos {
    .followers,
    .repos {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 5px;
      color: var(--black);
      font-weight: lighter;
    }
  }
  .info-profile {
    h4 {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 5px;
      font-weight: lighter;
      color: var(--black);
    }
  }
`

export default SingleProfile
