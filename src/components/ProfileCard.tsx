import { useGetInitialProfileQuery } from '../features/api/apiSlice'
import styled from 'styled-components'

const ProfileCard = () => {
  const {
    data: initialProfile,
    isError,
    isLoading,
  } = useGetInitialProfileQuery('')

  return (
    <div>
      {isError ? (
        <>Ошибочка вышла</>
      ) : isLoading ? (
        <>Загрузка...</>
      ) : initialProfile ? (
        <Wrapper>
          <div className='card-wrapper'>
            <img
              src={initialProfile.avatar_url}
              alt='avatar img'
              className='avatar-img'
            />
            <div className='info-wrapper'>
              <h2>Имя: {initialProfile.name}</h2>
              <h2>Логин: {initialProfile.login}</h2>
              <a href={initialProfile.html_url} className='btn link-btn'>
                Посмотреть профиль
              </a>
            </div>
          </div>
        </Wrapper>
      ) : null}
    </div>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 5rem auto;
  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 700px;
    margin: 0 auto;
    padding: 25px 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .avatar-img {
    width: 215px;
    height: 215px;
    border-radius: 50%;
  }
  @media screen and (max-width: 700px) {
    .card-wrapper {
      width: auto;
      display: grid;
    }
  }
`

export default ProfileCard
