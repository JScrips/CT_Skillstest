import React from 'react'

const GeneralContent = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 lg:flex lg:justify-center lg:py-12">
      <div className="justify-center bg-white  text-justify dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg lg:shadow-lg">
        <div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
          <h2 className=" text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Build Your New{' '}
            <span className="text-blue-600 dark:text-blue-400">Idea</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur..
          </p>
        </div>
      </div>
    </section>
  )
}

export default GeneralContent
