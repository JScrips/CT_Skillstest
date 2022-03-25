import React from 'react'
import { useState } from 'react'
import cfB from '/public/brand.png'
import Image from 'next/image'
import { AiOutlinePhone } from 'react-icons/ai'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const status = isOpen ? 'block' : 'hidden'

  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      {/* ======================================BEGIN NAVIGATION BAR====================================  */}
      <nav className="container mx-auto bg-gray-900 p-2 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
              href="#"
            >
              CodeForge Agency
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
          className={` ${status} mt-4 flex gap-4 lg:-mx-6  lg:mt-0 lg:block lg:flex-row lg:space-y-0`}
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
      <div className="relative flex h-96 flex-col items-center justify-center overflow-hidden">
        <span className="relative z-30 rounded-xl text-2xl font-semibold text-black">
          We are Code<span className="text-orange-500">Forge</span>
        </span>
        <span className="relative z-30 text-xs"> </span>
        <div className="flex gap-6">
          <button className="relative z-30 mt-4 rounded-xl border-2 border-white bg-black p-1 text-white opacity-50 ring-2 ring-black">
            Email for a Quote!
          </button>
          <button className="relative  z-30 mt-4 flex items-center gap-2 rounded-xl border-2 border-white bg-black p-1 text-white opacity-50 ring-2 ring-black">
            <AiOutlinePhone /> (999) 999-9999
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 min-h-full w-auto min-w-full max-w-none"
        >
          <source src="bgvids/headervid2.mp4" className="" />
        </video>
      </div>
    </section>
  )
}

export default Header
