import React from 'react'
import logo from "./assests/youtube (1).png"

 function Nav() {
  return (
   <>
   {/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}
<div className="container-fluid">
  <div className="row pt-3">
    <div className="col-3 ">
    <a class="navbar-brand text-dark" href="#">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      YouTube<sup>IN</sup>
    </a>
    
    </div>
    <div className="col-4">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </div>
    <div className="col-3 d-flex">
    <button class="btn btn-outline-secondary w-25" type="submit">Search</button>
    <button class="btn btn-outline-secondary ms-2 " type="submit"><i class="fa-solid fa-microphone"></i></button>
    </div>
    <div className="col-2  text-center">
    <i class="fa-regular fa-user fs-3 pt-2"></i>
    </div>
  </div>
</div>
   
   
   
   </>
  )
}
export default Nav;