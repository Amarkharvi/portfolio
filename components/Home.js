import React, { useState } from 'react';
import Image from 'next/image';
import BackGroundStars from './BackGroundStars';
import CustomBulletList from './CustomBulletList';
const HomeContainer =({sharedState})=> {
    const descriptionList =[
      {text:"Actively working full time at Benchmark Gensuite"},
      {
        text:`Free-Lance Portfolio <img src='icons/pointer.svg'   width="30" height="30" /> <button className="ml-2 p-2 md:w-auto md:text-xs rounded-2x transition-transform transform hover:-translate-y-1 hover:shadow-md  text-white rounded-2xl shadow-2xl bg-green-900">Hire Me</button>`
      }
    ]
    
    return (
      <div className="contain" style={{background:'#6528F7'}}>
        <BackGroundStars>
            <div className="flex">
              <div className="lg:w-1/2 w-full sm:hidden lg:block md:block">
                  <Image 
                      src="icons/shuttle&meteor.svg"
                      alt='shuttle'
                      width={0}
                      height={0}
                      className=' w-full md:block sm:hidden hidden lg:block xl:block 2xl:block'
                  />
                  <Image
                    src='icons/circle.svg'
                    width={0}
                    height={0}
                    className=' opacity-95 hidden lg:block xl:block 2xl:block sm:hidden md:block -z-50 w-1/2 top-0 left-1/2 bottom-0 right-20 absolute  rotating-outer-container'
                    />
                  <div className='md:block  sm:hidden hidden lg:block xl:block 2xl:block ml-6 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-md font-bold text-white font-ubuntu' style={{lineHeight:'1.3em'}}> 
                    Hello ,
                    <p className='ml-20 md:ml-10 lg:ml-20'>I&apos;m Amar Kharvi</p>
                    <p className='ml-20 md:ml-10 lg:ml-20'>An Full Stack Developer</p>
                  </div>
                  <div className=' bg-white 2xl:text-xl xl:text-md lg:text-sm md:text-xs md:w-auto sm:text-xs md:block sm:hidden hidden lg:block xl:block 2xl:block ml-10 md:ml-5 lg:my-20  md:mt-3 text-md p-3 rounded-lg font-extrabold font-ubuntu ' style={{color:'#413A3A'}}>
                    <CustomBulletList items={descriptionList}/>
                  </div>
              </div>
              <div className="w-1/2 sm:w-full md:w-full lg:w-12 ">
                <Image 
                    src="images/amar.svg"
                    alt='amar'
                    width={0}
                    height={0}
                    className=' sm:w-full xl:w-1/2 2xl:w-1/2 lg:w-1/2 md:w-1/2 absolute  bottom-0 -right-0 w-full top-0'
                />
              </div>
              <div className='mobileHeight lg:hidden xl:hidden  2xl:hidden md:hidden sm:block block  '> 
                  <Image
                  src='images/intro.svg'
                  width={0}
                  height={0}
                  className={`transition-all duration-500 ease-in-out w-1/2 absolute ${ sharedState ? ' top-0 ':' -top-10 '} right-0 left-0 `}
                  />
                <Image
                  src='icons/circle.svg'
                  width={0}
                  height={0}
                  className=' opacity-95 -z-50 w-5/6 left-0 bottom-1/4 right-0 absolute flex items-center justify-center rotating-outer-container'
                  />
                <div className='mx-2 shadow-xl rounded-xl text-sm  font-bold font-ubuntu items-center flex justify-center bg-white absolute bottom-2 left-0 right-0 transition-transform transform hover:-translate-y-1 hover:shadow-md overflow-y-scroll h-1/6'>
                  <CustomBulletList items={descriptionList}/>
                </div>
              </div>
            </div>
        </BackGroundStars>
      </div>
    );
};
  
export default HomeContainer;