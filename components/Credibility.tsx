import React from 'react'
import { useState } from 'react'

const Credibility = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const opened = isOpen ? 'block' : 'hidden'

  return (
    <section id="portfolio" className="bg-forge-bg">
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 w-full text-orange-500 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="radius-for-skewed bg-forge-acc py-2 px-2">
        <div className="mx-auto mt-20 max-w-screen-xl"></div>

        <div className="container mx-auto px-4 pt-8">
          <div className="mx-auto mb-8 max-w-lg text-center md:mb-16">
            <span className="font-bold text-forge-primary">
              Dolor sit amet consectutar
            </span>
            <h2 className="font-heading mb-6 text-4xl font-bold lg:text-5xl">
              Latest Projects
            </h2>
          </div>
          <div className="-mx-4 mb-12 flex flex-wrap">
            <div className="mb-8 flex w-full flex-wrap lg:mb-0 lg:w-1/2">
              <div className="mb-8 w-full px-4 lg:w-1/2">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
              </div>
              <div className="mb-8 w-full px-4 lg:w-1/2">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                />
              </div>
              <div className="w-full px-4">
                <img
                  className="lg:h-128 h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-full flex-wrap lg:w-1/2">
              <div className="mb-8 w-full px-4">
                <div className="relative">
                  <img
                    className="h-128 w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                  <div
                    onClick={toggle}
                    className=" absolute inset-0 rounded-lg bg-gray-900 opacity-80"
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center p-6 ${opened}`}
                  >
                    <div onClick={toggle} className="my-auto max-w-md">
                      <span className="font-bold text-green-600">
                        Dolor sit amet consectutar
                      </span>
                      <h2 className="text-4xl font-bold text-white lg:text-5xl">
                        Build &amp; Launch without problems
                      </h2>
                      <div className="max-w-xs">
                        <p className="mb-6 text-gray-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque efficitur nisl sodales egestas
                          lobortis.
                        </p>
                        <a
                          className="inline-block rounded-l-xl rounded-t-xl bg-green-600 py-2 px-6 font-bold leading-loose text-gray-50 hover:bg-green-700"
                          href="#"
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              className="inline-block rounded-l-xl rounded-t-xl bg-forge-bg py-2 px-6 font-bold leading-loose text-gray-50 transition duration-200 hover:bg-green-700"
              href="#"
            >
              View More Projects
            </a>
          </div>
        </div>

        {/* ========================================================Testimonials=============================================================== */}
      </div>
      <div className="skew skew-bottom mr-for-radius"></div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 w-full text-orange-500 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  )
}

export default Credibility
