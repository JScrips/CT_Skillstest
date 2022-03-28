import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="bg-forge-bg">
      <div className="text-center">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-2">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white bg-opacity-10 p-8 text-white  focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:w-auto"
            >
              Hire Us!
            </a>
          </div>
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <a
              href="#"
              className="mt-6 inline-flex w-full transform items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-gray-700 transition-colors duration-150  focus:ring focus:ring-gray-200 focus:ring-opacity-80 dark:border-gray-700 dark:bg-white dark:bg-opacity-10 dark:text-white dark:ring-gray-700 sm:w-auto"
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
