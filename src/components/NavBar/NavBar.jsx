import React from 'react';


const NavBar = () => {




  return (
    <div className="pos-f-t">
      
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/Homepage">TaskTick</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <li className="nav-item active">
              <a className="nav-link" href="/Homepage">Home <span className="sr-only"></span></a>
            </li>
            </div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Homepage">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AddPatient">Add patient</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AddCaregiver">Add caregiver</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ConnectPage">Relate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Sign out</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

