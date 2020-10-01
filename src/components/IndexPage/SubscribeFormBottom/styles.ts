import styled from 'styled-components'
const tickRed = require('./../../../images/tick-red.png')

export const SectionWrapper = styled.div`
  padding: 100px 0 145px;

  @media (max-width: 1600px){
    padding: 80px 0 110px;
  }

  @media (max-width: 991px){
    padding-bottom: 60px;
  }

  @media (max-width: 767px){
    padding-top: 60px;
  }
`

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1600px){
    margin-top: 10px;
  }
  
  @media (max-width: 991px){
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ImageWrapper = styled.div`
  max-width: 530px;
  width: 100%;

  @media (max-width: 1600px){
    max-width: 440px;
  }

  @media (max-width: 991px){
    margin-top: 40px;
  }
`

export const SubscribeForm = styled.form`
  padding-left: 17%;

  @media (max-width: 991px){
    max-width: 440px;
    padding-left: 7%;
  }

  @media (max-width: 767px){
    padding-left: 0;
  }
`

export const FormList = styled.ul`
  margin-bottom: 50px;

  @media (max-width: 1600px){
    margin-bottom: 35px;
  }

  @media (max-width: 767px){
    margin: 15px 0 30px;
    padding-left: 35px;
  }
`

export const FormListItem = styled.li`
  font-size: 1.38em;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 1600px){
    margin-bottom: 14px;
  }

  @media (max-width: 767px){
    font-size: 1.05em;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: -30px;
    top: 13px;
    width: 13px;
    height: 10px;
    background: url(${tickRed}) center center;
    background-size: cover;

    @media (max-width: 1600px){
      transform: scale(0.8);
      top: 10px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

`
