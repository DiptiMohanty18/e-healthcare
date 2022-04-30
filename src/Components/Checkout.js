import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = { carts: [], users: [] }
    }

    refreshList() {

        fetch(`http://localhost:63831/api/CartItems/getcartitembyusers/${localStorage.getItem("userid")}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ carts: data });
            });

    }
    componentDidMount() {
        this.refreshList();
    }

    proceedtobuy(cartvalues) {
       
        var total = parseFloat(localStorage.getItem("total"));

        fetch( `http://localhost:63831/api/Users/EditFunds/${localStorage.getItem("userid")}/${total}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then((result) => {
                if(result === "Insufficient funds. Please add funds to proceed")
                {
                    alert(result);

                }
                else{
                    fetch(`http://localhost:63831/api/Orders/Addtoorders`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartvalues)
            })
                .then(res => res.json())
                .then((result) => {
                    //alert(result);
                    this.refreshList();

                }, (error) => {
                    alert('Failed');

                })

           
                }
            }, (error) => {
                alert('Failed');

            })
            fetch(`http://localhost:63831/api/CartItems/Orderplacedsuccessfully/${localStorage.getItem("userid")}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                   if(result === "Items deleted once Order placed Successfully")
                   {
                       // navigate("/Medicine");
                   }
                   else{
                       alert("Please try again. Order not Placed");
                   }
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
                

    }

    render() {

        const { carts } = this.state;
        return (
            <div className='container py-4'>
                <div className="border shadow py-4">
                    <h2 className="text-center mb-4">Check Out</h2>
                    <div className='py-4 ' style={{ width: "90%", margin: "auto" }}>
                        <h4 className="mb-3">Billing address</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="you@example.com" />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="1234 Main St" required />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Apartment or suite" />
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" placeholder="Country" required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" placeholder="State" required />
                                </div>
                                <div className="col-md-4 mb-3">

                                    <input type="text" className="form-control" placeholder="Zip" required />

                                </div>
                            </div>
                            <hr />
                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                    <label className="custom-control-label">Wallet</label>
                                </div>
                            </div>

                            <hr className="mb-4"></hr>
                            <button className="btn btn-warning btn-lg btn-block" type="button" onClick={() => this.proceedtobuy(carts)}><NavLink to="/OrderPLaced" className="nav-link px-2 text-black">Proceed to Buy</NavLink></button>
                        </form>
                    </div>


                </div>
            </div >

        )
    }
}



