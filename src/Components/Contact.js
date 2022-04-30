import React, { Component } from 'react';
import contact from '../images/contact.jpg'

export class Contact extends Component {
    render() {
        return (
            <div style={{ width: "92%", margin: "auto" }}>
                <div className='py-4' >
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className=" col py-4">
                            <div className="py-4">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Contact Us</h2>
                                        <form>
                                            <div className="py-2">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Name"

                                                />
                                            </div>
                                            <div className='py-2'>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className='py-2'>
                                                <textarea 
                                                    type="textarea"
                                                    className="form-control form-control-lg"
                                                    placeholder="Message"
                                                />
                                            </div>
                                            <div className="d-grid gap-2 col-6 mx-auto">
                                                <button className="btn btn-primary" type="button" >Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col py-4">
                            <div className=" card py-4">
                                <img src={contact} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}