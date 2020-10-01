import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import EmailIcon from './../images/email-icon.svg'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
  }

  body {
    color: #263238;
    font: 400 18px/1.5 "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  input, textarea, button {
    outline: 0;
    border: 0;
  }

  @media (max-width: 1600px) {
    body {
      font-size: 15px;
    } 
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1600px) {
    max-width: 1100px;
    padding: 0 10px;
  }

  @media (max-width: 991px) {
    max-width: 760px; 
  }

  @media (max-width: 767px){
    padding: 0 15px;
  }
`

export const SectionsTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.1em;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 1600px) {
   margin-bottom: 25px;
  }

  @media (max-width: 767px){
    font-size: 1.3em;
    margin-bottom: 15px;
  }
`

export const SectionsSubtitle = styled.p`
  font-size: 1.38em;
  text-align: center;

  @media (max-width: 767px){
    font-size: 1.05em;
  }
`

export const MainLayoutWrapper = styled.div`
  padding-top: 150px;

  @media (max-width: 1600px) {
    padding-top: 80px;
  }
`

export const FormButton = styled.button`
  width: 420px;
  height: 64px;
  background: #E8505B;
  border-radius: 10px;
  border: 3px solid #E8505B;
  color: #EDF1F7;
  font-size: 1.44em;
  font-weight: 700;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: #fff;
    color: #E8505B;
  }

  &.disabled {
    background: #EDF1F7;
    color: #8F9BB3;
    border-color: #EDF1F7;
    cursor: default;
  }

  @media (max-width: 1600px) {
    width: 340px;
    height: 48px;
    border-radius: 7px;
    border: 2px solid #E8505B;
  }

  @media (max-width: 767px){
    width: 100%;
    max-width: 340px;
    font-size: 1.2em;
  }
`

export const EmailInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 420px;

  @media (max-width: 1600px) {
    width: 340px;
  }

  @media (max-width: 767px){
    width: 100%;
    max-width: 340px;
  }
`  

export const EmailInput = styled.input`
  height: 58px;
  width: 420px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #8F9BB3;
  margin-bottom: 40px;
  padding-left: 78px;
  padding-right: 20px;
  color: #8F9BB3;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: #8F9BB3;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 1600px) {
    width: 340px;
    height: 48px;
    padding-left: 60px;
    padding-right: 10px;
    font-size: 14px;
    border-radius: 7px;
    margin-bottom: 30px;
  }

  @media (max-width: 767px){
    width: 100%;
    max-width: 340px;
  }
`

export const EmailIconStyled = styled(EmailIcon)`
  position: absolute;
  left: 28px;
  top: 20px;

  @media (max-width: 1600px) {
    max-width: 20px;
    left: 22px;
    top: 15px;
  }
`