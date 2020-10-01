import React from 'react'
import { SectionWrapper } from './styles'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import {
  SectionsTitle,
  SectionsSubtitle,
  Container,
} from '../../styles'
import {
  ImageWrapper,
  FeatureName,
  FeatureDescription,
  Feature,
  FeaturesWrapper,
} from './styles'

export const Features = () => {

  const data = useStaticQuery(graphql`
    query {
      feature1: file(relativePath: { eq: "feature-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      feature2: file(relativePath: { eq: "feature-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      feature3: file(relativePath: { eq: "feature-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      feature4: file(relativePath: { eq: "feature-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      feature5: file(relativePath: { eq: "feature-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      feature6: file(relativePath: { eq: "feature-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },

    }
  `)

  return (
    <SectionWrapper>
      <Container id="features">
        <SectionsTitle>Features</SectionsTitle>
        <SectionsSubtitle>
          Check out an incredible set of features provided by oorganized. We collected all common required
          features in one tool. oorganized allows you to take control of almost every procedure need to be
          done by landlords and tenants.
        </SectionsSubtitle>

        <FeaturesWrapper>
          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature1.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>List properties</FeatureName>
            <FeatureDescription>
              List and advertise all your properties in minutes, save all needed details and documents
            </FeatureDescription>
          </Feature>

          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature2.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>Collect rent</FeatureName>
            <FeatureDescription>
              Receive monthly rent and deposits and keep an eye to all your payments
            </FeatureDescription>
          </Feature>

          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature3.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>Calendar & Reminders</FeatureName>
            <FeatureDescription>
              Enjoy adding events to calendar and never miss a viewing or a rent collection
            </FeatureDescription>
          </Feature>

          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature4.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>Chat</FeatureName>
            <FeatureDescription>
              Stay in touch with your tenants and never loose their contacts
            </FeatureDescription>
          </Feature>

          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature5.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>Maintenance requests</FeatureName>
            <FeatureDescription>
              Keep track of all maintenance requests and expenses on them
            </FeatureDescription>
          </Feature>

          <Feature>
            <ImageWrapper>
              <Img fluid={data.feature6.childImageSharp.fluid} />
            </ImageWrapper>
            <FeatureName>Screening reports</FeatureName>
            <FeatureDescription>
              Stay safe and get to know your tenants better
            </FeatureDescription>
          </Feature>
        </FeaturesWrapper>
      </Container>
    </SectionWrapper>
  )
}