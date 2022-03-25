import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const status = isOpen ? 'block' : 'hidden'

  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      {/* ======================================BEGIN NAVIGATION BAR====================================  */}
      <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
              href="#"
            >
              Brand
            </a>
          </div>

          {/* =============================MOBILE MENU HAMBURGER BUTTON =============================*/}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
              onClick={toggle}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* ==========================Mobile MENU============================= */}
        <div
          className={` ${status} mt-4 flex gap-4  lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0`}
        >
          <a
            className="text-gray-700 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#team"
          >
            Blacksmiths
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#benefit"
          >
            Portfolio
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>

      {/*======================= END OF NAVIGATION BAR ===================*/}

      {/* ===================================BEGIN HEADER SECTION=================================== */}
      <div className="  text-center">
        <video
          width="auto"
          height="auto"
          autoPlay
          loop
          muted
          className="absolute right-0 z-0 overflow-hidden bg-cover"
        >
          <source src="bgvids/headerVid.mp4" className="" />
        </video>
        <div className="relative z-40 flex flex-col bg-gray-600 bg-opacity-50 pt-96">
          <span className="relative z-40 text-xl font-semibold text-white">
            We are Code<span className="text-blue-400">Forge</span>
          </span>
          <button className="mx-auto mt-4 rounded-lg border-2 border-black bg-white p-1 text-xs opacity-60 ring-2 ring-white">
            Inquire about a Quote!
          </button>
          <div className="mx-auto  border-4 border-transparent px-10">
            <p className="pt-11 text-xs text-white lg:pb-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              illo quas, tempora aut
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
