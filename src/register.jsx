import React, { memo, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate, Link } from "react-router-dom";

import { registerValidate } from "./helpers/validate.js";
import { convertToBase64 } from "./helpers/convert.js";
import { register } from "./helpers/request.js";
import "./css/style.css";


function Register() {
  const imageRef = useRef();
  const navigate = useNavigate();
  const imageHandler = (event) => {
    convertToBase64(event.target.files[0])
    .then(base64Image => {
      imageRef.current.src = base64Image;
      formik.setFieldValue("image", base64Image);
    })
    .catch(() => {
      toast.error("Failed to load image!")
    })
  }
  const formik = useFormik({
    initialValues: {
      image: "",
      username: "",
      phone: "",
      type: "buyer",
      password: "",
      cpassword: ""
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let responsePromise = register(values);
      toast.promise(responsePromise,{
        loading: "Registering...",
        success: (res) => {
          navigate("/login");
          return res.data.msg;
        },
        error: (res) => res.response.data.msg
      })
    }
  });
  return (
    <div className="register form-container">
      <Toaster position="top-center" />
      <h3>Register</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="avatar-container">
          <img src="/avatar.png" alt="avatar" ref={imageRef} />
          <label htmlFor="avatar">
            <span>
              <img src="/edit-icon.png" alt="edit icon" />
            </span>
          </label>
        </div>
        <input onChange={imageHandler} type="file" name="avatar" id="avatar" accept="image/*" /><br />
        <input {...formik.getFieldProps("username")} type="text" name="username" id="username" placeholder="username" /><br />
        <input {...formik.getFieldProps("phone")} type="tel" name="phone" id="phone" placeholder="phone" /><br />
        <select onChange={(event) => formik.setFieldValue("type", event.target.value)} name="type" id="type" placeholder="type" >
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
        </select><br />
        <input {...formik.getFieldProps("password")} type="password" name="password" id="password" placeholder="password" /><br />
        <input {...formik.getFieldProps("cpassword")} type="password" name="cpassword" id="cpassword" placeholder="confirm password" /><br />
        <input type="submit" value="register" />
        <p>Already have an account? <Link to={"/login"}>login</Link></p>
      </form>
    </div>
  )
}

export default memo(Register);









// import React,{useState,useEffect} from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";


// function App1(props){
//     const [login, setLogin]=useState(false);
//     const [profile, setProfile]=useState(false);
//     return(
//         <>
//             {!login?(
//                 <Register setLogin={setLogin}/>
//             ):(
//                 <login setProfile={setProfile}/>
//             )}       
//         </>
//     );
// }
// export default App1;

// function Register({setLogin}){
//         const navigate=useNavigate();
//     const register = () => {
//         let username = document.getElementById("username").value;
//         let password =document.getElementById("password").value;
//         let mobile =document.getElementById("mobile").value;
//         let response=axios.post("http://localhost:3000/register",{
//             username,
//             password,
//             mobile
//         });
//         response.then((res)=>{
//             alert(response.data);
//             if(res.status ==200){
//                 setLogin(true);
//             }navigate("/login")
//         })
//         .catch(error=>{
//             alert(response.data);
//             console.log(error);
//         });
//     };
//     return(
//         <>
//             <h2>Register</h2>
//     <input type="text" name="username" id="username" placeholder="username" />
//     <input type="password" name="password" id="password" placeholder="password" />
//     <input type="number" name="mobile" id="mobile" placeholder="mobile"/>
//     <input type="submit" value="register" onClick={register} />
//         </>
//     );
// }