import React from 'react'
import { MainLayout } from './../../layouts/Main'
import { SubscribeFormTop } from './SubscribeFormTop'
import { SubscribeFormBottom } from './SubscribeFormBottom'
import { Features } from './Features'
import { AboutUs } from './AboutUs'
import { WhyChooseUs } from './WhyChooseUs'
import { Pricing } from './Pricing'

const IndexPage = () => {
  return (
    <MainLayout>
      <SubscribeFormTop />
      <AboutUs />
      <WhyChooseUs />
      <Features />
      <Pricing />
      <SubscribeFormBottom />
    </MainLayout>
  )
}

export default IndexPage