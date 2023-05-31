import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="container">
      <div className="flex flex-col-reverse items-start gap-10 border-t-[1px] py-20 md:flex-row md:justify-between">
        <ul className="flex flex-col items-center gap-2 md:gap-1">
          <li className="text-heading01 font-black md:text-display03 duration-300 hover:scale-125">
            <Link to="/">首頁</Link>
          </li>
          <li className="text-heading01 font-black md:text-display03 duration-300 hover:scale-125">
            <Link to="/pricing">定價</Link>
          </li>
        </ul>
        <img className="h-10 object-cover" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-wrap justify-between gap-8 border-t-[1px] py-8 lg:gap-[100px]">
        <p>AI工具王 © 2023</p>
        <nav className="w-full order-3 lg:flex-1 lg:order-none ">
          <ul className="flex gap-5">
            <li>
              <a
                href="https://www.facebook.com/hexschool/?locale=zh_TW"
                target="_"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/hexschool1?lang=zh-Hant" target="_">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hexschool/" target="_">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <button className="flex" onClick={toTop}>
          Back to top
          <span className="ml-3 text-base material-symbols-outlined">
            arrow_upward
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
