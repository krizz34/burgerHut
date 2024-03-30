import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function ListOrder() {

    const [orders, setOrders] = useState([]);
    const {orderId} = useParams();


    const loadOrders = async () => {
        const allOrders = await axios.get("http://localhost:8080/allOrders");
        setOrders(allOrders.data);
    };

    useEffect(()=>{
        loadOrders();
    },[]);


    const deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:8080/deleteOrder/${orderId}`)
        loadOrders();
    }



    return (
      <div className='container'>
        <div className='py-4'>

            <table className="table table-stripped table-hover">
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
            </table>

        </div> 
      </div>
    )

}