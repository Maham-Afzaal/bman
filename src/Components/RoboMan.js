import React from 'react'

import man from '../Pics/robMan.png'
const RoboMan = () => {
  return (
    <div className='mt-4 flex flex-col-reverse sm:flex-row p-2'>
        <div className='sm:w-full'>
            <h4 className='text-black text-1xl md:text-4xl font-bold mb-1 sm:mb-[8px]'>About us______</h4>
            <h1 className='text-black text-1xl md:text-4xl font-bold mb-1 sm:mb-[4px]'>Grow Your Business With Our Agency</h1>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum.</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Start Now
                    </button>
        </div>
        <div  className=' sm:w-full flex items-center justify-center'>
            <img src={man} />
        </div>
    </div>
  )
}

export default RoboMan