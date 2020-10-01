import styled from 'styled-components'
const indexBackground2 = require('./../../../images/index-bg-2.png')

export const SectionWrapper = styled.div`
  padding-top: 100px;
  position: relative;
  background: url(${indexBackground2}) right center no-repeat;

  @media (max-width: 1600px){
    padding-top: 80px;
    background-size: 18%;
  }

  @media (max-width: 991px){
    padding-top: 60px;
  }

  @media (max-width: 767px){
    background: none;
  }
`

export const ImageWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto 30px;

  @media (max-width: 1600px){
    max-width: 160px;
    margin-bottom: 25px;
  }
`

export const FeaturesWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Feature = styled.div`
  width: calc(33.33% - 20px);
  margin: 50px 10px 50px;
  text-align: center;

  @media (max-width: 1600px){
    margin: 30px 10px 50px;
  }

  @media (max-width: 991px){
    width: calc(50% - 20px);
  }

  @media (max-width: 767px){
    width: 100%;
    max-width: 350px;
    margin: 40px 0 0px;
  }
`

export const FeatureName = styled.h3`
  font-size: 1.56em;

  @media (max-width: 767px){
    font-size: 1.1em;
    font-weight: 600;
  }
`

export const FeatureDescription = styled.p`
  margin-top: 20px;

  @media (max-width: 1600px){
    margin-top: 15px;
  }

  @media (max-width: 767px){
    font-size: 0.93em;
    margin-top: 20px;
  }
`