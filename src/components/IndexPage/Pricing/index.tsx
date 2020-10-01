import React from 'react'
import {
  SectionsTitle,
  Container,
} from '../../styles'
import { 
  SectionWrapper,
  PricingItem,
  PricingItemHeader,
  BenefitsList,
  BenefitsListItem,
  PricingCost,
 } from './styles'

export const Pricing = () => {

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionsTitle>Pricing</SectionsTitle>
        <PricingItem>
          <PricingItemHeader>
          <PricingCost>0</PricingCost> / month
          </PricingItemHeader>
          <BenefitsList>
            <BenefitsListItem>Landlords & Tenants access</BenefitsListItem>
            <BenefitsListItem>Property management</BenefitsListItem>
            <BenefitsListItem>Unlimited rental units</BenefitsListItem>
            <BenefitsListItem>Unlimited storage</BenefitsListItem>
            <BenefitsListItem>Payments</BenefitsListItem>
            <BenefitsListItem>Property advertising</BenefitsListItem>
            <BenefitsListItem>Online applicant form</BenefitsListItem>
            <BenefitsListItem>Tenant screening</BenefitsListItem>
            <BenefitsListItem>Maintenance tracking</BenefitsListItem>
            <BenefitsListItem>Chat with tenants</BenefitsListItem>
            <BenefitsListItem>Reminders</BenefitsListItem>
          </BenefitsList>
        </PricingItem>
      </Container>
      
    </SectionWrapper>
  )
}