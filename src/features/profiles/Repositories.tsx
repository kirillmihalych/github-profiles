import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { selectProfiles } from './profilesSlice'
import { GoRepo } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'

const Repositories = () => {
  const { single_profile_repos } = useAppSelector(selectProfiles)

  console.log(single_profile_repos)

  return (
    <Wrapper>
      {single_profile_repos
        .map((repo) => {
          const {
            id,
            name,
            html_url: url,
            description,
            language,
            forks,
            stargazers_count: stars,
          } = repo
          return (
            <article key={id} className='single-repo'>
              <div className='repos-title'>
                <GoRepo></GoRepo>
                <a href={url} className='repos-link'>
                  {name}
                </a>
              </div>
              <p className='descrip'>{description}</p>
              <div className='repo-infos'>
                {language ? <h4>{language}</h4> : null}
                <h4>
                  <AiOutlineStar></AiOutlineStar>
                  {stars}
                </h4>
                <h4>
                  <TbGitFork></TbGitFork>
                  {forks}
                </h4>
              </div>
            </article>
          )
        })
        .slice(0, 4)}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
  margin: 3rem auto;
  .single-repo {
    border: 2px solid var(--black);
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .repos-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .repos-link {
    text-decoration: none;
    color: var(--red);
  }
  .repos-link:hover {
    text-decoration: 2px underline;
  }
  .repo-infos {
    align-self: flex-end;
    display: flex;
    margin-top: 1rem;
    gap: 15px;
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: lighter;
    }
  }
`

export default Repositories
