import { Outlet } from 'react-router-dom';

import Footer from '@/components/global/Footer';
import Navbar from '@/components/global/Navbar';
import Banner from '@/components/global/Banner';

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <main className='site-content'>
            <Banner/>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout;