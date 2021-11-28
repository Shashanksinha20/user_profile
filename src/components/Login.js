import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Login = ({setIsLogged}) => {

  const submitHandler = () => {
    setIsLogged(true);
  }
 
    return (
      <div class="body">
        <section class="vh-100">
          <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  class="card shadow-2-strong"
                  style={{ borderRadius: "15px" }}
                >
                  <div class="card-body p-4 p-md-5">
                    <h3
                      class="mb-4 pb-2 pb-md-0 mb-md-5"
                      style={{ textAlign: "center" }}
                    >
                      Login
                    </h3>
                    <form onSubmit = {submitHandler}>
                      <div class="row">
                        <div class="mb-4 d-flex align-items-center">
                          <div class="form-outline datepicker w-100">
                            <input
                              type="Email"
                              name="email"
                              class="form-control form-control-md"
                              id="em"
                              placeholder="Enter your username or email"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="mb-4 pb-2">
                          <div class="form-outline">
                            <input
                              type="password"
                              name="password"
                              id="pass"
                              class="form-control form-control-md"
                              placeholder="Enter the password"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn1 btn-lg">
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Login;