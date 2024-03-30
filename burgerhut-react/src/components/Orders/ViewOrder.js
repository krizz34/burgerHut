import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewOrder() {

    const {orderId} = useParams();

    const [order, setOrder] = useState({
        orderTitle : "",
        extras : "",
        userMob : "",
        status : ""
    })

    const loadOrderDetails = async () => {
        const OrderDetailsInstance = await axios.get(`http://localhost:8080/selectOrder/${orderId}`);
        setOrder(OrderDetailsInstance.data )
    }

    useEffect(() => {
        loadOrderDetails();
    }, []);



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Order Details</h2>

          <div className="card bg-white">
            <div className="card-header">
              <h3> Order No. : {orderId} </h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Combo Title: </b>
                  {order.orderTitle}
                </li>
                <li className="list-group-item">
                  <b>Extras: </b>
                  {order.extras}
                </li>
                <li className="list-group-item">
                  <b>Order Status: </b>
                  {order.status}
                </li>
                <li className="list-group-item">
                  <h6>Customer contact: {order.userMob}</h6>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-dark my-2" to={"/listOrder"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}