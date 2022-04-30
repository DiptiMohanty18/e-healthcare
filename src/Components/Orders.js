import React, { Component } from 'react';
import { variables } from './Variable';
import { Link, Boolean } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { variables } from './Components/Variable';

export class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = { orders: [], meds: [] }
    }



    refreshList() {
        fetch(variables.API_URL + `Orders/orders/${localStorage.getItem("userid")}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ orders: data });
            });
            
       
    }

    componentDidMount() {
        this.refreshList();
    }

   
    render() {
        const { orders } = this.state;
        return (
            <div className='py-4' style={{ width: "90%", margin: "auto" }}>
                <h2 className="text-center mb-4">Your Orders</h2>
                <div>
                    {orders.map(order =>
                        <div className="py-2" key={order.orderID}>
                            <div className=" border shadow row no-gutters">
                                <div className="col-md-4 py-4">
                                    <img src={order.image} height="150" />
                                </div>
                                <div className="col-md-8 py-4" >
                                    <div className="card-body">
                                        <h5>Order Number: {order.ordernumber}</h5>
                                        <h5>Product ID: {order.productID}</h5>
                                        <h5>Quantity: {order.qty}</h5>
                                        <h5>Amount: Rs {order.amount}</h5>
                                        <h5>Placed On: {order.placedOn}</h5>
                                        <h5>Order Status: {order.orderStatus}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>



        )
    }
}