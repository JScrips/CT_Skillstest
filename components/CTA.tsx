import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-2">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
            Web development
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex
            cupiditate corrupti aliquam eum vel consequuntur hic culpa unde
            natus officia enim est impedit consequatur aut, voluptatem minima
            repellat non!
          </p>

          <a
            href="#"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:w-auto"
          >
            Start now
          </a>
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
            App development
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex
            cupiditate corrupti aliquam eum vel consequuntur hic culpa unde
            natus officia enim est impedit consequatur aut, voluptatem minima
            repellat non!
          </p>

          <a
            href="#"
            className="mt-6 inline-flex w-full transform items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800 sm:w-auto"
          >
            Start now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
