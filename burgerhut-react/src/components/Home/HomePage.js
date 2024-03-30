import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
      <div className='customBg'>
        <div className="customBg2 d-flex align-items-center justify-content-center text-center">
          <div>
            {/* <h1 className="display-3 mb-4" style={{ color: '#000000', fontWeight: 'bold'}}>Welcome to <img src={logo} alt="logo of FilmiHub" className="img-fluid" style={{ maxHeight: '92px', paddingBottom: '20px'}} /></h1> */}
            <h1 className="display-3 mb-4" style={{ color: '#000000', fontWeight: 'bold'}}>Welcome to BurgerHut</h1>
            <p className="lead mb-4" style={{ color: '#000000' }}>Order Now, explore the Huts, and experience Western classics like never before!</p>
            <Link to="/AddOrder" className="btn btn-lg customBtnClr">Add an Order</Link>
          </div>
        </div>
      </div>
  )
}