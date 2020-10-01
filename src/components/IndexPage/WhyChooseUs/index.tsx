import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { SliderPrevButton, SliderNextButton } from './SliderButtons'
import {
  SectionWrapper,
  ImageWrapper,
  SlideItem,
  Text,
  SliderWrapper,
  TabsWrapper,
  Tab,
} from './styles'
import {
  SectionsTitle,
  SectionsSubtitle,
  Container,
} from '../../styles'
import Slider from 'react-slick'
import 'react-slick-styles/slick/slick.css'
import 'react-slick-styles/slick/slick-theme.css'

export const WhyChooseUs = () => {
  
  const refSlider = useRef(null)
  const [currentSlide, setSlide] = useState(0)

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextButton />,
    prevArrow: <SliderPrevButton />,
    beforeChange: (current, next) => setSlide(next),
  }

  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slide-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slide2: file(relativePath: { eq: "slide-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slide3: file(relativePath: { eq: "slide-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  const onTabClick = (value: number) => {
    setSlide(value)
    refSlider.current.slickGoTo(value)
  }

  return (
    <SectionWrapper>
      <Container id="benefits">
        <SectionsTitle>Why choose us</SectionsTitle>
        <SectionsSubtitle>This product is created to simplify life of property investors, landlords and tenants</SectionsSubtitle>
        <SliderWrapper>
          <Slider {...sliderSettings} ref={refSlider}>
            <SlideItem>
              <ImageWrapper>
                <Img fluid={data.slide1.childImageSharp.fluid} />
              </ImageWrapper>
              <Text>We gathered all necessary features for landlords, property agents and tenants in one place</Text>
            </SlideItem>
            <SlideItem>
              <ImageWrapper>
                <Img fluid={data.slide2.childImageSharp.fluid} />
              </ImageWrapper>
              <Text>You will get complete access to the property management crm just for free</Text>
            </SlideItem>
            <SlideItem>
              <ImageWrapper>
                <Img fluid={data.slide3.childImageSharp.fluid} />
              </ImageWrapper>
              <Text>Save your time and don't worry that any tenancy information gets lost </Text>
            </SlideItem>
          </Slider>
          <TabsWrapper>
            <Tab className={currentSlide === 0 ? 'active' : ''} onClick={()=>onTabClick(0)}>All in one application</Tab>
            <Tab className={currentSlide === 1 ? 'active' : ''} onClick={()=>onTabClick(1)}>Free forever</Tab>
            <Tab className={currentSlide === 2 ? 'active' : ''} onClick={()=>onTabClick(2)}>Stay oorganized</Tab>
          </TabsWrapper>
        </SliderWrapper>
      </Container>
    </SectionWrapper>
  )
}