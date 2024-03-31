import React, { useEffect, useState } from 'react';
import './OrderState.css';


import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function OrderState() {

    const [readyOrders, setReadyOrders] = useState([]);
    const [preparingOrders, setPreparingOrders] = useState([]);


    const readyOrderCollector = async () => {
        const allReadyOrders = await axios.get("http://localhost:8080/readyOrders");
        setReadyOrders(allReadyOrders.data);
    };

    const preparingOrderCollector = async () => {
      const allPreparingOrders = await axios.get("http://localhost:8080/preparingOrders");
      setPreparingOrders(allPreparingOrders.data);
  };

    useEffect(()=>{
      readyOrderCollector();
      preparingOrderCollector();
    },[]);




    return (
      <div className='container'>
        <div className='py-4'>
            <div style={{marginBottom:"20px"}}>
                <h3>Ready</h3>
                <div style={{backgroundColor:"black", width:"84vw", height:"2px", marginTop:"10px", marginBottom:"10px"}} />

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {
                        readyOrders.map((readyOrders_Instance) => (
                          <div className='col'>
                              <div className="card customCardReady">
                                  <h3> Order No. : {readyOrders_Instance.orderId} </h3>
                              </div>
                          </div>
                        ))
                    }
                </div>
            </div>

            <div>
              <h3>Preparing</h3>
              <div style={{backgroundColor:"black", width:"84vw", height:"2px", marginTop:"10px", marginBottom:"10px"}} />

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                  {
                      preparingOrders.map((preparingOrders_Instance) => (
                        <div className='col'>
                            <div className="card customCardPreparing">
                                <h3> Order No. : {preparingOrders_Instance.orderId} </h3>
                            </div>
                        </div>
                      ))
                  }
              </div>
          </div>
            {/* <table className="table table-stripped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order No</th>
                        <th scope="col">Order Title</th>
                        <th scope="col">Extras</th>
                        <th scope="col">User Mob.</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((orders) => (
                            <tr key={orders.orderId}>
                                <th scope="row">{orders.orderId}</th>
                                <td>{orders.orderTitle}</td>
                                <td>{orders.extras}</td>
                                <td>{orders.userMob}</td>
                                <td>{orders.status}</td>
                                <td>
                                    <Link to={`/viewOrder/${orders.orderId}`} className='btn btn-info btn-sm mx-1'><i className="fa-solid fa-eye text-light" /></Link>
                                    <Link to={`/updateOrder/${orders.orderId}`} className='btn btn-secondary btn-sm mx-1'><i className="fa-solid fa-pencil text-light" /></Link>
                                    <button onClick={() => deleteOrder(orders.orderId)} className='btn btn-danger btn-sm mx-1'><i className="fa-solid fa-trash text-light" /></button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table> */}

        </div> 
      </div>
    )

}