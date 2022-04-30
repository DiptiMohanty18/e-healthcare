import React, { useState, useEffect } from "react";
import { variables } from './Variable';
import { useNavigate, useParams, Link } from "react-router-dom";

const AddFunds = () => {

    var userid = localStorage.getItem("userid");
    let navigate = useNavigate();
    const [user, viewuser] = useState({
        firstName: "",
        lastName: "",
        password: "",
        isAdmin: false,
        dateOfBirth: "",
        phone: "",
        email: "",
        address: "",
        accountnumber: "",
        funds: ""
    });

    const [fund, addfund] = useState({
        funds: ""
    });

    const OnInputChange = e => {
        addfund({ ...fund, [e.target.name]: e.target.value });

    };

    const { funds } = fund;
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
    const addfunds = async e => {
        await fetch(`http://localhost:63831/api/Users/AddFunds/${userid}/${fund.funds}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: userid,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                isAdmin: false,
                dateOfBirth: user.dateOfBirth,
                phone: user.phone,
                address: user.address,
                accountnumber: user.accountnumber,
                funds: fund.funds
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                navigate("/viewuser");

            }, (error) => {
                alert('Failed');

            })
    };

    return (
        <div className="container py-4 border shadow">
            <h1 className="display-4">User Id: {userid}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">First name: {user.firstName}</li>
                <li className="list-group-item">Last name: {user.lastName}</li>
                <li className="list-group-item">Account Number: {user.accountnumber}</li>
                <li className="list-group-item">Funds: {user.funds}</li>
            </ul>
                <form className="py-4">
                <h5>Enter the Payment Details:</h5>
                <div className="form-row">
                    <div className="col-md-6 mb-2">
                     
                        <input type="text" className="form-control" id="validationCustom03" placeholder="Card Number XXXX-XXXX-XXXX" required/>
                       
                    </div>
                    <div className="col-md-2 mb-2">
                        
                        <input type="text" className="form-control" id="validationCustom04" placeholder="ExpireDate" required/>
                           
                    </div>
                    <div className="col-md-2 mb-2">
                       
                        <input type="Password" className="form-control" id="validationCustom05" placeholder="CVV" required/>
                            
                    </div>
                    <div className="col-md-2 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Fund"
                        required
                        name="funds"
                        value={funds}
                        onChange={e => OnInputChange(e)}
                    />
                    </div>
                </div>
            </form>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={(e) => addfunds(e)}>Add Funds</button>
            </div>
        </div>
    );
};

export default AddFunds;