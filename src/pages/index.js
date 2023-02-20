import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Start from "../components/Start";
import Divider from "../components/Divider";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout pageTitle="Beauty Salon">
    <Header />
    <Start />
    <Divider from="#FF3366" to="#F7779734" />
    <About />
    <Divider from="#F7779734" to="#FF3366" />
    <Services />
    <Divider from="#FF3366" to="#F7779734" />
    <Testimonials />
    <Divider from="#F7779734" to="#FF3366" />
    <Contact />
    <Footer />
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
