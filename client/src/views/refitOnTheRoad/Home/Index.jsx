import React from 'react'

// images
import Logo from '../../../images/logos/logo_url_white.png'
import REFITLogo from '../../../images/refitOnTheRoad/refit_icon.svg'

export default function index() {
    return (
        <div>
            <div className="header py-2 px-3 bg-black txt-white d-flex justify-content-between align-items-center">
                <div>
                    <img src={Logo} alt="" width="75px" />
                    <img src={REFITLogo} alt="" width="75px" />
                </div>
                <div>
                    <ul className="ul-row-menu">
                        <li>About Me</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <link rel="stylesheet" href="" />
                </div>
            </div>
        </div>
    )
}


