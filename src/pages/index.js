import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Start from "../components/Start";
import Divider from "../components/Divider";
import About from "../components/About";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout pageTitle="Beauty Salon">
    <Header />
    <Start />
    <Divider from="#FF3366" to="#F7779734" />
    <About />
    <Divider from="#F7779734" to="#FF3366" />
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
