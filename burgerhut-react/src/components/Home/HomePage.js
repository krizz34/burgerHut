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
                    </h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">Order Now, explore the Huts, and experience Western Classics Burgers like never before!</p>
                    <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft customBtn">Place an Order</a>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid heroBurgerPlatter" alt="heroBurgerPlatter" src={heroBurger} style={{ maxHeight: '78.43vh'}}/>
              </div>
            </div>
        </div>
    </div>

  )
}