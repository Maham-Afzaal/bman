import React from 'react'
import hand from '../Pics/hand.jpg'
const WhatWeDo = () => {
    return (
        <div className='mx-1 sm:mx-11 bg-slate-500'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <img
                            className="w-32 h-32 object-cover rounded-t-lg"
                            src={hand}
                            alt="Card Image"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Ux Design</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                        </div>
                    </div>
                </div>
            

            <div>
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        className="w-32 h-32 object-cover rounded-t-lg"
                        src={hand}
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Web Development</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        className="w-32 h-32 object-cover rounded-t-lg"
                        src={hand}
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Game Development</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </div>
                </div>
            </div>


            <div>
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        className="w-32 h-32 object-cover rounded-t-lg"
                        src={hand}
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">App Developer</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        className="w-32 h-32 object-cover rounded-t-lg"
                        src={hand}
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Graphic Designer</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        className="w-32 h-32 object-cover rounded-t-lg"
                        src={hand}
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhatWeDo