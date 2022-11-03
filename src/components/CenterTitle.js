import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";

const CenterTitle = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/aboutgsocmania`;
        navigate(path);
    }

    return (
        <div id="text_div center_all">
            <div className="center_all">
                <h3 style={{ color: "white", zIndex: "0", fontSize: "3rem", fontWeight: "400" }}>CSI <span>presents</span></h3>
                <h1 className="custom-subTitle">
                    GSOC Mania
                </h1>
                <div className="btn-container">
                    <button className="explore-btn" onClick={routeChange}>
                        Explore
                    </button>
                    <a href="https://pages.razorpay.com/pl_KbWga6Klhhljbi/view" target="_blank">
                        <button className="explore-btn">
                            Buy a Ticket
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CenterTitle;
