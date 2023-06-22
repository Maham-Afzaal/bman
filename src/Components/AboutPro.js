import React from 'react'
import bman from '../Pics/bman.jpeg';

const AboutPro = () => {
  return (
    <div>
        <div className='relative'>
            <img src={bman} width='100%' className='h-[550px] sm:h-[380px]'/>
                <div className='absolute top-2 sm:top-20 left-0 w-[80%] xs:w-[50%] flex flex-col ml-1 sm:ml-4 items-center justify-center'>
                    <h1 className='text-white text-2xl md:text-4xl font-bold mb-1 sm:mb-[4px]'>Choose what matters to your business and your customers</h1>
                    <p className='text-white font-bold mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! </p>
                    <div className='flex justify-start'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
        </div>
        </div>
    </div>
  )
}

export default AboutPro