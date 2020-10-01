import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LogoTopImg from './../../../images/logo-top.svg'


export const TopBarWrapper = styled.header`
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1600px) {
    max-width: 1100px;
    padding: 0 10px;
    height: 80px;
    align-items: flex-end;
  }

  @media (max-width: 767px){
    padding-left: 15px;
    padding-right: 5px;
    height: 50px;
    align-items: center;
  }
`

export const TopMenu = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #8F9BB3;

  @media (max-width: 767px){
    display: none;
  }
`

export const TopMenuLink = styled(AnchorLink)`
  font-family: 'Montserrat', sans-serif;
  margin: 0 30px;
  color: #263238;
  position: relative;

  &:after {
    content: '';
      display: block;
      position: absolute;
      bottom: -16px;
      left: 50%;
      margin-left: -33px;
      width: 66px;
      height: 2px;
      transition: 0.05s;
  }

  &:hover {
    &:after {
      background: #E8505B;
    }
  }

  @media (max-width: 1600px) {
    margin: 0 25px;
  }
`

export const MobileMenuWrapper = styled.div`
  display: none;

  @media (max-width: 767px){
    display: block; 
    position: fixed;
    background: #fff;
    padding-top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    left: 0;
    top: 50px;
  }
`

export const MobileMenu = styled.nav`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap; 
`

export const MobileMenuItem = styled(AnchorLink)`
  display: block;
  width: 100%;
  padding: 30px 0;
  text-align: center;
`

export const MobileMenuLink = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #263238;
  font-size: 1.66em;
`

export const LogoTop = styled(LogoTopImg)`
  max-width: 250px;

  @media (max-width: 1600px) {
    max-width: 200px;
  }

  @media (max-width: 767px){
    max-width: 140px;
    margin-top: 5px;
  }
`

export const Language = styled.div`
  margin-bottom: 18px;

  @media (max-width: 767px){
    display: none;
  }
`

export const LanguageMobile = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
`

export const HamburgerButton = styled.div`
  display: none;
  
  @media (max-width: 767px){
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;  
  }
`

export const Hamburger = styled.div`
  position: relative;
  width: 42px;
  height: 16px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  transform: scale(0.7);

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 75%;
    background: #263238;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      width: 40%;
      pointer-events: none;
    }
    
    &:nth-child(2) {
      top: 8px;
      pointer-events: none;
    }
    
    &:nth-child(3) {
      top: 16px;
      left: 16px;
      width: 40%;
      pointer-events: none;
    }
  }

  &.open {
    
    span {

      &:nth-child(1) {
        top: 9px;
        left: 13px;
        width: 55%;
        transform: rotate(135deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      
      &:nth-child(3) {
        top: 9px;
        left: 14px;
        width: 55%;
        transform: rotate(-135deg);
      }
    }
}
`