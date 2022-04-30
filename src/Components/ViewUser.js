import React, { useState, useEffect } from "react";
import { variables } from './Variable';
import { useNavigate, useParams, Link } from "react-router-dom";

const ViewUser = () => {

    var userid = localStorage.getItem("userid");
    const [user, viewuser] = useState({
        firstName:"",
        lastName:"",
        password:"",
        isAdmin:false,
        dateOfBirth:"",
        phone:"",
        email:"",
        address:"",
        accountnumber:"",
        funds:""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        fetch(`http://localhost:63831/api/Users/getusersbyid/${userid}`)
            .then(response => response.json())
            .then(data => {
                viewuser(data);
            });
    };
    return (
        <div className="container py-4 border shadow">
            <h1 className="display-4">User Id: {userid}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">First name: {user.firstName}</li>
                <li className="list-group-item">Last name: {user.lastName}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Password: {user.password}</li>
                <li className="list-group-item">Date of Birth: {user.dateOfBirth}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">Address: {user.address}</li>
                <li className="list-group-item">Account Number: {user.accountnumber}</li>
                <li className="list-group-item">Funds: {user.funds}</li>
            </ul>
        </div>
    );
};

export default ViewUser;