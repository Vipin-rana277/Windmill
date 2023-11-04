import React from "react";
import "./dashboard.css";
import Footer from "./Footer";
import DashboardChart from "./DashboardChart";
import user from "../Images/user.png";
import playing from "../Images/playing.png";
import shopping from "../Images/shopping.png";
import information from "../Images/information.png";


export function Data() {
    return (
        <>
            <div className="box">
                <div className="box-child">
                    <div className="box-innerside">
                        <div><img style={{ width: 25 }} src={user} alt="user-image" /></div>
                        <div><p>Total Clients</p><p><b>6389</b></p></div>
                    </div>

                </div>
                <div className="box-child">
                    <div className="box-innerside">
                        <div><img style={{ width: 25 }} src={playing} alt="playing" /></div>
                        <div><p>Account balance </p><p><b>$46,760.89</b></p></div>
                    </div>
                </div>
                <div className="box-child">
                    <div className="box-innerside">
                        <div><img style={{ width: 25 }} src={shopping} alt="playing" /></div>
                        <div><p>New sales</p><p><b>376</b></p></div>
                    </div>
                </div>
                <div className="box-child">
                    <div className="box-innerside">
                        <div><img style={{ width: 25 }} src={information} alt="playing" /></div>
                        <div><p>Pending contacts</p><p><b>35</b></p></div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default function Main() {
    return (
        <>
            <h2>Dashboard</h2>
            <Data/>
            <Footer />
            <DashboardChart />
        </>
    );
}
