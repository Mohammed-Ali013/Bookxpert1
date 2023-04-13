import React, { useState } from "react";
import './login.css'

const Contact = () => {
    const [contactData, setContactData] = useState({
        email: "",
        subject: "",
        name:"",
      });
    
    
      const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       console.log(contactData);
      };
    
  return (
    <div className='container-contact mt-3 mb-3'>
    <div className="row-cn">
        <div className="col-md-5 offset-md-4">
            <div className="card">
                <div className="card-header fs-3 text-center bg-primary">
                    Contact Us
                </div>
                {/* {msg && <p className='fs-2 text-center text-success'>{msg}</p>} */}
                <div className="card-body">
                    <form  onSubmit={(e)=>handleSubmit(e)}>
                     
                        <div className="mb-3">
                        <input required type="text" placeholder=" Enter Email" name="email" className='form-control' onChange={(e)=>handleChange(e)} value={contactData.email}/>
                       </div>

                        <div className="mb-3">
                        <input required type="text" placeholder="Enter Name" name="name" className='form-control' onChange={(e)=>handleChange(e)} value={contactData.name}/>
                        </div>
                      
                        <div className="mb-3 ">
                            <textarea id="" cols="70" rows="8"  placeholder="Enter Subject" name="subject" className='form-control' onChange={(e)=>handleChange(e)} value={contactData.subject}></textarea>
                       </div> 

                       <button className="btn btn-success col-md-12">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact