import React from 'react'
import cx from 'classnames'

// components
import Header from '../../components/adventureAwaits/header'

// css
import MainCSS from '../../style/main.module.css'
import UtilsCSS from '../../style/utilities.module.css'
import StyleCSS from './style.module.css'

export default function Index() {
    return (
        <div className={cx(StyleCSS.grid__container)}>
            <div className={cx(StyleCSS.grid__header)}>
                <Header />
            </div>
            <div className={cx(StyleCSS.grid__nav_one)}>
                <span>REFIT on the ROAD</span>
                <span>WebWorkx</span>
            </div>

        </div>
    )
}
