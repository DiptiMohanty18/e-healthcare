import React, { useState, useEffect } from "react";
import axios from "axios";
import { variables } from './Variable';
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

  let navigate = useNavigate();
  var userid = localStorage.getItem("userid");

  const [user, setuser] = useState({
    firstName:"",
    lastName:"",
    password:"",
    dateOfBirth:"",
    phone:"",
    email:"",
    address:"",
  });

  const { firstName, lastName, password, dateOfBirth, phone,email, address} = user;

  const OnInputChange = e => {
    setuser({...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
      console.log(user);
    await fetch('http://localhost:63831/api/Users/EditUser',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            userId:userid,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            isAdmin:false,
            dateOfBirth:user.dateOfBirth,
            phone:user.phone,
            address:user.address,
            accountnumber:user.accountnumber,
            funds:user.funds
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        navigate("/viewuser");
        
    },(error)=>{
        alert('Failed');
        
    })
  };

  const loadUser = async () => {
    fetch(`http://localhost:63831/api/Users/getusersbyid/${userid}`)
    .then(response => response.json())
    .then(data => {
        setuser(data);
    });
  };
  
  return (
    <div className="container py-4">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit User</h2>
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
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="DOB"
                                name="dateOfBirth"
                                value={dateOfBirth}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Phone Number"
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
                            <button className="btn btn-warning" type="button" onClick={(e)=>onSubmit(e)}>Update User</button>
                        </div>
                    </form>
                </div>
            </div>
  );
};

export default EditUser;