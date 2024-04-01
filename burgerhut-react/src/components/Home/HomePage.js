import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroBurger from './img/hero.png';
import logo from './img/LogoBurgerHut.png';
import logoTextWhite from './img/burgerHutTextWhite.png';


export default function Home() {
  return (

    <div className="container-fluid py-5 bg-dark hero-header" >
        <div className="container ">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">
                        Dine at<br />
                        <img src={logoTextWhite} alt="Text logo of burgerHut" className="img-fluid my-3" style={{ maxHeight: '92px'}} />
                        {/* <img src={logo} alt="logo of burgerHut" className="img-fluid" style={{ maxHeight: '92px'}} /> */}
                    </h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">Order Now, explore the Huts, and experience Classics Burgers like never before!</p>
                    <Link to={"/addOrder"} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft customBtn">Add an Order</Link>                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid heroBurgerPlatter" alt="heroBurgerPlatter" src={heroBurger} style={{ maxHeight: '78.43vh'}}/>
              </div>
            </div>
        </div>
    </div>





      // <div className='customBg'>
      //   <div className="customBg2 d-flex align-items-center justify-content-center text-center">
      //     <div>
      //       {/* <h1 className="display-3 mb-4" style={{ color: '#000000', fontWeight: 'bold'}}>Welcome to <img src={logo} alt="logo of FilmiHub" className="img-fluid" style={{ maxHeight: '92px', paddingBottom: '20px'}} /></h1> */}
      //       <h1 className="display-3 mb-4" style={{ color: '#000000', fontWeight: 'bold'}}>Welcome to BurgerHut</h1>
      //       <p className="lead mb-4" style={{ color: '#000000' }}>Order Now, explore the Huts, and experience Western classics like never before!</p>
      //       <Link to={"/addOrder"} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft customBtn">Add an Order</Link>
      //     </div>
      //   </div>
      // </div>
  )
}