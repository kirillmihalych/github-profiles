import styled from 'styled-components'

const LoadingSpinner = () => {
  return (
    <Spinner>
      <div className='spinner-box'></div>
      <div className='spinner-box'></div>
    </Spinner>
  )
}

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 5rem auto;
  position: relative;
  .spinner-box {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: var(--red);
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }
  .spinner-box:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: var(--dark-red);
    border-radius: 50%;
    animation: spinnerTwo 1.2s linear infinite;
  }
  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 3px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 3px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 3px;
    }
  }
`

export default LoadingSpinner
