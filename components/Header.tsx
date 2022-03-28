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
    <section id="home" className=" bg-forge-bg">
      {/* ======================================BEGIN NAVIGATION BAR====================================  */}
      <nav className="container mx-auto bg-forge-bg p-4 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-forge-primary hover:text-forge-acc lg:text-3xl"
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
              <svg viewBox="0 0 24 24" className="fill-current h-6 w-6">
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
          className={` ${status} mt-4 flex  gap-4 text-forge-primary lg:-mx-6 lg:mt-0 lg:block lg:flex-row lg:space-y-0`}
        >
          <a
            className="hover:text-forge-acc hover:underline lg:mx-6"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-forge-acc  hover:underline lg:mx-6"
            href="#team"
          >
            Blacksmiths
          </a>
          <a
            className="hover:text-forge-acc  hover:underline lg:mx-6"
            href="#benefit"
          >
            Portfolio
          </a>
          <a
            className="hover:text-forge-acc  hover:underline lg:mx-6"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>

      {/*======================= END OF NAVIGATION BAR ===================*/}

      {/* ===================================BEGIN HEADER SECTION=================================== */}
      <div className="relative flex h-96 flex-col items-center justify-center overflow-hidden">
        <div className="relative z-30 rounded-xl bg-forge-bg bg-opacity-30 p-10 text-center">
          <span className="text-2xl font-semibold text-forge-primary">
            Overlay
          </span>
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
