import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className='flex justify-between items-center py-[10px] border-b-[1px] '>
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true" className="w-[245px] h-10" alt="logo" />
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