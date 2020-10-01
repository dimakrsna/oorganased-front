import styled from 'styled-components'
const indexBackground1 = require('./../../../images/index-bg-1.png')

export const SectionWrapper = styled.div`
  padding: 125px 0 0px;
  position: relative;
  background: url(${indexBackground1}) left center no-repeat;

  @media (max-width: 1600px){
    padding-top: 100px;
    background-size: 16%;
  }

  @media (max-width: 991px){
    padding-top: 70px;
  }

  @media (max-width: 767px){
    padding-top: 40px;
    background: none;
  }
`

export const ImageWrapper = styled.div`
  max-width: 605px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1600px){
    max-width: 480px;
  }
`

export const Text = styled.div`
  margin-top: 60px;
  
  @media (max-width: 1600px){
    margin-top: 50px;
  }

  @media (max-width: 767px){
    margin-top: 30px;
  }
`

export const SlideItem = styled.div`
  text-align: center;
`

export const SliderWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1600px){
    max-width: 900px;
  }
`

export const PrevButton = styled.span`
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 0;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%50%;
  border: 2px solid #6EC5AE;
  cursor: pointer;
  transition: 0.15s;

  svg {
    margin-top: 13px;

    @media (max-width: 1600px){
      transform: scale(0.8); 
      margin-top: 9px;
    }
  }

  .button {
    transition: 0.2s;
  }

  &:hover {
    background: #6EC5AE;

    .button {
      stroke: #fff;
    }
  }

  @media (max-width: 767px){
    display: none;
  }
`

export const NextButton = styled.span`
  position: absolute;
  z-index: 100;
  top: 40%;
  right: 0;
  display: inline-block;
  text-align: center;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%50%;
  border: 2px solid #6EC5AE;
  cursor: pointer;
  transition: 0.15s;

  svg {
    margin-top: 13px;

    @media (max-width: 1600px){
      transform: scale(0.8); 
      margin-top: 9px;
    }
  }

  .button {
    transition: 0.2s;
  }

  &:hover {
    background: #6EC5AE;

    .button {
      stroke: #fff;
    }
  }

  @media (max-width: 767px){
    display: none;
  }
`

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  padding: 0 40px 20px;
  margin: 60px auto 0;
  border-bottom: 1px solid #EDF1F7;

  @media (max-width: 1600px){
    max-width: 860px;
    padding-bottom: 15px;
    margin-top: 50px;
  }

  @media (max-width: 767px){
    padding: 0;
    margin-top: 50px;
  }
`

export const Tab = styled.div`
  position: relative;
  color: #8F9BB3;
  font-size: 1.38em;
  cursor: pointer;

  @media (max-width: 767px){
    font-size: 0.8em;
    padding-bottom: 8px;
  }

  &.active {
    color: #6EC5AE;

    @media (max-width: 767px){
      border-bottom: 1px solid #6EC5AE;
    }

    &:after {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translate(-50%, 0);
      display: block;
      width: 180px;
      height: 1px;
      background: #6EC5AE;
      content: '';

      @media (max-width: 1600px){
       width: 160px;
       bottom: -15px;
      }

      @media (max-width: 767px){
        display: none;
      }
    }
  }

  
`