import React from 'react'

function Partners() {
  return (
    <div>
        <div className=' '>
            <div className='relative'>
                <img src="images/head.png" alt="" className=' h-24 flex justify-center mx-auto  ' />
                <div className=' absolute top-[25%] left-[26%] sm:left-[44%] '>
                    <h1 className=' text-4xl  font-dream  uppercase'>BONGO CAT Partners</h1>

                </div>
            </div>

            <div className=' flex flex-col sm:flex-row justify-center gap-5 my-8'>
                <img src="images/bnb.png" alt="" className=' h-20  sm:w-auto mx-auto sm:mx-0' />
                <img src="images/coin.png" alt="" className=' h-20 sm:w-auto mx-auto sm:mx-0'/>
                <img src="images/dex.png" alt="" className=' h-20 sm:w-auto mx-auto sm:mx-0'/>
                <img src="images/okk.png" alt="" className=' h-20 sm:w-auto mx-auto sm:mx-0'/>
                <img src="images/pink.png" alt="" className=' h-20 sm:w-auto mx-auto sm:mx-0'/>
                


            </div>

        </div>
    </div>
  )
}

export default Partners
