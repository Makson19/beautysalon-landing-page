import React from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"



const IndexPage = () => (
  <Layout pageTitle="Beauty Salon">
    <Header />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage;
