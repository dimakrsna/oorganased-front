/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TopBar } from '../components/shared/TopBar'
import { Footer } from '../components/shared/Footer'
import { GlobalStyle } from '../components/styles'
import { MainLayoutWrapper } from '../components/styles'

export const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MainLayoutWrapper>
      <GlobalStyle/>
      <TopBar/>
      {children}
      <Footer/>
    </MainLayoutWrapper>
  )
}
