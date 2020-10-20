import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/global.scss"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SEO title="Magic Byrd - An IoT Platform for Enabling Smart Products" />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
