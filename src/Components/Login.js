import React, { useState, useEffect } from "react";
//import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    //const {register,handleSubmit,errors} = useForm();
    const [error, seterror] = useState({});
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
                if (result.isAdmin === Boolean(false) && result.password === password) {
                    localStorage.setItem('userloggedin',(result.firstName));
                    localStorage.setItem('lastname',(result.lastName));
                    localStorage.setItem('userid',(result.userId));
                    localStorage.setItem('Admin',(result.isAdmin));
                    //console.log(result.isAdmin);
                    //alert("Loggedin Successfully");
                    navigate("/");
                    window.location.reload(true);
                }
                else{
                        alert("Cant not login. Please enter valid credentials. If an Admin use Admin Login Page");
                        window.location.reload(true);
                }
            },(error)=>{
                alert('Failed');
            });
        }
        
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login </h2>
                <form>
                    <div className="py-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter the Email"
                            required
                            name="email"
                            value={email}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    
                    <div className='py-2'>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter the Password"
                            name="password"
                            value={password}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <span style={{color:"red"}}>{error.msg}</span>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={(e) => login(e)}>Login</button>
                    </div>
                    <div className="text-center py-4"><hr/>
                    <p><u>New to EHealthCare?</u></p><hr/>
                        <Link to="/Signup" className="btn btn-warning ">Create your EHealthCare Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;