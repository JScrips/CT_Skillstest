import React from 'react'
import Header from './Header'
import OurTeam from './OurTeam'
import BenefitContent from './BenefitContent'
import GeneralContent from './GeneralContent'
import CTA from './CTA'
import Footer from './Footer'
import Credibility from './Credibility'
import Head from 'next/head'
import Testimonials from './Testimonials'
import Ourservices from './Ourservices'

const Layout = () => {
  return (
    <div>
      <Head>
        <title>Codeforge Agency</title>
        <link rel="icon" href="/codeforge-favicon.ico" />
      </Head>
      <body>
        {/* header  */}
        <Header />
        {/*main content*/}
        <GeneralContent />
        <Ourservices />
        <BenefitContent />
        <CTA />
        <Credibility />
        <Testimonials />

        <OurTeam />

        {/*footer*/}
        <Footer />
      </body>
    </div>
  )
}

export default Layout
