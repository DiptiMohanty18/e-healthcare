import React, { useState } from "react";
import { variables } from './Variable';
import { useNavigate } from "react-router-dom";

const AddMedicine = () => {
  let navigate = useNavigate();
  const [med, addmed] = useState({
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
    addmed({ ...med, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
      if(med.name==='' ||med.companyName === '' || med.imageUrl===''||med.uses===''||med.price===''||med.quantity===''||med.expireDate==='')
      {
        alert("Fields are Mandatory!");
      }
      else{
    await fetch(variables.API_URL+'Products/addMedicine',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
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
}
  };
  return (
    <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add Medicine</h2>
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
                            <label style={{color:"grey"}}>Expire Date: 
                            <input
                                type="datetime-local"
                                style={{color:"grey"}}
                                className="form-control form-control-lg"
                                placeholder="Enter the Expire Date"
                                name="expireDate"
                                value={expireDate}
                                onChange={e=>OnInputChange(e)}
                            /></label>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" onClick={(e)=>onSubmit(e)}>Add Medicine</button>
                        </div>
                    </form>
                </div>
            </div>
  );
};

export default AddMedicine;