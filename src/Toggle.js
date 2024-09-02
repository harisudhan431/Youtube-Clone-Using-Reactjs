import React from 'react'

export default function Toggle() {
  return (
    <div>
    <nav className="navbar  navbar-light  ">
      <div className="container-fluid flex-column ">
        <a className="navbar-brand " href="#">
        <i class="fa-solid fa-bars ps-3"></i>
          
        </a>

         
            <ul className="navbar-nav  mt-5">
              <li className="nav-item text-center">
              <i class="fa-solid fa-house"></i>
              <a className="nav-link texts fw-bold" href="#">Home</a>
              </li>
              <li className="nav-item text-center mt-4">
              <i class="fa-solid fa-video"></i>
              <a className="nav-link texts fw-bold" href="#">Shorts</a>
              </li>
              <li className="nav-item text-center mt-4">
              <i class="fa-regular fa-circle-play"></i>
              <a className="nav-link texts fw-bold" href="#">Subscription</a>
              </li>
              <li className="nav-item text-center mt-4">
              <i class="fa-brands fa-square-youtube"></i>
              <a className="nav-link texts fw-bold" href="#">You</a>
              </li>
              <li className="nav-item text-center mt-4">
              <i class="fa-solid fa-download"></i>
                <a className="nav-link texts fw-bold" href="#">Downloads</a>
              </li>
             
            </ul>
          </div>
       
    
    </nav>

    <style jsx>{`
      .navbar {
      
        width:50px;
      }
      .navbar-nav .nav-link {
        padding: 0.5rem 1rem;
      }
        .texts{
        font-size:8px}
    `}</style>
  </div>
  )
}
  


