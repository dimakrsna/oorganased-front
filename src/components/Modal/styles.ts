import styled from 'styled-components'
import CloseIcon from './../../images/close-icon.svg'

export const ModalViewport = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #cfcfcf;
`

export const Modal = styled.section`
  position: fixed;
  z-index: 1100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1080px;
  text-align: center;
  padding: 100px 110px 65px;
  background: #FFFFFF;
  border-radius: 10px;

  @media (max-width: 1600px){
    width: calc(100% - 30px);
    max-width: 850px;
    padding: 70px 90px 45px;
  }
  @media (max-width: 767px){
    padding: 80px 15px 30px;
  }
`

export const ModalText = styled.p`
  margin: 35px 0 45px;
  font-size: 1.38em;

  @media (max-width: 1600px){
    margin: 20px 0 35px;
    font-size: 1.25em;
  }

  @media (max-width: 767px){
    font-size: 0.93em;
  }
`

export const ModaImageWrapper = styled.div`
  max-width: 440px;
  margin: 0 auto;

  @media (max-width: 1600px){
    max-width: 400px;
  }

  @media (max-width: 767px){
    width: 80%;
  }
`

export const CloseModalButton = styled(CloseIcon)`
  position: absolute;
  right: 40px;
  top: 45px;
  cursor: pointer;

  @media (max-width: 1600px){
    right: 30px;
    top: 30px;
  }
`