import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectProfiles, sortProfiles } from './profilesSlice'
import { LoadingSpinner } from '../../components'
import { pagination } from '../../utils/pagination'
import { Link } from 'react-router-dom'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb'
import styled from 'styled-components'
import { IProfile } from '../../interfaces/interfaces'

const ProfilesList = () => {
  const dispatch = useAppDispatch()
  const { profiles, status, sort } = useAppSelector(selectProfiles)
  const [data, setData] = useState<IProfile[]>([])
  const [page, setPage] = useState<number>(0)
  const pagedProfiles = pagination(profiles)

  const onNextPageClicked = () => {
    setPage((prev) => {
      if (page >= pagedProfiles.length - 1) return 0
      return prev + 1
    })
  }

  const onPrevPageClicked = () => {
    setPage((prev) => {
      if (page <= 0) return pagedProfiles.length - 1
      return prev - 1
    })
  }

  useEffect(() => {
    if (status === 'loading') return
    dispatch(sortProfiles())
    setData(pagedProfiles[page])
  }, [status, page, sort, profiles])

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  if (status === 'rejected') {
    return <h3 className='error'>Что-то пошло не так ...</h3>
  }

  if (status === 'succeeded' && profiles.length < 1) {
    return (
      <h4 className='no-matches'>
        Поиск не дал результатов...<br></br>
        Попробуйте ещё!
      </h4>
    )
  } else if (status === 'idle') {
    return (
      <h4 className='no-matches'>
        Добро пожаловать!<br></br>Начните поиск!
      </h4>
    )
  }

  return (
    <>
      {data ? (
        <Wrapper>
          <section className='profiles'>
            {data.map((profile: IProfile) => {
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
          </section>
          <section className='buttons'>
            <button onClick={onPrevPageClicked} className='page-btn prev'>
              <TbPlayerTrackPrev></TbPlayerTrackPrev>
            </button>
            {pagedProfiles.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={
                    page + 1 === index + 1 ? 'page-btn focused' : 'page-btn'
                  }
                >
                  {index + 1}
                </button>
              )
            })}
            <button onClick={onNextPageClicked} className='page-btn next'>
              <TbPlayerTrackNext></TbPlayerTrackNext>
            </button>
          </section>
        </Wrapper>
      ) : null}
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .profiles {
    width: 90vw;
    max-width: 1170px;
    margin: 3rem auto;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
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
  .buttons {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .page-btn {
    cursor: pointer;
    background: none;
    border: 2px solid var(--black);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 0.5rem;
  }
  .page-btn:hover {
    background: var(--red);
    color: var(--white);
  }
  .next,
  .prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .focused {
    background: var(--red);
    color: var(--white);
  }
`

export default ProfilesList
