import React, {useState} from 'react'


// images
import Logo from '../../images/logos/logo_no_url_white.png'
import KendalREFIT from '../../images/refitOnTheRoad/kendal_refit.png'
import Sunrise from '../../images/adventureAwaits/sunrise_1.png'
import OR from '../../images/adventureAwaits/or.png'
import ORLogic from '../../images/adventureAwaits/or_logic_gate.png'

import { Link } from 'react-router-dom'

import Footer from '../../components/footer/Index'


export default function Index() {
    const [modal, setModal] = useState({
        comingSoon: false
    })
    const [orImg, setOrImg] = useState(true)

    const toggleModal = (myModal) => {        
        let copyModal = {...modal}
        copyModal[myModal] = !copyModal[myModal]
        setModal(copyModal)
        console.log(modal[myModal]);
    }

    const toggleOr = () => {
        let copyOr = orImg
        copyOr = !copyOr
        setOrImg(copyOr)
    }

    function comingSoon() {
        return (
            <div className="my-modal-wrapper">
                <div className="my-modal">
                    <div className="my-modal-header">
                    <p>Coming Soon</p>
                    <button className="btn btn-danger" onClick={() => toggleModal('comingSoon')}>Close</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {modal['comingSoon'] === true ? comingSoon() : ''}
            <div className="header d-flex align-items-center justify-content-center bg-darker py-3 gap-3">
                <img src={Logo} alt="adventure awaits logo" width="75px" />
                <h1 className="txt-orange">The Adventure Awaits</h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="d-flex justify-content-center gap-3 my-3">
                                <span className="txt-orange txt-hover-dark clickable underlined" onClick={() => toggleModal('comingSoon')} >Life on the Road</span >
                                <Link className="txt-orange txt-hover-dark" to="/refit-on-the-road">REFIT on the Road</Link>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center" id="section1">
                            <div className="col-sm-6 d-flex justify-content-end">
                                <img src={KendalREFIT} alt="kendal refit" className="w-100" />
                            </div>
                            <div className="col-sm-6">
                                <h2>REFIT on the Road</h2>
                                <p>I love to dance and I love to be healthy, REFIT is my opprotunity to do both! I am a certified REFIT instructor, taking the REFIT spirit with me wherever I go and getting whoever I can to join. Will you be in my class? Come join me, I would love to see you online or in person! Info inside.</p>
                                <Link to="/refit-on-the-road" className="btn bg-orange txt-hover-light bg-hover-darker">Come on in</Link>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <img src={orImg == true ? OR : ORLogic} alt="or image" width='100px' onMouseEnter={toggleOr} onMouseLeave={toggleOr} />
                            </div>
                        </div>
                        <div className="row d-flex flex-sm-row-reverse">
                            <div className="col-sm-6">
                                <img src={Sunrise} alt="Sunrise" className="w-100" />
                            </div>
                            <div className="col-sm-6">
                                <h2>Life on the Road</h2>
                                <p>This is our blog site of our adventures as we have traveled the country. We are the Thibaults (pronounced TBO) and we are a family of four, Tyler (Dad), Kendal (Mom), Theo or Theophilus (5 years old) and Z or Zebadiah (4 years old). We would love to share our experiences and there for a bit of our life with you. Come and join us! Reach out, we look forward to hearing from you.</p>
                                <button className="btn btn-dark txt-white" onClick={() => toggleModal('comingSoon')}>Come on in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer />}
        </div>
    )
}
