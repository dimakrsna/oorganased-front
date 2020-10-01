import styled from 'styled-components'

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding-bottom: 70px;

  @media (max-width: 1600px) {
    padding-top: 30px;
    padding-bottom: 50px;
  }

  @media (max-width: 991px){
    flex-wrap: wrap;
    flex-direction: initial;
    justify-content: center;
    padding-bottom: 30px;
  }

  @media (max-width: 767px){
    padding-bottom: 10px;
  }
`

export const ContentWrapper = styled.section`
  text-align: center;
  max-width: 640px;

  @media (max-width: 1600px) {
    max-width: 540px;   
  }
`

export const ImageWrapper = styled.div`
  max-width: 640px;
  width: 100%;

  @media (max-width: 1600px) {
    max-width: 540px;   
  }

  @media (max-width: 767px){
    margin-top: 20px;
  }
`

export const SubscribeForm = styled.form`
  margin-top: 70px;

  @media (max-width: 1600px) {
    margin-top: 50px;
  }

  @media (max-width: 767px){
    margin-top: 30px;
  }
`