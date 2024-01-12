import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

function Navbar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#">
                <img src="assets/logo.png" alt="logo" style={{ width: '100px', height: '55px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mr-auto">
                    <Nav.Link href="#" className="font-weight-bold">
                    Home <span className="sr-only">(current)</span>
                    </Nav.Link>
                    <Nav.Link href="#" className="font-weight-bold">
                    TV Shows
                    </Nav.Link>
                    <Nav.Link href="#" className="font-weight-bold">
                    Movies
                    </Nav.Link>
                    <Nav.Link href="#" className="font-weight-bold">
                    Recently Added
                    </Nav.Link>
                    <Nav.Link href="#" className="font-weight-bold">
                    My List
                    </Nav.Link>
                </Nav>
                <i className="fa fa-search icons"></i>
                <div id="kids">KIDS</div>
                <i className="fa fa-bell icons"></i>
                <i className="fa fa-user icons"></i>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <Dropdown className="ml-4 mt-1">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="rounded-0"
                            style={{ backgroundColor: '#221f1f' }}
                        >
                            Genres &nbsp;
                        </Button>
                        <Dropdown.Menu className="bg-dark">
                            <Dropdown.Item href="#" className="text-white bg-dark">
                            Comedy
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="text-white bg-dark">
                            Drama
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="text-white bg-dark">
                            Thriller
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <i className="fa fa-th-large icons"></i>
                        <i className="fa fa-th icons"></i>
                    </div>
                </div>
                <h4>Trending Now</h4>
                {/* Add your image elements here for Trending Now section */}
                <h4>Watch it Again</h4>
                {/* Add your image elements here for Watch it Again section */}
                <h4>New Releases</h4>
                {/* Add your image elements here for New Releases section */}
            </div>
                <footer>
                {/* Add your footer content here */}
                </footer>
      </div>
    )
}

export default Navbar
