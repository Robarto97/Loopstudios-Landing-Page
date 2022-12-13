import logo from "../images/logo.svg";
import Nav from "../Nav";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Nav />
      <ul className="icons">
        <li className="icon">
          <img src={facebook} alt="" />
        </li>
        <li className="icon">
          <img src={twitter} alt="" />
        </li>
        <li className="icon">
          <img src={pinterest} alt="" />
        </li>
        <li className="icon">
          <img src={instagram} alt="" />
        </li>
      </ul>
      <p className="rights"> &copy; 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
