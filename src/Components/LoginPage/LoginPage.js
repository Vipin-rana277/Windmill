import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
    const pageData = props.pageData;
    return (
        <div className="pageOfLogin">
            <img className="ImageOfLogin" src={pageData.image} alt={pageData.alternatetext} />
            <div className="login-box">
                <h3>{pageData.heading}</h3>
                <label className="label-email">Email</label>
                <input type="text" placeholder="vipsystum@gmail.com" id="email" />
                <label className="label-password">Password</label>
                <input type="password" placeholder="********" id="password" />
                <Link className="btn-login" to={pageData.pathNameOfButton}>{pageData.btn}</Link>
                <div><hr className="line" /></div>
                <button className="btn-github">GitHub</button>
                <button className="btn-twitter">Twitter</button>
                <Link className="aaa" to={pageData.pathName}>{pageData.firstlink}</Link>
                <Link className="aaa" to="/createaccount">{pageData.secondlink}</Link>
            </div>
        </div>

    );
}