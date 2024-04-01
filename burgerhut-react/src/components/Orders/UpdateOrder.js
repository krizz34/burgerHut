import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Await, Link, useNavigate, useParams } from 'react-router-dom';


export default function UpdateOrder() {

    let navigateTo = useNavigate();
    const {orderId} = useParams();

    const [order, setOrder] = useState({
        orderTitle : "",
        extras : "",
        userMob : "",
        status : ""
    })

    const{orderTitle, extras, userMob, status} = order

    const onInputChange = (e) => {
        setOrder({
            ...order,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(order);
        await axios.put(`http://127.0.0.1:8080/updateOrder/${orderId}`, order);
        navigateTo("/listOrder");
    }

    const loadOrderDetails = async () => {
        const OrderDetailsInstance = await axios.get(`http://localhost:8080/selectOrder/${orderId}`);
        setOrder(OrderDetailsInstance.data )
    }

    useEffect(() => {
        loadOrderDetails();
    }, []);



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-2'>Update Order</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="orderTitle" className="form-label">Combo Title:</label>
                        <select className="form-select" id="orderTitle" required name='orderTitle' value={orderTitle} onChange={(e)=>onInputChange(e)}>
                            <option selected >-select-</option>
                            <option value="Hut Chicken Combo">Hut Chicken Combo</option>
                            <option value="Hut Veggi Combo">Hut Veggi Combo</option>
                            <option value="Hut Beef Combo">Hut Beef Combo</option>
                            <option value="Hut Beef Combo">Hut Paneer Combo</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="extras" className="form-label">Extras:</label>
                        <select className="form-select" id="extras" required name='extras' value={extras} onChange={(e)=>onInputChange(e)}>
                            <option selected >-select-</option>
                            <option value="Extra Cheese">Extra Cheese</option>
                            <option value="Coke 250ml">Coke 250ml</option>
                            <option value="Fries">Fries</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userMob" className="form-label">User Contact:</label>
                        <input type="tel" className="form-control" id="userMob" placeholder="000-000-0000" required name='userMob' value={userMob} onChange={(e)=>onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Order Status: </label>
                        <select className="form-select" id="status" required name='status' value={status} onChange={(e)=>onInputChange(e)}>
                            <option selected >-select-</option>
                            <option value="preparing" >Preparing</option>
                            <option value="ready">Ready</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/" className="btn btn-outline-danger mx-2">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
