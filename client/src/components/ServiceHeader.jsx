import React from 'react'

const ServiceHeader = () => {
  return (
    <div className='max-w-[100%] mx-auto'>
      <div className='w-[100%] mx-auto lg:w-[100%] grid grid-cols-1 bg-[url(https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/Service_banner.jpg?updatedAt=1744961442259)] bg-cover bg-no-repeat bg-center h-[300px] lg:h-[500px] '>   
        <div className='flex justify-center items-center h-[300px] lg:h-[500px] bg-[#00000080] flex-col text-white text-[30px] lg:text-[50px] gap-3'>
            <h2>Services</h2>
            <p className='text-lg'>Home / Services</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceHeader
