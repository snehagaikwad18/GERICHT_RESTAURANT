import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      {/* 1st page */}
      <div className='w-screen h-screen bg-black font-cormorantUpright'>
        <Navbar />
        <div className='w-screen h-[70%] flex justify-center items-center'>
          <div className='h-[95%] w-[90%] flex '>
            <div className='h-full w-[50%] bg-black flex justify-center items-center'>
              <div className='sm:h-[80%] sm:w-[80%] sm:bg-black space-y-5'>
                <div className=''>
                  <h1 className='text-white text-xl'>Chase the new Flavour</h1>
                  <img src="Vector.png" alt="" />
                </div>
                <p className='text-yellow text-8xl font-bold tracking-wider w-[90%]'>The Key To Fine Dining</p>
                <p className='text-lg text-lightYellow'>Sit tellus lobortis sed senectus vivamus molestie.<br></br>
                  Condimentum volutpat morbi facilisis quam scelerisque  sapien.<br />
                  Et, penatibus aliquam amet tellus </p>
                <button className='h-[10%] w-[20%] bg-yellow text-black'>Explore Menu</button>
              </div>
            </div>
            {/* halfright */}
            <div className='h-full w-[50%]'>
              {/* upper */}
              <div className='w-full h-[50%]  flex justify-end relative'>
                <div className='bg-yellow h-full w-[50%] absolute right-5'>hello</div>
              </div>
              {/* lower */}
              <div className='w-full h-[50%]  flex justify-start relative'>
                <div className='bg-yellow h-full w-[50%] align-bottom absolute left-5 bottom-5  '>helloo</div>
              </div>
            </div>
          </div>

        </div>
        <div className=' h-[17%] w-screen flex justify-end pl-20 gap-[40%] items-end pb-5 '>
          <div className='h-[25%] w-[8%] mt-5  text-white flex items-center justify-between gap-2 text-center'> 
            <h1>01</h1>
            <img src="Line 2.png" alt="" />
            <h1>02</h1>
            <h1>03</h1> 
            <h1>04</h1>
          </div>

          <div className='h-full w-auto text-yellow space-y-5 pr-10'>
            <img className='pl-7' src="line3.png" alt="" />
            <h1>SCROLL</h1>
          </div>
        </div>
        
      </div>

      {/* 2nd page */}
      <div className='h-screen w-screen bg-black'>

      </div>

    </>
  )
}

export default Home
