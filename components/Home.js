import React from 'react';
import Slogan from './slogan';

const HomeContainer =()=> {
    return (
      <div className="container bg-white">
        <div className='flex items-center justify-end'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className='' width="400" height="400" viewBox="0 23 200 200">
                <g transform="scale(-1, 1) translate(-200, 0)">
                    <polygon points="0,250 220,250 0,0" fill="#f31d33" />
                </g>
            </svg>
            
            <img 
                className=' w-72 top-12 absolute lg:top-2 md:top-2 sm:top-2 lg:w-80 md:w-80 sm:w-80'
                src='/images/amarT.png'
              /> */}
              <Slogan/>
        </div>
      </div>
    );
};
  
export default HomeContainer;