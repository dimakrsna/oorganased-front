import React from 'react'
import { PrevButton, NextButton } from './styles'

export const SliderPrevButton = (props) => (
  <PrevButton onClick={props.onClick}>
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="button" d="M13.5 17L1.88394 9.85166C1.24941 9.46117 1.24941 8.53883 1.88394 8.14834L13.5 1" stroke="#6EC5AE" strokeWidth="2" />
    </svg>
  </PrevButton>
)

export const SliderNextButton = (props) => (
  <NextButton onClick={props.onClick}>
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="button" d="M1.5 1L13.1161 8.14834C13.7506 8.53883 13.7506 9.46117 13.1161 9.85166L1.5 17" stroke="#6EC5AE" strokeWidth="2" />
    </svg>
  </NextButton>
)