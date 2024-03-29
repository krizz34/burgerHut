import React, { useEffect, useState } from 'react';

import axios from "axios";

export default function ListOrder() {

    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        const allOrders = await axios.get("http://localhost:8080/allOrders");
        console.log(allOrders.data);
    };

    useEffect(()=>{
        loadOrders();
    },[]);




    return (
      <div className='container'>
        <div className='py-4'>

            <table className="table table-stripped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

        </div> 
      </div>
    )

}