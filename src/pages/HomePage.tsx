import { ProfileCard } from '../components'
import { ProfilesList } from '../features/profiles'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Wrapper>
      <ProfilesList />
      {/* <ProfileCard /> */}
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default HomePage
