import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button';

function Edit() {
  return (
    <div className="profile">
      <h2 className="editProfile">Edit Profile</h2>
      <hr className="hrProfile" />

      <div className="edit">
        <img src="https://i1.sndcdn.com/artworks-4OjnhFcpDrq2sYlZ-upTzRw-t500x500.jpg" alt=""/>
        <div className="info">
          <div className="nome">
            <input
              type="text"
              className="form-control bg-transparent border-0 utente text-white"
              placeholder="First name"
              aria-label="First name"
            />
          </div>

          <div className="section">
            <p>Language:</p>

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border mr-2 rounded-0 ">
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <hr className="divider" />

          <div className="settings">
            <p className="section">Maturity Settings:</p>

            <p className="maturity"> <b>ALL MATURITY RATINGS</b> </p>
            <p className="text-white"> Show titles of all maturity ratings for this profile </p>
            <Button variant="outline-secondary editBtn rounded-0"><b>EDIT</b></Button>
          </div>

          <hr className="divider" />

          <div className="controls">
            <p className="section">Autoplay Controls</p>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input" />
              <label className="form-check-label text-white" > Autoplay next episode in a series on all devices.</label>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input"/>
              <label className="form-check-label text-white" htmlFor="autoplayPreviews">Autoplay previews while browsing on all devices.</label>
            </div>

          </div>
        </div>
      </div>

      <hr />

        <div className="buttons">
                <Button variant="outline-secondary editBtn rounded-0"> <b>SAVE</b></Button>
                <Button variant="outline-secondary editBtn rounded-0"> <b>CANCEL</b></Button>
                <Button variant="outline-secondary editBtn rounded-0"><b>DELETE ACCOUNT</b></Button>
        </div>
    </div>
  );
}

export default Edit;
