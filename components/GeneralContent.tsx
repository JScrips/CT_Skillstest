import React from 'react'
import { GiHammerDrop } from 'react-icons/gi'
import { GiAnvil } from 'react-icons/gi'
import { SiSourceforge } from 'react-icons/si'
import { GiFurnace } from 'react-icons/gi'

const GeneralContent = () => {
  return (
    <section className="bg-forge-bg pt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold capitalize text-forge-primary lg:text-4xl">
                At CodeForge, <br /> Trust is Earned{' '}
                <span className="text-forge-acc">100%</span>
              </h1>

              <div className="mt-2">
                <span className="inline-block h-1 w-40 rounded-full bg-forge-acc  "></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-forge-acc"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-forge-acc"></span>
              </div>
            </div>

            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl  bg-forge-primary p-2  text-2xl text-forge-acc md:mx-4">
                <GiHammerDrop />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="pb-2 text-2xl font-semibold capitalize text-forge-primary">
                  With Business, There's only{' '}
                  <span className="text-forge-acc">One</span>.
                </h1>
                <p className="text-forge-primary">
                  <span className="text-forge-acc">One</span> shot,{' '}
                  <span className="text-forge-acc">One</span> impression,{' '}
                  <span className=" text-forge-acc">One</span> solution.
                </p>
                <p className="mt-3 text-forge-primary">
                  We’re here to help you forge an experience that will make you
                  stand out in the minds of your customers as the only{' '}
                  <span className="text-forge-acc">one</span>.
                </p>
              </div>
            </div>

            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl  bg-forge-primary p-2  text-2xl text-forge-acc md:mx-4">
                <GiAnvil />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold capitalize text-forge-primary">
                  <span className="text-forge-acc">Zero</span> Configurations
                </h1>

                <p className="mt-3 text-forge-primary">
                  You came to us because you're busy. We understand that. <br />
                  <br /> You already run your world. Let us{' '}
                  <span className="text-forge-acc">Grow</span> your world.{' '}
                  <br />
                  Our experiences are seamlessly integrated into{' '}
                  <span className="text-forge-acc">your workflow</span>,
                  allowing you{' '}
                  <span className="text-forge-acc">Maximum Benefits</span> with
                  the <span className="text-forge-acc">Minimum Output</span>.
                </p>
              </div>
            </div>

            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl  bg-forge-primary p-2  text-2xl text-forge-acc md:mx-4">
                <GiFurnace />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold capitalize text-forge-primary">
                  <span className="text-forge-acc">Zero</span> Tolerance for
                  Failure
                </h1>

                <p className="mt-3 text-forge-primary">
                  Working with CodeForge is{' '}
                  <span className="text-forge-acc">easy</span>. <br />
                  <br />
                  We are <span className="text-forge-acc">dedicated</span>, and{' '}
                  <span className="text-forge-acc">committed</span> to customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <img
              className="h-[28rem] w-[28rem] rounded-full object-cover xl:h-[34rem] xl:w-[34rem]"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralContent
