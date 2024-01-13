
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";



function CustomNavbar() {
  return (
    <Navbar>
       <img src={logo} alt="Logo" className="logoNetflix"></img>
    </Navbar>
  );
}

export default CustomNavbar;
