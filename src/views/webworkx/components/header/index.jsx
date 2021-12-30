import React from 'react'

// components
import Logo from '../../images/logo2.png'

export default function Index() {
    return (
        <div className='grid-container border-bottom mx-3'>
            <div className='grid-col-span-2'>
                <img src={Logo} alt="" width="100px" />
            </div>
            <div className='grid-col-span-4 grid-vertical-center grid-horizontal-end d-grid d-sm-none'>
                <ul className='ul-menu-row gap-3'>
                    <li>Menu</li>
                    <li><span className="btn btn-orange">Contact Me</span></li>
                </ul>
            </div>
            <div className="d-none d-sm-grid grid-horizontal-end grid-col-span-4">
                <ul className="ul-menu-row gap-3">
                    <li>Scope</li>
                    <li>Builds</li>
                    <li>Philosophy</li>
                    <li>About Me</li>
                    <li><span className="btn btn-orange">Contact Me</span></li>
                </ul>
            </div>
        </div>
    )
}
