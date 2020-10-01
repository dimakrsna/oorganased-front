import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SectionWrapper,
  ContentWrapper,
  ImageWrapper,
  SubscribeForm,
  FormList,
  FormListItem,
} from './styles'
import {
  SectionsTitle,
  Container,
  FormButton,
  EmailInput,
  EmailIconStyled,
  EmailInputWrapper,
} from '../../styles'

export const SubscribeFormBottom = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "subscribe-bottom.png" }) {
        childImageSharp {
          fluid(maxWidth: 530) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SectionWrapper>
        <SectionsTitle>
          Stay organized by using easy-to-understand and well-thought property management software solution
        </SectionsTitle>
        <ContentWrapper>
          <SubscribeForm>
            <FormList>
              <FormListItem>No account required</FormListItem>
              <FormListItem>No credit card required</FormListItem>
              <FormListItem>Use all features for free</FormListItem>
              <FormListItem>Access from mobile, tablet or desktop</FormListItem>
            </FormList>
            <EmailInputWrapper>
              <EmailIconStyled />
              <EmailInput placeholder="Enter your email" />
            </EmailInputWrapper>
            <FormButton>Try for free</FormButton>
          </SubscribeForm>
          <ImageWrapper>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </ImageWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </Container>
  )
}