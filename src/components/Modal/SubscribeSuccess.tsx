import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Portal } from './Portal'
import { 
  ModalViewport, 
  Modal,
  ModalText,
  ModaImageWrapper,
  CloseModalButton,
} from './styles'
import { 
  SectionsTitle,
  FormButton,
} from '../styles'

interface Props {
  onCloseModal?: () => void
}

export const SubscribeSuccessModal: React.FC<Props> = (props) => {

  const { onCloseModal } = props
  const data = useStaticQuery(graphql`
    query {
      modal: file(relativePath: { eq: "modal-welcome.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Portal>
      <ModalViewport onClick={onCloseModal}/>
      <Modal>
        <CloseModalButton onClick={onCloseModal}/>
        <SectionsTitle>Welcome to oorganized!</SectionsTitle>
        <ModaImageWrapper>
          <Img fluid={data.modal.childImageSharp.fluid} />
        </ModaImageWrapper>
        <ModalText>
          Our property management software is in the process of development now. Stay in touch 
          with us and you'll receive first access to property management platform. We will launch soon!
        </ModalText>
        <FormButton onClick={onCloseModal}>Sounds great</FormButton>
      </Modal>
    </Portal>
  )
}