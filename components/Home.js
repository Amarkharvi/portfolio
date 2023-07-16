import React from 'react';
import Slogan from './Slogan';
import Image from 'next/image';
import BackGroundStars from './BackGroundStars';
const HomeContainer =()=> {
    return (
      <div className="contain" style={{background:'#6528F7'}}>
        <BackGroundStars>
            <div className="flex">
              <div className="w-1/2 ">
                  <Image 
                      src="icons/shuttle&meteor.svg"
                      alt='shuttle'
                      width={0}
                      height={0}
                      className='w-full'
                  />
                  <div className='ml-6 text-5xl font-bold text-white font-ubuntu' style={{lineHeight:'1.3em'}}> 
                    Hello ,
                    <p className='ml-20'>I&apos;m Amar Kharvi</p>
                    <p className='ml-20'> An Full Stack Developer</p>
                  </div>
                  <div className='ml-20 mt-16 text-white text-md font-ubuntu '>
                      Currently working full time at BenchMark Gensuite, 2+ years in Coldfusion,HTML/CSS/JS,Jquery,React,Nextjs,Tailwind. Checkout Below to know more about me and my life style.
                  </div>
              </div>
              <div className="w-1/2">
                <Image 
                    src="images/amar.svg"
                    alt='amar'
                    width={0}
                    height={0}
                    className='absolute -top-0 bottom-0 -top -right-0 w-1/2'
                />
              </div>
            </div>
        </BackGroundStars>
      </div>
    );
};
  
export default HomeContainer;