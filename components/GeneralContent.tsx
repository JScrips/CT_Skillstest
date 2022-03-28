import React from 'react'

const GeneralContent = () => {
  return (
    <section className="bg-forge-bg lg:flex lg:justify-center lg:py-12">
      <div className="justify-center bg-forge-primary bg-opacity-5 text-justify text-forge-primary lg:mx-8 lg:flex lg:w-9/12 lg:rounded-lg lg:shadow-lg">
        <div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
          <h2 className=" text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Code Forge Agency{' '}
          </h2>
          <p className="mt-4 pb-2 text-center text-gray-600 dark:text-gray-400">
            We craft your websites in the fires of{' '}
            <span className="text-forge-acc">Orodruin</span>.
          </p>
          <div className="flex justify-center gap-6">
            <button className="rounded-lg bg-forge-bg p-2 ring-2 ring-white">
              Scroll to "Our Processes"
            </button>
            <button className="rounded-lg bg-forge-bg p-2 ring-2 ring-white">
              Scroll to "Contact Us"
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralContent
