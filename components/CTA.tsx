import React from 'react'

const CTA = () => {
  return (
    <section id="" className="bg-forge-bg">
      <div className="text-center">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-2">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white bg-opacity-10 p-8 text-white  hover:bg-forge-primary hover:text-forge-acc focus:ring focus:ring-white focus:ring-opacity-80 sm:w-auto"
            >
              Hire Us!
            </a>
          </div>
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <a
              href="#testimonials"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white bg-opacity-10 p-8 text-white  hover:bg-forge-acc focus:ring focus:ring-orange-700 focus:ring-opacity-80 sm:w-auto"
            >
              Convince me more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
