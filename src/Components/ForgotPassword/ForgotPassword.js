import React from "react";
import "./forgot.css"
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="forgotPage">
            <img 
                className="imageOfPage" 
                src="https://windmill-dashboard-react.vercel.app/static/media/forgot-password-office.ac5c499b.jpeg" 
                alt="forgot-password-image" 
            />
            <div>
                <h3>Forgot Password</h3>
                <label className="email">Email</label>
                <input type="email" placeholder="Vip Systum" id="email-input" />
                <Link to="/"> <button className="btn-recover">Recover password</button>  </Link>
            </div>
        </div>
    );
}