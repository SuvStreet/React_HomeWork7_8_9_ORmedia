import React from "react";

import icon from "./error_404.png";

import "./erorr-not-found-page.module.css";

const ErorrNotFoundPage = () => {
    return (
        <div className="erorr-not-found-page">
            <img src={icon} alt="error_404" />
        </div>
    )
}

export default ErorrNotFoundPage;