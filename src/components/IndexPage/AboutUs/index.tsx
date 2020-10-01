import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SectionWrapper,
  ContentWrapper,
  ImageWrapper,
  Text,
} from './styles'
import {
  SectionsTitle,
  SectionsSubtitle,
  Container,
} from '../../styles'

export const AboutUs = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-us.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SectionWrapper id="aboutUs">
        <ContentWrapper>
          <SectionsTitle>
            Few words about us
          </SectionsTitle>
          <SectionsSubtitle>
            Oorganized is a free property management platform for the global market.
          </SectionsSubtitle>
          <Text>
            This software is made with love for landlords, tenants and property managers.
            We offer you a unique solution with all needed functionalities to manage your properties
            just for free. We spent 12 years ourselves suffering from chaos in our excel files recording
            tenants’ information, monthly payments, deposits, viewings, etc. Finally, we united everything
            in one place and enjoy it. Join our happy team and use a free property management solution forever.
          </Text>
        </ContentWrapper>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
      </SectionWrapper>
    </Container>
  )
}