import React from "react"
import SEO from "./../components/seo"
const IndexPage = React.lazy(() => import('../components/IndexPage'));

const Index = () => (
  <React.Suspense fallback={<>loading</>}>
    <SEO title="Home" />
    <IndexPage/>
  </React.Suspense>
)

export default Index
