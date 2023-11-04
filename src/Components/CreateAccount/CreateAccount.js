import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import { signUpPageData } from "../../utils/constant";

export default function CreateAccount() {
    return (
        <LoginPage pageData={signUpPageData} />
    );
}