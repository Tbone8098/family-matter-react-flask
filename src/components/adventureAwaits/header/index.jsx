import React from 'react'
import cx from 'classnames'

// images
import Logo from '../../../images/logos/logo_url_white.png'

// css
import UtilsCSS from '../../../style/utilities.module.css'
import MainCSS from '../../../style/main.module.css'

export default function Index() {
    return (
        <div className={cx(UtilsCSS.grid__container, UtilsCSS.bg__primary__dark, UtilsCSS.txt__accent, UtilsCSS.py__3)}>
            <div className={cx(UtilsCSS.grid__start__2, UtilsCSS.grid__col__span__4, UtilsCSS.grid__sm__col__span__6, UtilsCSS.grid__sm__start__1, UtilsCSS.grid__center__center)}>
                <div className={cx(UtilsCSS.d__flex, UtilsCSS.align__items__center, UtilsCSS.my__3, UtilsCSS.w__100)}>
                    <img src={Logo} alt="the adventure awaits logo" width="100px" />
                    <h1 className={cx(UtilsCSS.ps__3)}>The Adventure Awaits</h1>
                </div>
            </div>
        </div>
    )
}
