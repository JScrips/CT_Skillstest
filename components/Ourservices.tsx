import React from 'react'
import { GiFurnace } from 'react-icons/gi'
import { GiIronHulledWarship } from 'react-icons/gi'
import { SiCurseforge } from 'react-icons/si'
import { GiBlacksmith } from 'react-icons/gi'
import { GiFlatHammer } from 'react-icons/gi'
import { GiSteampunkGoggles } from 'react-icons/gi'

const Ourservices = () => {
  return (
    <section className="overflow-hidden bg-forge-bg py-24 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-center text-forge-primary">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiBlacksmith className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Measure your performance
              </h3>
              <p className="text-coolGray-500 font-medium">
                Get a complete sales dashboard in the cloud. See activity,
                revenue and social metrics all in one place.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiFlatHammer className="text-2xl" />
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Custom analytics
              </h3>
              <p className="text-coolGray-500 font-medium">
                Our calendar lets you know what is happening with customer and
                projects so you
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiFurnace className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Team Management
              </h3>
              <p className="text-coolGray-500 font-medium">
                A tool that lets you build a dream website even if you know
                nothing about web design or programming.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center text-forge-primary">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-50 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiIronHulledWarship className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Measure your performance
              </h3>
              <p className="text-coolGray-500 font-medium">
                Get a complete sales dashboard in the cloud. See activity,
                revenue and social metrics all in one place.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <SiCurseforge className="text-2xl" />
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Custom analytics
              </h3>
              <p className="text-coolGray-500 font-medium">
                Our calendar lets you know what is happening with customer and
                projects so you
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiSteampunkGoggles className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Team Management
              </h3>
              <p className="text-coolGray-500 font-medium">
                A tool that lets you build a dream website even if you know
                nothing about web design or programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourservices
