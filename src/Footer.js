import React from 'react';
import Alert from 'react-bootstrap/Alert';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="main-footer mt-5">
            <div className="container">
                <div className="row boxfooter" >
                    <div className="col-md-2 boxfooter" >
                        <div className="footer-item success"></div>
                        
                        <div className="text">Done</div>
                    </div>
                    <div className="col-md-2 boxfooter" >
                        
                        <div className="footer-item danger"></div>
                        <div className="text">Not started</div>
                    </div>
                    <div className="col-md-2 boxfooter" >
                        
                        <div className="footer-item warning"></div>
                        <div className="text">In progress</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;