import React from "react";
import { Formik } from "formik";
import swal from 'sweetalert2';
import './Register.css';

const Register = () => {
  const RegisterSubmit = async (formdata,{resetForm}) => {
    console.log(formdata);
  

    const response = await fetch('http://localhost:5000/user/register', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      swal.fire({
        icon : 'success',
        title : 'Register successfully'
      })
      resetForm();
    }else if(response.status === 401){
      console.log("Login failed");
      swal.fire({
        type: 'error',
    title: 'Oops...',
    text: 'Login failed!',
    footer: '<a href="">Why do I have this issue?</a>'
      })
    }else{
      console.log('unknown error ocuured');
    }
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    onSubmit={RegisterSubmit}
                  >
                    {({ values, handleChange, handleSubmit }) => {
                      return (
                        
                        <form onSubmit={handleSubmit}>
                          <div className=" mb-4">
                          <label
                              className="form-label"
                              htmlFor="form3Example1cg"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="username"
                              value={values.username}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className="mb-4">
                          <label
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className=" mb-4">
                          <label
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className=" mb-4">
                          <label
                              className="form-label"
                              htmlFor="form3Example4cdg"
                            >
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cdg"
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example3cg"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3g"
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-body">
                                <u>Terms of service</u>
                              </a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mt-3">
                            <button 
                              type="Register"
                              className="btn btn-success btn-block mt-3 btn-lg gradient-custom-4 text-body"
                            >
                              Register
                            </button>
                          </div>
                          <p className="text-center text-muted mt-4 mb-0">
                            Have already an account?{" "}
                            <a href="/login" className="fw-bold text-body">
                              <u>Login here</u>
                            </a>
                          </p>
                        </form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
