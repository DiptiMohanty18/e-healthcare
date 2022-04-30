import React, { useState, useEffect } from "react";
import axios from "axios";
import { variables } from './Variable';
import { useNavigate, useParams, Link } from "react-router-dom";

const ViewMedicine = () => {

    let navigate = useNavigate();
    const { id } = useParams();
    const [med, viewmed] = useState({
        name: "",
        companyName: "",
        imageUrl: "",
        uses: "",
        price: "",
        quantity: "",
        expireDate: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        fetch(`http://localhost:63831/api/Products/getMedicineById/${id}`)
            .then(response => response.json())
            .then(data => {
                viewmed(data);
            });
    };
    return (
        <div className="container py-4 border shadow">
            <Link className="btn btn-primary" to="/Medicine">
                back to Medicine
            </Link>
            <h1 className="display-4">Medicine Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Product name: {med.name}</li>
                <li className="list-group-item">Company name: {med.companyName}</li>
                <li className="list-group-item">Image: {med.imageUrl}</li>
                <li className="list-group-item">Price: {med.price}</li>
                <li className="list-group-item">Quantity: {med.quantity}</li>
                <li className="list-group-item">Uses: {med.uses}</li>
                <li className="list-group-item">Expire: {med.expireDate}</li>
            </ul>
        </div>
    );
};

export default ViewMedicine;