import React, { useState, useEffect } from 'react'
import toggleClasses from '../../../components/helperFunc/utilities'

import { Link } from 'react-router-dom'
import './style.css'

import Iframe from 'react-iframe'

// images
import Logo from '../../../images/logos/logo_url_white.png'
import REFITLogo from '../../../images/refitOnTheRoad/refit_icon.svg'
import RefitImg1 from '../../../images/refitOnTheRoad/refit_img_1.png'
import RefitImg2 from '../../../images/refitOnTheRoad/refit_img_2.png'
import KendalRefit from '../../../images/refitOnTheRoad/kendal_refit.png'
import RefitZoom from '../../../images/refitOnTheRoad/refit_zoom.png'
import ProfilePic from '../../../images/refitOnTheRoad/profile_pic.png'
import RefitDisco from '../../../images/refitOnTheRoad/refit_disco.png'
import DonatePayPal from '../../../images/refitOnTheRoad/donate_paypal.png'
import DonateVenmo from '../../../images/refitOnTheRoad/donate_venmo.png'
import Close from '../../../images/icons/close.png'

import Footer from '../../../components/footer/Index'


export default function Index() {
    const [myModal, setMyModal] = useState(null)
    const [classInfo, setClassInfo] = useState('refitSchedule')


    function contactMe() {
        return (
            <div className='my-modal-wrapper'>
                <div className="my-modal">
                    <div className="my-modal-header">
                        <h2>Contact Me</h2>
                        <span onClick={() => setMyModal(null)}> <img src={Close} alt="close btn" width="50px" /> </span>
                    </div>
                    <div className="my-modal-content">
                        <p><strong>Email: </strong>thibault.kendal@protonmail.com</p>
                        <p><strong>REFIT: </strong><a href="https://refitrev.com/instructors/kendal/" target="_blank">refitrev.com/instructors/kendal</a></p>
                    </div>
                </div>
            </div>
        )
    }

    function donate() {
        return (
            <div className='my-modal-wrapper'>
                <div className="my-modal">
                    <div className="my-modal-header align-items-center">
                        <div className='d-sm-flex align-items-center gap-3'>
                            <h2 className='font-glacial'>Donate</h2>
                            <span className='font-northwell pt-3 fs-1' >Buy me a coffee</span>
                        </div>
                        <span onClick={() => setMyModal(null)}><img src={Close} alt="close btn" width="50px" /></span>
                    </div>
                    <div className="my-modal-content">
                        <div className="row">
                            <div className="col-sm-4 d-flex justify-content-center">
                                <div>
                                    <p className='text-center'>PayPal</p>
                                    <p className='text-center'>@kendaltbo</p>
                                    <img src={DonatePayPal} alt="" width="200px" />
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <div>
                                    <p className='text-center'>Venmo</p>
                                    <p className='text-center'>@KendalThibault</p>
                                    <img src={DonateVenmo} alt="" width="200px" />
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex d-sm-block justify-content-center">
                                <div className='flex-col flex-column-reverse'>
                                    <p className='text-center'>Store coming soon!</p>
                                    <p className='text-center'></p>
                                    <img src={Logo} alt="" width="300px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const refitSchedule = () => {
        return (
            <div className="d-flex justify-content-center">
                <div className="col-sm-6">
                    <table className='table border border-3 border-dark'>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-yellow'>
                                <td>Monday</td>
                                <td>4:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>None</td>
                            </tr>
                            <tr className='bg-yellow'>
                                <td>Wednesday</td>
                                <td>4:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>None</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const refitPlaylist = () => {
        return (
            <div className='d-flex justify-content-center'>
                <div className="col-sm-6">
                    <p className='text-center'>To go to my Spotify Playlist click <a href="https://open.spotify.com/playlist/2r1pAoINXq0k7E7hta6utd?si=nq96AWigSC6YJhWdRbc6mg&utm_source=native-share-menu" target="_blank">Here</a></p>
                    <table className="table">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Song Name</td>
                                <td>Artist</td>
                                <td>Links</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>New Day</td>
                                <td>Danny Gokey</td>
                                <td><a href="https://www.youtube.com/watch?v=Nq-dGkxNaHA" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Backseat Driver</td>
                                <td>TobyMac, Hollyn, Tru</td>
                                <td><a href="https://www.youtube.com/watch?v=ABojuncq-eE" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Better When I'm Dancing</td>
                                <td>Meghan Trainor</td>
                                <td><a href="https://www.youtube.com/watch?v=1gNI4Vt3e-g" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Today Tomorrow & Forever</td>
                                <td>Sanctus Real</td>
                                <td><a href="https://youtu.be/ovePO2z3olY" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Unfinished</td>
                                <td>Mandisa</td>
                                <td><a href="https://www.youtube.com/watch?v=7ox-FaMEiDk&t=21s" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Be a Light</td>
                                <td>Thomas Rhett & Friends</td>
                                <td>Coming Soon!</td>
                                {/* <td><a href="https://www.youtube.com/watch?v=Nq-dGkxNaHA" target="_blank">YouTube</a></td> */}
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Flashlight</td>
                                <td>Hailee Steinfeld</td>
                                <td><a href="https://www.youtube.com/watch?v=oqOsJtd04uc" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Lights Shine Bright</td>
                                <td>TobyMac, Hollyn</td>
                                <td><a href="https://www.youtube.com/watch?v=aKP6zSaArgU" target="_blank">YouTube</a></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>God Only Knows</td>
                                <td>For King & Country</td>
                                <td>Coming Soon!</td>
                                {/* <td><a href="https://www.youtube.com/watch?v=Nq-dGkxNaHA" target="_blank">YouTube</a></td> */}
                            </tr>
                        </tbody>
                    </table>
                    <iframe src="https://open.spotify.com/embed/playlist/2r1pAoINXq0k7E7hta6utd?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        )
    }

    const classInfoHandler = (e) => {
        let el = e.target
        setClassInfo(el.id)
        toggleClasses(el, ['refit-btn-active'])
    }


    const ClassInfoObj = {
        refitPlaylist: refitPlaylist,
        refitSchedule: refitSchedule
    }

    return (
        <div>
            <div className="container-fluid">
                {myModal}
                <div className="row bg-black p-2">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src={Logo} alt="adventure awaits logo" width="75px" className='clickable' onClick={() => window.location.replace("/")} />
                            <img src={REFITLogo} alt="" width="75px" className="d-none d-sm-inline-block" />
                        </div>
                        <ul className='ul-row-menu m-0 p-0 txt-white gap-3'>
                            <li className='clickable txt-hover-dark' onClick={() => setMyModal(contactMe)}>Contact Me</li>
                            <li><button className="btn bg-orange rounded-pill txt-white" onClick={() => setMyModal(donate)}>Donate</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <ul className="ul-row-menu d-flex justify-content-center gap-3">
                        <li className='clickable txt-blue txt-hover-dark' onClick={() => window.location.replace("/refit-on-the-road/#aboutMe")}>About Me</li>
                        <li className='clickable txt-blue txt-hover-dark' onClick={() => window.location.replace("/refit-on-the-road/#schedule")}>Schedule</li>
                        <li className='clickable txt-blue txt-hover-dark' onClick={() => window.location.replace("/refit-on-the-road/#location")}>Location</li>
                    </ul>
                </div>
                <div className="row">
                    <h1 className='text-center'>REFIT on the Road</h1>
                </div>
            </div>
            <div className="container-fluid p-0 m-0">
                <img src={RefitImg1} alt="refit image" className='w-100 ' />
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="bg-black d-flex justify-content-end txt-white">
                        <p className='p-2 m-0'>EVERY <span className="txt-yellow">BODY</span> BELONGS</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center mt-3">
                    <div className="col-12 col-sm-8 col-md-6">
                        <h2>About REFIT</h2>
                        <p>REFIT® is a total body fitness format, including cardio, balance, flexibility and toning. We put the fun in fitness and unite people across the country and around the globe through the international language of dance!</p>
                        <a href="https://refitrev.com/">Visit the official REFIT Website</a>
                    </div>
                    <div className="col-sm-4 col-md-6 d-none d-sm-block">
                        <img src={RefitDisco} alt="refit disco" />
                    </div>
                </div>
                <div className="row bg-blue mt-3 mx-1 mx-sm-0 p-3 shadow">
                    <h2 className='text-center txt-white font-glacial p-0'>Kendal's Class</h2>
                </div>
                <div className="row mt-3" id='schedule'>
                    <div className="d-flex justify-content-evenly">
                        <h2 className='refit-btn refit-btn txt-white refit-btn-hover p-3 f2 clickable refit-btn-active' id='refitSchedule' onClick={(e) => classInfoHandler(e)}>Schedule</h2>
                        <h2 className='clickable refit-btn refit-btn txt-white refit-btn-hover p-3 f2' id='refitPlaylist' onClick={(e) => classInfoHandler(e)}>Playlist</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        ClassInfoObj !== null
                            ?
                            ClassInfoObj[classInfo]()
                            :
                            'loading...'
                    }
                </div>
                <div className="row mt-4" id='location'>
                    <h2 className='text-center'>Class Locations</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 p-0 border border-dark border-2">
                        <img src={KendalRefit} alt="" className='w-100' />
                    </div>
                    <div className="col-sm-6 p-0 border border-dark border-2">
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3443539304258!2d-120.4920362840975!3d47.52215850180016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549bb52c57bf321b%3A0x73e4410f4db3f05e!2sChrist%20Center%20Cashmere!5e0!3m2!1sen!2sus!4v1639797719121!5m2!1sen!2sus"
                            display='initial'
                            style="border:0;"
                            allowfullscreen=""
                            className='w-100 h-100'
                            loading="lazy"></Iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 bg-yellow d-flex justify-content-center align-items-center p-0 border border-dark border-2">
                        <div className='fs-2'>
                            <h2>Online Class</h2>
                            <p>Zoom Meeting ID: 377-070-4142</p>
                            <p>Password: let's dance</p>
                            <p>Zoom Link: <a href="https://us02web.zoom.us/j/3770704142?pwd=NVVyK0hQQXZ2OW9WeWhtanFNbGZQdz09" target="_blank">Click Here</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 p-0 border border-dark border-2">
                        <img src={RefitZoom} alt="REFIT Zoom icon" className='w-100' />
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 mt-3">
                <img src={RefitImg2} alt="" className='w-100' />
            </div>
            <div className="container">
                <div className="row" id='aboutMe'>
                    <h2 className='text-center'>About Kendal</h2>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
                        <img src={ProfilePic} alt="profile picture" className='w-100' />
                    </div>
                    <div className="col-sm-6">
                        <p>I have been enjoying REFIT® as a YouTube living room dancer for over a year, as well as leading my second grade students in the dances for morning fitness and brain breaks (more for me than them). The first two REFIT dances I memorized and led on my own were High Hopes and Mic Drop, which will always be some of my favorites!</p>
                        <p>Although trying to build a community as a travelling instructor is not the easiest thing to do, I am excited about the opportunities that come with providing REFIT classes across the country as my family and I are fulltime RVing! We are moving every 1-3 weeks!</p>
                        <p> UPDATE: I have a class location for the months of December and January in our home town out of the snow and freezing temps! Join me in person at Christ Center in Cashmere, WA!
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <button className='btn bg-yellow rounded-pill rounded-4' onClick={() => setMyModal(contactMe)}>Contact Me</button>
                            <button className='btn bg-orange rounded-pill rounded-4' onClick={() => setMyModal(donate)}>Donate</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
