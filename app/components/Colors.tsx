import React from 'react'

function Colors() {
    return (
        <div className="">
            <h1 className='text-md'>Colors</h1>
            <div className="flex flex-wrap gap-2">
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-red-500 focus:outline-2 focus:outline-red-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-yellow-500 focus:outline-2 focus:outline-yellow-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-green-500 focus:outline-2 focus:outline-green-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-cyan-500 focus:outline-2 focus:outline-cyan-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-blue-500 focus:outline-2 focus:outline-blue-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-fuchsia-500 focus:outline-2 focus:outline-fuchsia-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-gray-500 focus:outline-2 focus:outline-gray-400 focus:outline-offset-2"></button>
                <button type='button' className="cursor-pointer w-8 h-8 rounded-2xl bg-violet-500 focus:outline-2 focus:outline-violet-400 focus:outline-offset-2"></button>
            </div>
        </div>
    )
}

export default Colors