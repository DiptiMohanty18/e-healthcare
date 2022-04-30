import React, { useState } from "react";
import { variables } from './Variable';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setuser] = useState({
    firstName:"",
    lastName:"",
    password:"",
    isAdmin:false,
    dateOfBirth:"",
    phone:"",
    email:"",
    address:""
  });

  const { firstName, lastName, password, isAdmin, dateOfBirth, phone,email, address} = user;
  const OnInputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    await fetch(variables.API_URL+'Users/Signup',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            isAdmin:false,
            dateOfBirth:user.dateOfBirth,
            phone:user.phone,
            address:user.address,
            accountnumber:"A00000" + user.firstName.toUpperCase(),
            funds:1000
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        navigate("/");
        
    },(error)=>{
        alert('Failed');
        navigate("/signup");
    })
  };
  return (
    <div className="container py-4">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Create Account</h2>
                    <form>
                        <div className="py-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2' style={{color:"grey"}}>
                            <label>Date of Birth: <input
                                style={{color:"grey"}}
                                type="datetime-local"
                                className="form-control form-control-lg"
                                placeholder="Date of Birth"
                                name="dateOfBirth"
                                value={dateOfBirth}
                                onChange={e=>OnInputChange(e)}
                            /></label>
                        </div>
                       
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Phone"
                                name="phone"
                                value={phone}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Address"
                                name="address"
                                value={address}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" onClick={(e)=>onSubmit(e)}>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
  );
};

export default Signup;