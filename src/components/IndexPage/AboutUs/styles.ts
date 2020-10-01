import styled from 'styled-components'

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 120px;
  
  @media (max-width: 1600px) {
    padding: 80px 0 90px;
  }

  @media (max-width: 991px){
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0 60px;
  }

  @media (max-width: 767px){
    padding-bottom: 20px;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    max-width: 1080px;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background: linear-gradient(90deg, rgba(110, 197, 174, 0) 0%, #6EC5AE 50.03%, rgba(110, 197, 174, 0) 100%);

    @media (max-width: 767px){
      display: none;
    }
  }
`

export const ContentWrapper = styled.section`
  text-align: center;
  max-width: 640px;

  @media (max-width: 1600px) {
    max-width: 520px;
  }
`

export const ImageWrapper = styled.div`
  max-width: 640px;
  width: 100%;

  @media (max-width: 1600px) {
    max-width: 540px;
  }
`

export const Text = styled.div`
  margin-top: 30px;

  @media (max-width: 1600px) {
    margin-top: 20px;
  }

  @media (max-width: 991px){
    margin-bottom: 50px;
  }

  @media (max-width: 767px){
    font-size: 0.9em;
    margin-bottom: 30px;
  }
`
