import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate, useParams, Link } from "react-router-dom";

const Navigation = () => {

    let navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem('userloggedin');
        localStorage.removeItem('userid');
        localStorage.removeItem('Admin');
        localStorage.removeItem('lastname');
        //alert("Logged out Successfully");
        navigate("/");
    }

    var loggedin;
    const username = localStorage.getItem('userloggedin');
    const last_name = localStorage.getItem('lastname');
    var admin = localStorage.getItem('Admin');

    if (username === null) {
        loggedin = false;
    }
    else {
        loggedin = true;
    }
    return (

        <Navbar className="color-nav" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink to="/" className="nav-link px-2 text-white">EHealthCare</NavLink>
                    <NavLink to="/" className="nav-link px-2 text-white">Home</NavLink>
                    {loggedin ? (
                        <NavLink to="/Medicine" className="nav-link px-2 text-white">Medicine</NavLink>
                    ) : (<div></div>)}
                    {(admin === "true") ? (
                        <> <NavLink to="/Reports" className="nav-link px-2 text-white">Reports</NavLink>
                            <NavLink to="/userlist" className="nav-link px-2 text-white">UserInfo</NavLink>
                        </>
                    ) : (<>
                        <NavLink to="/About" className="nav-link px-2 text-white">About</NavLink>
                        <NavLink to="/Contact" className="nav-link px-2 text-white">Contact</NavLink>
                        </>
                    )}
                    
                </Nav>

                {loggedin ? (<>
                    <Nav className="justify-content-end" style={{ width: "64%" }}>
                        <NavDropdown title={
                            <span className="text-white my-auto">Hi {username}</span>
                        }>
                            <NavDropdown.Item className="dropdown text-white">
                                <NavLink to="/viewuser" className="nav-link">{username} {last_name}</NavLink>
                            </NavDropdown.Item>
                            {(admin === "true") ? (
                                <NavDropdown.Item className="dropdown">
                                    <NavLink to="/viewuser" className="nav-link" >See your Profile</NavLink>
                                </NavDropdown.Item>
                            ) :
                                (
                                    <> <NavDropdown.Item className="dropdown">
                                        <NavLink to="/viewuser" className="nav-link" >See your Profile</NavLink>
                                    </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/edituser" className="nav-link">Edit Profile</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/addfunds" className="nav-link" >Add Funds</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/Orders" className="nav-link" >Your Orders</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </>
                                )

                            }


                            <NavDropdown.Item className="dropdown">
                                <NavLink to="/" className="nav-link" onClick={() => logout()}>Logout</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {(admin === "true") ? (
                            <div></div>
                        ) : (
                            <NavLink to="/Cart" className="nav-link px-2 text-white">Cart</NavLink>
                        )}
                    </Nav>
                </>
                ) : (
                    <>
                        <Nav className="justify-content-end" style={{ width: "75%" }}>
                            <NavLink to="/adminlogin" className="nav-link px-2 text-white">Admin Login</NavLink>
                            <NavLink to="/login" className="nav-link px-2 text-white">User Portal</NavLink>
                        </Nav>
                    </>
                )
                }


            </Navbar.Collapse >
        </Navbar >
    )

}

export default Navigation;