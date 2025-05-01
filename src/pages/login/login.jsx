import "./login.css";
import React from 'react'
import { Login_Image } from "../../assets/images"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TextInput from "../../components/textField";
import { Button } from "@mui/material";
import RememberMeSwitch from "../../components/switch";
const Login = () => {
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={Login_Image} alt="Login" className="login-image" />
                <div className="image-text">
                    <div className="image-text-1">
                        INSPIRED BY THE FUTURE:
                    </div>
                    <div className="image-text-2">
                        THE VISION UI DASHBOARD
                    </div>

                </div>
            </div>
            <dvi className="login-form-container">

                <div className="login-form-header">
                    <h1 className="heading">Welcome Back!</h1>
                    <p className="login-heading-subtext">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
                <div className="login-form">
                    <TextInput label={"Name"} value={"name"} />
                    <TextInput label={"Email"} value={"email"} />
                    <TextInput label={"Password"} value={"password"} />
                    <div className="login-form-footer">
                        <RememberMeSwitch />
                    </div>

                    <Button style={{ backgroundColor: "#0075FF" }} className="custom-login-button" variant="contained">Sign up</Button>
                </div>




            </dvi>
        </div>
    )
}

export default Login
