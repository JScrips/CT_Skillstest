import React from 'react'
import { GiFurnace } from 'react-icons/gi'
import { GiIronHulledWarship } from 'react-icons/gi'
import { SiCurseforge } from 'react-icons/si'
import { GiBlacksmith } from 'react-icons/gi'
import { GiFlatHammer } from 'react-icons/gi'
import { GiSteampunkGoggles } from 'react-icons/gi'

const Ourservices = () => {
  return (
    <section className="overflow-hidden bg-forge-bg py-10 md:pb-28">
      <div className="container mx-auto px-4">
        <h2 className="pb-10 text-center ">
          <span className="text-5xl text-forge-acc">Solution</span>{' '}
          <span className="text-5xl text-white">Oriented</span>
          <br />
          <span className="text-sm text-white">
            a plethora of <span className="text-forge-acc">benefits</span>{' '}
          </span>
        </h2>
        <div className="-mx-4 flex flex-wrap justify-center text-forge-primary">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiBlacksmith className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Blazing <span className="text-forge-acc">Fast</span>
              </h3>
              <p className="text-coolGray-500 font-medium">
                <span className="underline decoration-forge-acc">
                  Slow websites cost you money .
                </span>{' '}
                We write <span className="text-forge-acc">lean</span> code that
                loads <span className="text-forge-acc">fast</span>.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiFlatHammer className="text-2xl" />
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Forged For <span className="text-forge-acc">You</span>
              </h3>
              <p className="text-coolGray-500 font-medium">
                We send every client a mockup before we start to{' '}
                <span className="text-forge-acc">ensure</span> that what we
                build is to your{' '}
                <span className="text-forge-acc">exact specifications</span>.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiFurnace className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Ad-<span className="text-forge-acc">Free</span>
              </h3>
              <p className="text-coolGray-500 font-medium">
                Some web design agencies slip ads into their client’s websites.
                Every website we produce is ad-free,{' '}
                <span className="text-forge-acc">guaranteed</span>.
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
                Fully <span className="text-forge-acc">Responsive</span>{' '}
                Experience
              </h3>
              <p className="text-coolGray-500 font-medium">
                From phones and tablets to PCs and XL TVs, we ensure your
                website <span className="text-forge-acc">looks good</span> no
                matter what screen it’s on.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <SiCurseforge className="text-2xl" />
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                <span className="text-forge-acc">Top Notch</span> Support
              </h3>
              <p className="text-coolGray-500 font-medium">
                We offer short term and longer term maintenance plans for{' '}
                <span className="text-forge-acc">any and every</span> help or
                adjustment you might need.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="hover:bg-forgebg h-full rounded-md p-8 text-center transition duration-200 hover:bg-opacity-20 hover:shadow-xl">
              <div className="mx-auto mb-7 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-forge-primary text-forge-acc">
                <GiSteampunkGoggles className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                Hyper <span className="text-forge-acc">Secure</span>
              </h3>
              <p className="text-coolGray-500 font-medium">
                We build websites in-line with some of the most{' '}
                <span className="text-forge-acc">
                  rigorous security protocols
                </span>
                , and will instruct you on how to keep your site{' '}
                <span className="text-forge-acc">secure</span> and{' '}
                <span className="text-forge-acc">safe</span> from hackers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourservices
