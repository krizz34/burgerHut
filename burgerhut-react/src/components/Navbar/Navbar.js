import React from 'react'

export default function Navbar() {
  return (
    <div>
      
        <nav className="navbar navbar-expand-lg shadow mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">burgerHut</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Place an Order</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">All orders</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Order Status</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold text-dark" href="#">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>

    </div>
  )
}
