import React from 'react'
import { Link } from "gatsby"
import { Container } from './../../styles'
import {
  FooterWrapper,
  LogoFooter,
  SectionWrapper,
  FooterMenu,
  FooterMenuLink,
  Copyright,
} from './styles'

export const Footer = () => {

  return (
    <FooterWrapper>
      <Container>
        <SectionWrapper>
          <Link to="/">
            <LogoFooter />
          </Link>
          <FooterMenu>
            <FooterMenuLink to="/#aboutUs">About Us</FooterMenuLink>
            <FooterMenuLink to="/#benefits">Benefits</FooterMenuLink>
            <FooterMenuLink to="/#features">Features</FooterMenuLink>
            <FooterMenuLink to="/#pricing">Pricing</FooterMenuLink>
          </FooterMenu>
        </SectionWrapper>
        <Copyright>© Oorganized. All Rights Reserved 2020 </Copyright>
      </Container>
    </FooterWrapper>
  )
}