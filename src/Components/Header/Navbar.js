import React from 'react'
export default function Navbar() {


   
  return (
  
    // Navbar
    <nav className="navbar navbar-expand-lg bg-info opacity-75 navbar-dark  fixed-top">
  <div className="container">
     
    <a className="navbar-brand" href="#"><button className='btn btn-outline-warning border border-warning border-2 rounded-5 fw-bold fs-4'>MA</button></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fs-5 me-3 home" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active fs-5 me-3" href="#About">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active fs-5 me-3" href="#certification">Certification</a>
        </li>
        <li className="nav-item "> 
          <a className="nav-link active fs-5 me-3" href="#protfolio">Portfolio</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active fs-5 me-3" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}
