import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import UserProfile from "./UserImage";

export const Profile = ({ setIsLogged }) => {
  const logOut = () => {
    setIsLogged(false);
  };

  return (
    <>
      <div>
        <section className="vh-100 ">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="user-profile">
                          <UserProfile />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4"></div>
                    </div>
                    <div className="row">
                      <div>
                        <h5>Name</h5>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="firstname"
                            id="firstName"
                            className="form-control form-control-md"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="lastname"
                            id="lastName"
                            className="form-control form-control-md"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-4 d-flex align-items-center">
                        <div className="form-outline  w-100">
                          <h5>Date of Birth</h5>

                          <input
                            type="date"
                            name="email"
                            className="form-control form-control-md"
                            id="birthday"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 pb-2">
                        <div>
                          <h5>Religion</h5>
                        </div>
                        <select className="select form-control-md">
                          <option value="1" disabled>
                            Choose Religion
                          </option>
                          <option value="1">Hinduism</option>
                          <option value="2">Islam</option>
                          <option value="3">Sikhism</option>
                          <option value="4">Christianity</option>
                          <option value="5">Buddhism</option>
                          <option value="6">Jewish</option>
                          <option value="7">Zoroastrianism</option>
                        </select>
                      </div>
                      <div className="col-md-8  pb-2">
                        <div>
                          <h5>Height</h5>
                        </div>
                        <div className="form-outline">
                          <input
                            type="text"
                            name="height"
                            id="height"
                            className="form-control form-control-md"
                            placeholder="Height (in cm)"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button className="btn btn-lg" onClick={logOut}>
                        LOGOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    </>
  );
};

export default Profile;
