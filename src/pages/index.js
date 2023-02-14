import React from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
import Start from "../components/Start";
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"



const IndexPage = () => (
  <Layout pageTitle="Beauty Salon">
    <Header />
    <Start />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return (
    <>
      <html lang="pt-br" />
      <Seo title="Beauty Salon" />
    </>
  )
}

export default IndexPage;
