import Logo from "@/assets/logo.png";


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
      <div className="flex flex-wrap justify-between border-t-[1px] py-8 lg:gap-[100px]">
        <p>AI工具王 © 2023</p>
        <nav className="w-full order-3 lg:flex-1 lg:order-none ">
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
