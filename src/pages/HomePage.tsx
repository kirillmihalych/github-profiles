import { ProfilesList, SortProfiles } from '../features/profiles'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Wrapper>
      <SortProfiles />
      <ProfilesList />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default HomePage
