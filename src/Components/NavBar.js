import React from 'react';


const NavBar = () => {
    return (
        <div>
            <nav className="bg-white-800 border-solid border-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <span className="text-blue-700 font-semibold text-[30px]">B
                            <span className='text-black font-semibold text-[30px]'>
                                Man
                            </span>
                            
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </a>
                                <a href="#" className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </a>
                                <a href="#" className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Portfolio
                                </a>
                                <a href="#" className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Blog
                                </a>
                                <a href="#" className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </a>
                            </div>

                        </div>
                        <div>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Let's Talk
                            </button>
                          

                        </div>
                       
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar