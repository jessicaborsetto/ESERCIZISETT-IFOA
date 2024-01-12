import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";


function CustomNavbar() {
  return (
    <Navbar className="py-0 d-flex justify-content-between">
      <div className="customNav">
        <div className="leftNav">
          <div className="fluid d-flex align-center m-0 py-2">
            <img src={logo} alt="Logo" className="logoNetflix"></img>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <a href="#home" className="menuNav">
                  <b>Home</b>
                </a>
                <a href="#link" className="menuNav">
                  TV Shows
                </a>
                <a href="#link" className="menuNav">
                  Movies
                </a>
                <a href="#link" className="menuNav">
                  Recently Added
                </a>
                <a href="#link" className="menuNav">
                  My List
                </a>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>

        <div className="rightNav">
          <div className="text-white d-flex align-items-center">
            
            <FontAwesomeIcon icon={faSearch} className="mr-2 mx-4" />
            <FontAwesomeIcon icon={faBell} className="mr-2 mx-4" />
            <div className="mx-4 profilePic">
              <img
                src="https://i1.sndcdn.com/artworks-4OjnhFcpDrq2sYlZ-upTzRw-t500x500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
