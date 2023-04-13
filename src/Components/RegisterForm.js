import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import "./login.css"
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    
  });
  const navigate =useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration Successful!");
    navigate('/login');
  };

  return (
    <div className='container-register mt-3 mb-3 '>
    <div className="row-register">
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-header fs-3 text-center bg-primary">
                    Register
                </div>
                <div className="card-body">
                    <form  onSubmit={(e)=>handleSubmit(e)}>
                       <div className="mb-3"> 
                        <input required type="text" placeholder=" Enter FirstName" name="firstName" className='form-control' onChange={(e)=>handleChange(e)} value={formData.firstName} />
                       </div>

                        <div className="mb-3">
                        <input required type="text" placeholder="Enter LastName" name="lastName" className='form-control' onChange={(e)=>handleChange(e)} value={formData.lastName} />
                       </div>

                        <div className="mb-3">
                        <input required type="text" placeholder=" Enter Email" name="email" className='form-control' onChange={(e)=>handleChange(e)} value={formData.email}/>
                       </div>

                        <div className="mb-3">
                        <input required type="password" placeholder="Enter Password" name="password" className='form-control' onChange={(e)=>handleChange(e)} value={formData.password}/>
                       </div> 

                       <div className="btn-div">
                       <button className="btn btn-success col-md-12">Submit</button> <br />
                       <button className="btn col-md-12 fs-5 "  type="submit"><Link to="/login">Login</Link></button>
                       </div>

                

                    </form>
                </div>
            </div>
        </div>
    </div>

</div>

  );
};

export default RegisterForm;
