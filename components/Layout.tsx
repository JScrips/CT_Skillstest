import React from 'react'
import Header from './Header'
import OurTeam from './OurTeam'
import BenefitContent from './BenefitContent'
import GeneralContent from './GeneralContent'
import CTA from './CTA'
import Footer from './Footer'
import Credibility from './Credibility'
import Head from 'next/head'

const Layout = () => {
  return (
    <div>
      <Head>
        <title>Codeforge Agency</title>
        <link rel="icon" href="/codeforge-favicon.ico" />
      </Head>

      <Header />
      <BenefitContent />

      <Credibility />

      <GeneralContent />
      <OurTeam />
      <CTA />

      <Footer />
    </div>
  )
}

export default Layout
