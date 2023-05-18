import Logo from '@/assets/logo.png'

import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className='flex justify-between items-center pt-5 pb-[19px] border-b-[1px] '>
          <img src={Logo} className="w-[245px] h-10" alt="logo" />
          <div className='flex gap-5'>
            <Link to='/'>首頁</Link>
            <Link to='/pricing'>定價</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;