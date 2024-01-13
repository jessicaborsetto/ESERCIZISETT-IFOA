
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";



function CustomNavbar() {
  return (
    <Navbar className="py-0 d-flex justify-content-between">
       <img src={logo} alt="Logo" className="logoNetflix"></img>
    </Navbar>
  );
}

export default CustomNavbar;
