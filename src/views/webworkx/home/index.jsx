import React from 'react'

import {CSS} from '../css/style.module.css'

// components
import Header from '../components/header'
import Scope from '../components/scope'

export default function Index() {
    return (
        <div>
            <Header />
            <div className="grid-container mx-5">
                <div className="grid-col-span-6">
                    <Scope />
                </div>
            </div>
        </div>
    )
}
