import styled from 'styled-components'
const indexBackground3_1 = require('./../../../images/index-bg-3-1.png')
const indexBackground3_2 = require('./../../../images/index-bg-3-2.png')
const tickGreen = require('./../../../images/tick-green.png')

export const SectionWrapper = styled.div`
  position: relative;
  background-image: url(${indexBackground3_1}), url(${indexBackground3_2});
  background-position: left center, right center;
  background-repeat: no-repeat, no-repeat;
  padding-top: 50px;

  @media (max-width: 1600px){
    padding-top: 30px;
    background-size: 32%;
  }

  @media (max-width: 767px){
    padding-top: 60px;
  }

  @media (max-width: 767px){
    background: none;
  }
`

export const PricingItem = styled.div`
  width: 420px;
  margin: 50px auto 0;
  background: #FFFFFF;
  border: 1px solid #EDF1F7;
  border-radius: 10px;
  box-shadow: 10px 10px 60px rgba(38, 50, 56, 0.05);

  @media (max-width: 1600px){
    width: 340px;
    margin-top: 40px;
  }

  @media (max-width: 767px){
    margin: 30px auto 0;
    width: 100%;
    max-width: 340px;
  }
`

export const PricingItemHeader = styled.div`
  position: relative;
  padding: 40px 20px 20px;
  text-align: center;
  color: #8F9BB3;

  @media (max-width: 1600px){
    padding: 30px 20px 15px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(110, 197, 174, 0) 0%, #6EC5AE 50.03%, rgba(110, 197, 174, 0) 100%);
  }
`

export const PricingCost = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #E8505B;
  font-size: 2.5em;

  &:before {
    display: inline-block;
    position: relative;
    right: 5px;
    bottom: 8px;
    content: '$';
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }
`

export const BenefitsList = styled.ul`
  padding: 50px 55px 45px;

  @media (max-width: 1600px){
    padding: 40px 45px 40px;
  }

  @media (max-width: 767px){
    padding: 20px 30px;
  }
`

export const BenefitsListItem = styled.li`
  margin-bottom: 20px;
  padding-right: 15px;
  position: relative;

  @media (max-width: 1600px){
    margin-bottom: 15px;
  }

  @media (max-width: 767px){
    font-size: 0.9em;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 10px;
    width: 13px;
    height: 10px;
    background: url(${tickGreen}) center center;
    background-size: cover;

    @media (max-width: 1600px){
      top: 8px;
      transform: scale(0.8);
    }

    @media (max-width: 767px){
      top: 6px;
    }
  }
`