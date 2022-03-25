import React from 'react'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'

const BenefitContent = () => {
  return (
    <section id="benefit" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          We Forge Sites <br />{' '}
          <span className="text-blue-500">
            Quickly, Efficiently, & Professionally.
          </span>{' '}
          <br />
          <span className="text-center text-sm text-white">
            {' '}
            The Process :{' '}
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-16">
          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber1 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Consultation
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              First, we run through ideas, site requirements, and budget.
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber2 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Proposal and Contract
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              After that, we propose a contract, ironing out any outstanding
              details.
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber3 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Design, Develop, & Deploy
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              We then begin building your site, with checkins occurring weekly.
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber4 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Delivery & Support
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lastly, we transfer the site and all associted files into your
              possesion. With ongoing support to take all stress off of your
              hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitContent
