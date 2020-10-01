import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import LogoFooterImg from './../../../images/logo-footer.svg'

export const FooterWrapper = styled.footer`
  padding: 75px 0 35px;
  background: #263238;
  color: #fff;

  @media (max-width: 1600px){
    padding: 60px 0 20px;
  }

  @media (max-width: 767px){
    padding: 30px 0 20px
  }
`

export const LogoFooter = styled(LogoFooterImg)`
  max-width: 250px;
  width: 100%;

  @media (max-width: 1600px){
    max-width: 200px;
  }

  @media (max-width: 767px){
    max-width: 140px;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;

  @media (max-width: 1600px){
    padding-bottom: 55px;
  }

  @media (max-width: 767px){
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
  }
`


export const FooterMenu = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 767px){
    display: block;
    width: 100%;
    margin-top: 30px;
  }
`

export const FooterMenuLink = styled(AnchorLink)`
  font-family: 'Montserrat', sans-serif;
  margin: 0 30px;
  color: #fff;
  position: relative;
  transition: 0.1s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1600px){
    margin: 0 25px;
  }

  @media (max-width: 767px){
    display: block;
    text-align: center;
    font-size: 0.9em;
    margin: 0 0 25px;
  }
`

export const Copyright = styled.p`
  text-align: center;

  @media (max-width: 767px){
    font-size: 0.9em;
  }
`