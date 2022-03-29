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
import Contact from './Contact'
import Logostripe from './Logostripe'

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Codeforge Agency</title>
        <link rel="icon" href="/codeforge-favicon.ico" />
      </Head>
      <body className="bg-forge-bg">
        {/* header  */}
        <Header />
        {/*main content*/}
        <BenefitContent />
        <Ourservices />
        <Logostripe />
        <GeneralContent />

        <CTA />
        <Credibility />
        <Testimonials />
        <Contact />

        {/*footer*/}
        <Footer />
      </body>
    </div>
  )
}

export default Layout
