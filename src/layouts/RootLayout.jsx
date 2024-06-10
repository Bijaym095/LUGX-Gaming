import { Outlet } from 'react-router-dom';

import Footer from '@/components/core/Footer';
import Navbar from '@/components/core/Navbar';
import Banner from '@/components/core/Banner';

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