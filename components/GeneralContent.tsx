import React from 'react'

const GeneralContent = () => {
  return (
    <section className="bg-gray-900 lg:flex lg:justify-center lg:py-12">
      <div className="justify-center  bg-white text-justify dark:bg-gray-800 lg:mx-8 lg:flex lg:w-9/12 lg:rounded-lg lg:shadow-lg">
        <div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
          <h2 className=" text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Code Forge Agency{' '}
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            We craft your websites in the fires of Orodruin.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white p-2">Scroll to "Our Processes"</button>
            <button className="bg-white p-2">Scroll to "Contact Us"</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralContent
