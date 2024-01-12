import Dropdown from 'react-bootstrap/Dropdown';

function Dropbtn() {
  return (

    <Dropdown className='ms-4'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border mr-2 dropBtn" >
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-dark'>
        <Dropdown.Item href="#" className='text-white'>Comedy</Dropdown.Item>
        <Dropdown.Item href="#" className='text-white'>Drama</Dropdown.Item>
        <Dropdown.Item href="#" className='text-white'>Thriller</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropbtn;


