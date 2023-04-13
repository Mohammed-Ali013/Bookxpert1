import React, { useState } from "react";
import "./Footer.css";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      localStorage.setItem("loggedIn", true);
      alert("Login Successful!");
      navigate('/aboutus');
      
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
    {/* {isLoggedIn ? (

    )
    } */}
        <div className="container-login mt-3 mb-3">
      <div className="row-login">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header fs-3 text-center bg-primary">Login</div>
            {/* {msg && <p className='fs-2 text-center text-success'>{msg}</p>} */}
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <input
                    required
                    type="text"
                    placeholder=" Enter Email"
                    name="email"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={loginData.email}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={loginData.password}
                  />
                </div>

                <div className="btn-div">
                  <button className="btn btn-success col-md-12">Submit</button>{" "}
                  <br />
                  <button className="btn col-md-12 fs-5 " type="submit">
                    <Link to="/registerform">Register</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Login;
