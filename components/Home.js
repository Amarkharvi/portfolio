import React from 'react';
import Image from 'next/image';
import BackGroundStars from './BackGroundStars';
const HomeContainer =()=> {
  
    return (
      <div className="contain" style={{background:'#6528F7'}}>
        <BackGroundStars>
            <div className="flex">
              <div className="w-1/2 sm:hidden lg:block md:block">
                  <Image 
                      src="icons/shuttle&meteor.svg"
                      alt='shuttle'
                      width={0}
                      height={0}
                      className='w-full md:block sm:hidden hidden lg:block xl:block 2xl:block'
                  />
                  <div className='md:block sm:hidden hidden lg:block xl:block 2xl:block ml-6 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-md font-bold text-white font-ubuntu' style={{lineHeight:'1.3em'}}> 
                    Hello ,
                    <p className='ml-20 md:ml-10 lg:ml-20'>I&apos;m Amar Kharvi</p>
                    <p className='ml-20 md:ml-10 lg:ml-20'> An Full Stack Developer</p>
                  </div>
                  <div className='2xl:text-xl xl:text-md lg:text:sm md:text-xs sm:text-xs md:block sm:hidden hidden lg:block xl:block 2xl:block ml-20 md:ml-10 mt 18 lg:mt-24 md:mt-6 text-white text-md font-ubuntu '>
                      Currently working full time at BenchMark Gensuite, 2+ years in Coldfusion,HTML/CSS/JS,Jquery,React,Nextjs,Tailwind. Checkout Below to know more about me and my life style.
                  </div>
              </div>
              <div className="w-1/2 sm:w-full md:w-full lg:w-12 ">
                <Image 
                    src="images/amar.svg"
                    alt='amar'
                    width={0}
                    height={0}
                    className=' sm:w-full xl:w-1/2 2xl:w-1/2 lg:w-1/2 md:w-1/2 absolute -top-0 bottom-0 -top -right-0 w-full '
                />
              </div>
              <div className='lg:hidden xl:hidden ml-5 2xl:hidden md:hidden sm:block block absolute top-2 left-0 sm:text-4xl  text-xl text-white font-ubuntu font-bold bottom-0 right-0'> 
              <Image
                src='icons/circle.svg'
                width={0}
                height={0}
                className='ml-10 w-36 rotating-outer-container'
                />
                <Image
                  src='icons/name.svg'
                  width={0}
                  height={0}
                  className='w-24 absolute top-14 left-16'
                />
              </div>
            </div>
        </BackGroundStars>
      </div>
    );
};
  
export default HomeContainer;