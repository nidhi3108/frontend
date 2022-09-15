import React from 'react'

const Header = () => {
  return (
    <header>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"black"}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active ">
              <a className="nav-link font-weight-bold text-primary"  aria-current="page" href="header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="login">
                Login
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-primary" href="addpodcast">
               AddPodcast
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="listpodcast">
               Listpodcast
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Navbar */}
    {/* Background image */}
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          'url("https://burrelles.com/wp-content/uploads/2021/11/what-you-need-to-know-about-podcast.jpg")',
        height: 400
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Podcast Sharing Webapp</h1>
            <h4 className="mb-3">Know Your Voice</h4>
            <a className="btn btn-outline-light btn-lg" href="AddPodcast" role="button">
              Create Your First Podcast
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Background image */}
  </header>
  
  )
}

export default Header