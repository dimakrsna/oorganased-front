import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  TopBarWrapper,
  TopMenu,
  TopMenuLink,
  LogoTop,
  TopBarContainer,
  Language,
  LanguageMobile,
  Hamburger,
  HamburgerButton,
  MobileMenu,
  MobileMenuLink,
  MobileMenuWrapper,
  MobileMenuItem,
} from './styles'

export const TopBar = () => {

  const [isMobileMenuOpen, onOpenMobileMenu] = useState<Boolean>(false)

  const onMobileMenuClick = () => {
    onOpenMobileMenu(false)
  }

  return (
    <TopBarWrapper>
      <TopBarContainer>
        <Link to="/">
          <LogoTop />
        </Link>
        <TopMenu>
          <TopMenuLink to="/#aboutUs">About Us</TopMenuLink>
          <TopMenuLink to="/#benefits">Benefits</TopMenuLink>
          <TopMenuLink to="/#features">Features</TopMenuLink>
          <TopMenuLink to="/#pricing">Pricing</TopMenuLink>
        </TopMenu>
        <Language>EN</Language>
        {isMobileMenuOpen && <MobileMenuWrapper>
          <MobileMenu>
            <MobileMenuItem to="/#aboutUs">
              <MobileMenuLink onClick={onMobileMenuClick}>About Us</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem to="/#benefits">
              <MobileMenuLink onClick={onMobileMenuClick}>Benefits</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem to="/#features">
              <MobileMenuLink onClick={onMobileMenuClick}>Features</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem to="/#pricing">
              <MobileMenuLink onClick={onMobileMenuClick}>Pricing</MobileMenuLink>
            </MobileMenuItem>
          </MobileMenu>
          <LanguageMobile>EN</LanguageMobile>
        </MobileMenuWrapper>}
        <HamburgerButton onClick={() => onOpenMobileMenu(!isMobileMenuOpen)}>
          <Hamburger className={isMobileMenuOpen && 'open'}>
            <span />
            <span />
            <span />
          </Hamburger>
        </HamburgerButton>
      </TopBarContainer>
    </TopBarWrapper>
  )
}
