import React from 'react'

const CulturalQuest = () => {
  return (
    <div>
        <div>
            <h1>Culture Quest</h1>
            <p>Dive into exciting cuisines and conquer every quest.</p>
        </div>
        <div className='rounded-lg bg-red-600 text-white'>
            <div className='flex flex-col justify-center h-[123px] pl-6 gap-y-3'>
                <div className='flex gap-x-4'>
                    <div>
                        <img src="/images/meter.png" className='w-12'/>
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Newari Cuisine</h1>
                        <p className='text-xs'>From sweet Yomari to delicious </p>
                        <p className='text-xs'>Samay Bhaji</p>
                    </div>

                    


                </div>

                <div>
                    <button className='bg-white px-4 py-1 rounded-md font-semibold text-[0.65rem] text-brand'>Continue</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CulturalQuest