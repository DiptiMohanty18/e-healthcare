import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import homepage1 from '../images/homepage1.jpg'
import homepage2 from '../images/homepage2.jpg'
import homepage3 from '../images/homepage3.jpg'
import imag1 from '../images/imag1.jpg'
import imag2 from '../images/imag2.jpg'
import imag3 from '../images/imag3.jpg'
import imag4 from '../images/imag4.jpg'
import { Link } from 'react-router-dom';

export class Home extends Component {

    render() {

        return (
            <div className="Container">
                <div>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="w100"
                                src={homepage1}
                                alt="First slide"

                            />
                            <Carousel.Caption>

                                <p>"Life is Journey... Enjoy the Ride"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="w100"
                                src={homepage2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>

                                <p>"Health is like money, we never have a true idea of its value until we lose it."</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w100"
                                src={homepage3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>

                                <p>"Your Body is your most priceless possession.Take Care of it."</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='py-4' style={{ width: "92%", margin: "auto" }}>
                    <div style={{ width: "92%", margin: "auto" }}>
                        <p className='ml-3'>
                            EHealthCare is a pioneer and one of the most integrated healthcare platforms that stitches together a comprehensive suite of healthcare offerings, to be accessed at the customer’s convenience. The health care services are delivered (a) virtually or (b) at the customer’s doorstep and / or (c) at a health or wellness centre - as needed.

                            EHealthCare leverages Technology, Knowledge, and Human Capital for delivering comprehensive patient-centric services – anytime, anywhere.

                            EHealthCare integrates all the components of the fragmented healthcare ecosystem and makes them accessible through the EHealthCare platform. We provide a single-point access to the customer and give them the power to choose from multiple alternatives as per their convenience across a broad spectrum of the health care eco-system.

                            Improving the access and ensuring the efficacy of healthcare outcomes - along with personalized medical records that are accessible anytime, anywhere - is what makes us stand apart from everyone else.
                        </p> </div>
                </div>

                <div className='py-4' style={{ width: "92%", margin: "auto" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={imag1} />
                                <div className="card-body">
                                    <h5 className="card-title">Our Doctors</h5>
                                    <p className="card-text">The attending physician is the leader of the team and has responsibility for all decisions made that affect a person's care, including diagnosis, treatments, and supervision of the remainder of the team.

                                        Based on the problem that brought the person to the hospital, the attending physician may be a hospitalist (a doctor who is trained in internal medicine and works only with people who are hospitalized), a surgeon, or another specialist physician. In smaller communities, the person's primary care doctor may act as the attending physician.
                                    </p>
                                    <Link to="/about" className="btn btn-primary">For Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={imag2} />
                                <div className="card-body">
                                    <h5 className="card-title">Medicines</h5>
                                    <p className="card-text">Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src={imag3} />
                                <div className="card-body">
                                    <h5 className="card-title">Health Check Ups</h5>
                                    <p className="card-text">Doing a regular body check-up can help doctors diagnose a disease before it poses high risk. Reduces the risk of complication during treatment – once you are diagnosed with a health condition at an early stage, the complexity and risk involved are less when compared to diagnosing at a very late stage.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={imag4} />
                                <div className="card-body">
                                    <h5 className="card-title">Research</h5>
                                    <p className="card-text">Research is essential to find out which treatments work better for patients. It plays an important role in discovering new treatments, and making sure that we use existing treatments in the best possible ways. Research can find answers to things that are unknown, filling gaps in knowledge and changing the way that healthcare professionals work. Some of the common aims for conducting research studies are to:

                                        Diagnose diseases and health problems
                                        Prevent the development or recurrence of disease and reduce the number of people who become ill
                                        Treat illness to improve survival rates or increase the number of people who are cured
                                        Improve the quality of life for people living with illness
                                        Research and clinical trials are an everyday part of the NHS. People being cared for in the NHS benefit from past research, and continue to benefit from research that is currently being carried out. Ultimately, high-quality clinical research helps the NHS to improve future healthcare.
                                    </p>
                                    <Link to="/Medicine" className="btn btn-primary">For Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}