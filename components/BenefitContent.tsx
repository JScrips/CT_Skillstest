import React from 'react'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'

const BenefitContent = () => {
  return (
    <section id="benefit" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className=" text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          STRESS-FREE WEB DEVELOPMENT
        </h2>
        <span className="text-sm text-white">As easy as counting to 4</span>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-16">
          {/* FIRST STEP */}

          <div className=" flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber1 />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Consultation
            </h3>

            <p className="text-gray-500 dark:text-gray-300">
              The first steps can seem daunting. We’re here to support you.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber2 />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Proposal and Contract
            </h3>

            <p className="text-gray-500 dark:text-gray-300">
              We provide a detailed roadmap from concept to completion.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber3 />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Design, Develop, & Deploy
            </h3>

            <p className="text-gray-500 dark:text-gray-300">
              We FIRE up the FORGE, providing frequent check-ins/updates on
              progress
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <RiNumber4 />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Delivery & Support
            </h3>

            <p className="text-gray-500 dark:text-gray-300">
              We transfer all associated files to you, and off ongoing technical
              support packages to suit your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitContent
