import React, { Component } from 'react';
import { variables } from './Variable';
import { Link, Boolean } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { variables } from './Components/Variable';

export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], meds: [] }
    }



    refreshList() {
        fetch(variables.API_URL + `CartItems/getcartitembyusers/${localStorage.getItem("userid")}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
                const total = data.reduce((prev,current)=>prev + current.amount,0);
                localStorage.setItem("total",total);
            });
            
       
    }

    componentDidMount() {
        this.refreshList();
    }

    addquantity(id, image, amount) {
        fetch(`http://localhost:63831/api/CartItems/additemstocart/${id}/${localStorage.getItem("userid")}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({

            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.refreshList();
                

            }, (error) => {
                alert('Failed');

            })
    };
    deletequantity(id, image, amount) {
        fetch(`http://localhost:63831/api/CartItems/deleteitemfromcart/${id}/${localStorage.getItem("userid")}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({

            })
        })
            .then(res => res.json())
            .then((result) => {
               //alert(result);
                this.refreshList();
                

            }, (error) => {
                alert('Failed');

            })
    };
    deleteitem(id) {
        if (window.confirm('Are you sure?')) {
        fetch(`http://localhost:63831/api/CartItems/deleteitem/${id}/${localStorage.getItem("userid")}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({

            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
                

            }, (error) => {
                alert('Failed');

            })
        }
    };
    render() {
        const { deps } = this.state;
        return (
            <div className='py-4' style={{ width: "90%", margin: "auto" }}>
                {deps.length === 0 ?(<div className='text-center'>
                     <h2 className="text-center mb-4">Your Cart is Empty. Please Click on Continue Shopping button!!!</h2>
                     <button className='btn btn-primary btn2'><NavLink to="/Medicine" className="nav-link px-2 text-white">Continue Shopping</NavLink></button>
                </div>
                ):(
                <>
                <h2 className="text-center mb-4">Your Cart</h2>
                <div>
                    {deps.map(dep =>
                        <div className="py-2" key={dep.cartItemID}>
                            <div className=" border shadow row no-gutters">
                                <div className="col-md-4 py-4">
                                    <img src={dep.image} height="150" />
                                </div>
                                <div className="col-md-8 py-4" >
                                    <div className="card-body">
                                        <h5>Product ID: {dep.productID}</h5>
                                        <h5>Amount: Rs {dep.amount}</h5>
                                        <h5>
                                            <button className="btn btn-primary" type="button" onClick={() => this.addquantity(dep.productID, dep.amount, dep.image)}><b>+</b>
                                            </button> QTy: {dep.qty} <button className="btn btn-danger" type="button" onClick={() => this.deletequantity(dep.productID, dep.amount, dep.image)}><b>-</b></button>
                                            <button className="btn btn-danger float-end" type="button" onClick={() => this.deleteitem(dep.productID)}>Delete</button>
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <div className="Py-4 text-center">
                    <h4 className='py-4'>Total: Rs {deps.reduce((prev,current)=>prev + current.amount,0)}</h4>
                    <button className='btn btn-primary btn1'><NavLink to="/Medicine" className="nav-link px-2 text-white">Continue Shopping</NavLink></button>
                    <button className='btn btn-warning '><NavLink to="/checkout" className="nav-link px-2 text-white">Proceed to Checkout</NavLink></button>
                    
                </div>
                </>
                 )}
            </div>
           
               



        )
    }
}