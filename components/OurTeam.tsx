import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const OurTeam = () => {
  return (
    <section id="team" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Our Blacksmiths
        </h1>

        <p className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:border-transparent hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <img
              className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
              src="/TB.jpg"
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
              Terrance Brown
            </h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
              CEO / Full-Stack Engineer
            </p>

            <div className="-mx-2 mt-3 flex">
              <a
                href="https://twitter.com/Codeasaurus_Rex"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Github"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:border-transparent hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <img
              className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
              src="/DavidElster.jpg"
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
              David Elster
            </h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
              Engineer Manager / Lead Developer
            </p>

            <div className="-mx-2 mt-3 flex">
              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Github"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:border-transparent hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <img
              className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
              src="ShenendoahThompson.jpg"
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
              Shenendoah Thompson
            </h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
              Marketing Manager
            </p>

            <div className="-mx-2 mt-3 flex">
              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Github"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-200 hover:border-transparent hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <img
              className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
              src="QuestionMark.png"
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
              We're Hiring
            </h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
              Full stack developer
            </p>

            <div className="-mx-2 mt-3 flex">
              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                aria-label="Github"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
