import React from "react"

import { MainLayout } from "./../layouts/Main"
import SEO from "./../components/seo"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404" />
    <h1>404 Not Found</h1>
  </MainLayout>
)

export default NotFoundPage
