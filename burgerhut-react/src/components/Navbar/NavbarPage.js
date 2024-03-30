import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      
        <nav className="navbar navbar-expand-lg shadow mb-4">
            <div className="container-fluid">
                <NavLink to={"/"} className={'navbar-brand'} style={{ color: '#000000', fontWeight: "bold" }}>
                    burgerHut
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <NavLink to={"/addOrder"} className={'nav-link'} style={{ color: '#000000', fontWeight: "bold" }}>
                            Place an Order
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/listOrder"} className={'nav-link'} style={{ color: '#000000', fontWeight: "bold" }}>
                            All Orders
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" href="#">Order Status</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold text-dark" href="#">
                            <i className="fa-solid fa-right-from-bracket" />
                        </a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>

    </div>
  )
}
