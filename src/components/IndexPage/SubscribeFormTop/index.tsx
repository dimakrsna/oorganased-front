import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { SubscribeSuccessModal } from '../../Modal/SubscribeSuccess'
import firebase from 'gatsby-plugin-firebase'
import {
  SectionWrapper,
  ContentWrapper,
  ImageWrapper,
  SubscribeForm,
} from './styles'
import {
  SectionsTitle,
  SectionsSubtitle,
  Container,
  FormButton,
  EmailInput,
  EmailIconStyled,
  EmailInputWrapper,
} from '../../styles'


export const SubscribeFormTop = () => {

  const [isModalOpen, openModal] = useState<Boolean>(false)

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "subscribe-top.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const onFormSubmit = (event) => {
    event.preventDefault()

    // firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    //   console.error(error?.message);
    // });

  }

  return (
    <Container>
      <SectionWrapper>
        <ContentWrapper>
          <SectionsTitle>Free property management software created to keep everything organized</SectionsTitle>
          <SectionsSubtitle>Free forever and for everyone. Rent out your property without rush. Be first to try real estate software!</SectionsSubtitle>
          <SubscribeForm onSubmit={onFormSubmit}>
            <EmailInputWrapper>
              <EmailIconStyled />
              <EmailInput placeholder="Enter your email" />
            </EmailInputWrapper>
            <FormButton onClick={onFormSubmit}>Try for free</FormButton>
          </SubscribeForm>
        </ContentWrapper>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
      </SectionWrapper>
      {isModalOpen && <SubscribeSuccessModal onCloseModal={() => openModal(false)} />}
    </Container>
  )
}