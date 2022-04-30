import React, { Component } from 'react';
import { variables } from './Variable';
import { Link, Boolean } from 'react-router-dom';
import { Card } from "react-bootstrap";
//import { variables } from './Components/Variable';

export class Medicine extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] }
    }

    refreshList() {
        fetch(variables.API_URL + 'Products/getAllMedicine')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    addtocart(id, amount, image) {
        fetch(`http://localhost:63831/api/CartItems/additemstocart/${id}/${localStorage.getItem("userid")}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: localStorage.getItem("userid"),
                productId: id,
                Qty: 1,
                image: image,
                amount: amount
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();

            }, (error) => {
                alert('Failed');
            })
    };
    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:63831/api/Products/deleteMedicineById/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
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
        let comp;
        const { deps } = this.state;
        var admin = localStorage.getItem('Admin');
        if (admin === "true") {
            comp = <Link to="/addmedicines" className='btn btn-primary'>Add New Medicine</Link>
        }
        return (
            <div className='Container py-4' style={{ width: "95%", margin: "auto" }}>
                 <h2 className="text-center mb-4">Medicine List</h2>
                    {comp}
                              
                <div className="row row-cols-1 row-cols-md-5 g-4 py-4">
                    {deps.map(dep =>
                        <div className="col" key={dep.productId}>
                            <div className="card text-center shadow" >
                                <img src={dep.imageUrl} className="card-img-center" height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">{dep.name}</h5>
                                    <h6 className="card-title">Rs {dep.price}</h6>
                                    { (admin === "true") ? (
                                        <>

                                                <Link to={`/ViewMedicine/${dep.productId}`} className="btn btn-primary">View</Link>
                                                <Link to={`/EditMedicine/${dep.productId}`} className="btn btn-outline-primary">Edit</Link>
                                                <Link to="/Medicine" className="btn btn-danger" onClick={() => this.deleteClick(dep.productId)}>Delete</Link>
                                        </>
                                    ) : (
                                    <>
                                               { dep.quantity ===0?(
                                                    <button className="btn btn-danger" disabled>Out of Stock</button>
                                               ):(
                                                <button className="btn btn-primary" onClick={() => this.addtocart(dep.productId,dep.price,dep.imageUrl)}>Add to Cart</button>
                                               )
                                               }
                                                
                                        </>    


                                    )

                                    }
                                </div>
                            </div>
                   
                        </div>
                                 )

                                }
            
            
                </div>
            </div>

          


        )
    }
}