import { Outlet } from 'react-router-dom';

import Footer from '@/components/core/Footer';
import Navbar from '@/components/core/Navbar';

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <main className='site-content'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout;