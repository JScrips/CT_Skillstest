import React from 'react'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'

const BenefitContent = () => {
  return (
    <section id="benefit" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10 text-center">
        <h1 className=" text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Web Development, Simplified
        </h1>
        <span className="text-sm text-white">As easy as counting to 4</span>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-16">
          {/* FIRST STEP */}

          <div className=" flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber1 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Consultation
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Creating a website can be a daunting process alone, We can help.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber2 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Proposal and Contract
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              We can map out exactly what you will be receiving, as well as a
              rough time frame for delivery.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber3 />
            </span>

            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Design, Develop, & Deploy
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              We begin the forge, with frequent check-ins to let update you on
              the process.
            </p>
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
