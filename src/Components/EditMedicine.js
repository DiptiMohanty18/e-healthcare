import React, { useState, useEffect } from "react";
import axios from "axios";
import { variables } from './Variable';
import { useNavigate, useParams } from "react-router-dom";

const EditMedicine = () => {

  let navigate = useNavigate();
  const { id } = useParams();
  const [med, setmed] = useState({
    name:"",
    companyName:"",
    imageUrl:"",
    uses:"",
    price:"",
    quantity:"",
    expireDate:""
  });

  const { name, companyName, imageUrl, uses, price, quantity,expireDate } = med;

  const OnInputChange = e => {
    setmed({...med, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    await fetch(variables.API_URL+'Products/updateMedicine',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            productId:id,
            name:med.name,
            CompanyName:med.companyName,
            imageurl:med.imageUrl,
            Uses:med.uses,
            Price:med.price,
            Quantity:med.quantity,
            expireDate:med.expireDate
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        navigate("/Medicine");
        
    },(error)=>{
        alert('Failed');
    })
  };

  const loadUser = async () => {
    fetch(`http://localhost:63831/api/Products/getMedicineById/${id}`)
    .then(response => response.json())
    .then(data => {
        setmed(data);
    });
  };
  
  return (
    <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit Medicine</h2>
                    <form>
                        <div className="py-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Product Name"
                                name="name"
                                value={name}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Company Name"
                                name="companyName"
                                value={companyName}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Image Url"
                                name="imageUrl"
                                value={imageUrl}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Uses of Product"
                                name="uses"
                                value={uses}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Price"
                                name="price"
                                value={price}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Quantity"
                                name="quantity"
                                value={quantity}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Expire Date"
                                name="expireDate"
                                value={expireDate}
                                onChange={e=>OnInputChange(e)}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-warning" type="button" onClick={(e)=>onSubmit(e)}>Update Medicine</button>
                        </div>
                    </form>
                </div>
            </div>
  );
};

export default EditMedicine;