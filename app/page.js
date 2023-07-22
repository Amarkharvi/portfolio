'use client'
import MainContainer from '@/components/MainContainer';
import Navbar from '@/components/NavBar';
import React, { useState } from 'react';

import HomeContainer from '@/components/Home';

export default function Home() {
  const [sharedState,setSharedState] = useState(false);
  return (
    <div className='flex flex-wrap justify-center '>
      <MainContainer>
        <Navbar setSharedState={setSharedState}/>
        <HomeContainer sharedState ={sharedState}/>
      </MainContainer>
    </div>
  )
}
