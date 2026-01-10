import React from 'react'

function PlaceHolder() {
  return (
    <div className='flex flex-1 flex-col justify-center items-center  bg-base-300 w-full p-16'>
      <div className="max-w-md space-y-6 text-center ">
        <div className="flex  items-center justify-center gap-4 mb-4">
          <img src="/chopper.png" className=' rounded-3xl animate-none opacity-50 w-16 h-16' alt="" />
        </div>

        <div className="flex flex-col items-center justify-center text-content-200">
          <h1 className='text-3xl m-2'>welcome to MiTram!</h1>
          <p className='text-1xl text-base-content/50'>Select a conversation from side bar and start chatting</p>
        </div>
      </div>

    </div>
  )
}

export default PlaceHolder
