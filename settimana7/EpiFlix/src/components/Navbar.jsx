import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-dark " >
      <div className='fluid d-flex align-center m-0'>
      <img src={logo} alt="Logo" className="logoNetflix"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>TV Shows</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Movies</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#link" className='text-white'>My List</Nav.Link>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;

