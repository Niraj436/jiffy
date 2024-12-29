import React from 'react'

const FoodItems = () => {
  return (
    <div className='flex items-center gap-x-3  mt-10'>
       
        <div className='flex flex-col gap-y-1 items-center'>
          <div>
            <img src="/images/image5.png" className='h-12' alt="" />
          </div>
          <div>Pizza</div>
        </div>
        <div className='flex flex-col gap-y-1 items-center'>
          <div>
            <img src="/images/image4.png" className='h-14' alt="" />
          </div>
          <div>Birayani</div>
        </div>

        <div className='flex flex-col gap-y-1 items-center'>
          <div>
            <img src="/images/image4.png" className='h-14' alt="" />
          </div>
          <div>Birayani</div>
        </div>
        <div className='flex flex-col gap-y-1 items-center'>
          <div>
            <img src="/images/image4.png" className='h-14' alt="" />
          </div>
          <div>Birayani</div>
        </div>

     

        
    </div>
  )
}

export default FoodItems