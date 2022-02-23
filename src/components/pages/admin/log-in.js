import React from "react";
import "./log-in.css";
import Utils from "../../utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const LogIn = ({ setIsLoged }) => {
  const utils = new Utils();

  async function checkAdminAccess(auth, email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("firebase response ", userCredential.user.uid);
      if (userCredential.user.uid === "Z3cjcf1qNNUAnVm6JuJgF2MjdOc2") {
        setIsLoged(true);
      } else {
        alert("no esta autorizado");
      }
    } catch (error) {
      console.log(error);
      alert("no esta autorizado");
    }
  }

  const onSumbitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (email == "" || !utils.checkEmail(email)) {
      return;
    }
    const password = e.target.password.value;
    if (password == "") {
      return;
    }

    checkAdminAccess(auth, email, password);
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div class="container d-flex justify-content-center ">
      <div class="row">
        <div class="card my-5">
          <form
            class="card-body cardbody-color p-lg-5"
            onSubmit={(e) => {
              onSumbitHandler(e);
            }}
          >
            <div class="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px"
                alt="profile"
              />
            </div>

            <div class="mb-3">
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="Admin email"
              />
            </div>
            <div class="mb-3">
              <input
                name="password"
                type="password"
                class="form-control"
                placeholder="Admin password"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary px-5 mb-5 w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
