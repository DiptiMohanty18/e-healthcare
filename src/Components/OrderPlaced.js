import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class OrderPLaced extends Component {

    render(){
        return(
            <div className='text-center py-4' style={{ width: "90%", margin: "auto" }}>
                
                     <h2 className="text-center mb-4">Your Order Placed Successfully.</h2>
                     <button className='btn btn-primary btn1'><NavLink to="/OrderPLaced" className="nav-link px-2 text-white">Continue Shopping</NavLink></button>
                     <button className='btn btn-primary btn1'><NavLink to="/Orders" className="nav-link px-2 text-white">Track Orders</NavLink></button>
            </div>
        )
    }
}
