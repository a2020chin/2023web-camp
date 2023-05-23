import Logo from "@/assets/logo.png";

import React from "react";

const Footer = () => {
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="container">
      <div className="flex justify-between border-t-[1px] py-20">
        <ul className="flex flex-col items-center gap-1">
          <li className="display03 font-black">首頁</li>
          <li className="display03 font-black">定價</li>
        </ul>
        <img className="h-10 object-cover" src={Logo} alt="" />
      </div>
      <div className="flex gap-[100px] border-t-[1px] py-8">
        <p>AI工具王 © 2023</p>
        <nav className="flex-1">
          <ul className="flex gap-5">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
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
