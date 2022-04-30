import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {

    let navigate = useNavigate();
    const [user, setuser] = useState({
        deps: [],
        firstName: "",
        lastName: "",
        password: "",
        isAdmin: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        address: ""
    });

    const { firstName, lastName, password, isAdmin, dateOfBirth, phone, email, address } = user;

    const OnInputChange = e => {
       
        setuser({ ...user, [e.target.name]: e.target.value });

    };

    const login = async e => {
        if(user.email === '' || user.password === '')
        {
           
            alert("Fields are Mandatory!");
           
        }
        else{
        await fetch(`http://localhost:63831/api/Users/getusers/${email}`)
            .then(response => response.json())
            .then((result) => {
                setuser(result);
                if (result.isAdmin === Boolean(true) && result.password === password) {
                    localStorage.setItem('userloggedin', (result.firstName));
                    localStorage.setItem('lastname', (result.lastName));
                    localStorage.setItem('userid', (result.userId));
                    localStorage.setItem('Admin', (result.isAdmin));
                    //alert("Admin Loggedin Successfully");
                    navigate("/");
                    window.location.reload(true);
                }
                else {
                    alert("Not an Admin!. Please use valid Credentials");
                    navigate("/adminlogin");
                    window.location.reload(true);
                }
            }, (error) => {
                alert('Failed');
            });
        }
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Admin Login</h2>
           <form>
                    <div className="input-group has-validation py-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            
                            name="email"
                            value={email}
                            onChange={e => OnInputChange(e)}
                            required/>
                    </div>
                    <div className='input-group has-validation py-2'>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={(e) =>login(e)}>Login</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AdminLogin;