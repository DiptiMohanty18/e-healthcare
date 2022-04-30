import React, { Component } from 'react';
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import about3 from '../images/about3.jpg'

export class About extends Component {
    render() {
        return (
            <div>
                <div className='py-4' style={{ width: "90%", margin: "auto" }}>
                    <div>
                        <div className="row no-gutters">
                            <div className="col-md-4 py-4">
                                <h1 className='h-25' style={{ textAlign: "center" }}>WHO ARE WE</h1>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <img className="w200" src={about3} />
                    </div>
                    <div className='py-4'>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                               
                                    <div className="card-body">
                                        <h1 style={{ textAlign: "center", fontFamily: "Brush Script MT,Cursive " }}><b><i>“When we strive to become better than we are, everything around us becomes better too.”<br />----Paulo Coelho</i></b></h1>
                                    </div>
                                
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={about2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={about1} />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h1>THE TEAM</h1>
                                    <div className="card-body">
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}