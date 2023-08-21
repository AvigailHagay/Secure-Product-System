import React from 'react';
import {Link} from "react-router-dom";
import "../style/css/NoPage.css";

const NoPage = () => {
    return (
        <div style={{ height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>404 Page Not Found</h2>
            <Link to="/"><button className="btn mt-4 mb-4">Go To The Main Page</button></Link>
        </div>
    );
}

export default NoPage;