import logo from "./images/logo.svg";
import Nav from "./Nav";
const Header = () => {
  const handleClick = () => {
    document.querySelector(".hamburger").classList.toggle("open");
    document.querySelector(".items").classList.toggle("active");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div onClick={handleClick} className="hamburger"></div>
        <Nav />
      </nav>
      <h1 className="title">Immersive experiences that deliver</h1>
    </header>
  );
};

export default Header;
