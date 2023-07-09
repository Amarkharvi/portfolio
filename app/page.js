import Image from 'next/image'
import MainContainer from '@/components/MainContainer';
import CardContainer from '@/components/Home';
import Navbar from '@/components/NavBar';
import HomeContainer from '@/components/Home';

export default function Home() {
  return (
    <div className='flex flex-wrap justify-center '>
      <MainContainer>
        <Navbar/>
        <HomeContainer/>
      </MainContainer>
    </div>
  )
}
