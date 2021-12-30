import React from 'react'

// components
import Header from '../components/header'
import Scope from '../components/scope'

export default function Index() {
    return (
        <div>
            <Header />
            <div className="grid-container">
                <Scope />
            </div>
        </div>
    )
}
