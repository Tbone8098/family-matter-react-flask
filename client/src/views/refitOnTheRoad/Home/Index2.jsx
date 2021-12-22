import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Iframe from 'react-iframe'

// images
import Logo from '../../../images/logos/logo_url_white.png'
import REFITLogo from '../../../images/refitOnTheRoad/refit_icon.svg'
import RefitImg1 from '../../../images/refitOnTheRoad/refit_img_1.png'
import RefitImg2 from '../../../images/refitOnTheRoad/refit_img_2.png'
import Kendal_refit from '../../../images/refitOnTheRoad/kendal_refit.png'
import RefitZoom from '../../../images/refitOnTheRoad/refit_zoom.png'
import ProfilepPic from '../../../images/refitOnTheRoad/profile_pic.png'
import RefitDisco from '../../../images/refitOnTheRoad/refit_disco.png'

import Footer from '../../../components/footer/Index'

export default function index() {
    return (
        <div>
            <div className="header py-2 px-3 bg-black txt-white d-flex justify-content-between align-items-center">
                <div>
                    <img src={Logo} alt="" width="75px" />
                    <img src={REFITLogo} alt="" width="75px" className="d-none d-sm-inline-block" />
                </div>
                <div>
                    <ul className="ul-row-menu">
                        <li>About Me</li>
                        <li>Contact Me</li>
                        <li><button className="btn bg-orange">Donate</button></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="d-flex gap-3 justify-content-center">
                        <Link to="/">Schedule</Link>
                        <Link to="/">Location</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <h1>REFIT on the Road</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={RefitImg1} alt="" />
            </div>
            <div className="">
                <div className="row">
                    <div className='bg-black mt-2 d-flex justify-content-end txt-white py-2'>
                        <span>EVERY <span className='txt-yellow'>BODY</span> BELONGS</span>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-sm-8'>
                        <h2>About REFIT</h2>
                        <p>REFIT® is a total body fitness format, including cardio, balance, flexibility and toning. We put the fun in fitness and unite people across the country and around the globe through the international language of dance!</p>
                        <a href="https://refitrev.com/">Visit the official REFIT Website</a>
                    </div>
                    <div className="col-sm-4 d-none d-sm-block">
                        <img src={RefitDisco} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-full  bg-blue py-2">
                        <h2>Kendal's Class</h2>
                    </div>
                </div>
                <div className="row">
                    <h2 className='text-center'>Class Schedule</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                        <table className='table box-solid-2'>
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
                <div className="row">
                    <div className="col-12">
                        <h2>Class Locations</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={Kendal_refit} alt="" className='w-100 box-solid-2' />
                    </div>
                    <div className="col-12 bg-blue">
                        <h3>In Person</h3>
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3443539304258!2d-120.4920362840975!3d47.52215850180016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549bb52c57bf321b%3A0x73e4410f4db3f05e!2sChrist%20Center%20Cashmere!5e0!3m2!1sen!2sus!4v1639797719121!5m2!1sen!2sus"
                            height="450"
                            display='initial'
                            style="border:0;"
                            allowfullscreen=""
                            className='w-100'
                            loading="lazy"></Iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bg-yellow">
                        <h2>Online Class</h2>
                        <p>Zoom Meeting ID: 377-070-4142</p>
                        <p>Password: let's dance</p>
                        <p>Zoom Link: <a href="https://us02web.zoom.us/j/3770704142?pwd=NVVyK0hQQXZ2OW9WeWhtanFNbGZQdz09">Click Here</a></p>
                    </div>
                    <div className="col-12">
                        <img src={RefitZoom} alt="refit zoom image" />
                    </div>
                </div>
            </div>
            <div className="">
                <img src={RefitImg2} alt="refit image 2" className='w-100' />
            </div>
            <div className="">
                <div className="row">
                    <div className="col-12">
                        <h2>About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img src={ProfilepPic} alt="profile picture" className='w-100' />
                        </div>
                        <div className="col-12">
                            <p>I have been enjoying REFIT® as a YouTube living room dancer for over a year, as well as leading my second grade students in the dances for morning fitness and brain breaks (more for me than them). The first two REFIT dances I memorized and led on my own were High Hopes and Mic Drop, which will always be some of my favorites!</p>
                            <p>Although trying to build a community as a travelling instructor is not the easiest thing to do, I am excited about the opportunities that come with providing REFIT classes across the country as my family and I are fulltime RVing! We are moving every 1-3 weeks! UPDATE: I have a class location for the months of December and January in our home town out of the snow and freezing temps! Join me in person at Christ Center in Cashmere, WA!
                            </p>
                            <div className='d-flex justify-content-evenly'>
                                <button className='btn bg-yellow'>Contact Me</button>
                                <button className='btn bg-orage'>Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


