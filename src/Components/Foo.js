import React from 'react'

const Foo = () => {
  return (
    <div>
        <div className="relative overflow-hidden">
      <div className="bg-red-500 w-full h-64 absolute top-0 -left-32 transform -skew-x-12"></div>
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold mb-4">Tilted Background</h2>
        <p className="text-gray-700">
          This is the text content that is not tilted.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Foo