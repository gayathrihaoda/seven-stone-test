import React, { useState } from 'react'

import logo from "../../assets/footer__logo.png"

import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsThreadsFill } from "react-icons/bs";

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {

            const [isOpen, setIsOpen] = useState(false);
            const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
        
            const toggleDropdown = () => {
              setIsOpen(!isOpen);
            };
        
            const togglePrivacyDropdown = () => {
                setIsPrivacyOpen(!isPrivacyOpen);
              };

              const [subNav, setSubNav] = useState("merchant");

              const handleSubnav = (menuName) => {
                setSubNav(subNav === menuName ? null : menuName);
              };

              const [subNav1, setSubNav1] = useState("merchant");

              const handleSubnav1 = (menuName) => {
                setSubNav1(subNav1 === menuName ? null : menuName);
              };
            
              const year = new Date()
        
    
  return (
            
            <div className='footer__section'>
    
                <div className='grid place-content-center'>
                    <div className='footerView__container container mx-auto flex justify-center lg:justify-between items-center flex-wrap md:flex-nowrap gap-20 md:gap-0'>
                        <div className='flex justify-center flex-col items-center md:inline-block'>
                            <img src={ logo } alt='footer__logo' className='footer__logo' />
                            <div className='w-full md:w-1/2'>
                                <span className='footer__content block text-center md:text-left'>The purpose of a FAQ is generally to provide information on frequent questions or concerns.</span>
                                <span className='footer__address footer__content block text-center md:text-left'>No.12, 16th Cross, 23rd Main,5th Phase, <br></br> JP Nagar NA Bangalore Bangaluru Karnataka India 560078</span>
                            </div>
                            <div className='flex items-center gap-x-4 social__footerContainer'>
                                <Link to="https://www.instagram.com/7_stones_online" target='_blank'><FaInstagram className='footer__socialIcon' /></Link>
                                <Link to="https://www.threads.net/@7_stones_online" target='_blank'><BsThreadsFill className='footer__socialIcon' /></Link>
                                <Link to="https://x.com/7_Stones_online" target='_blank'><FaXTwitter className='footer__socialIcon' /></Link>
                                <Link to="https://www.facebook.com/profile.php?viewas=100000686899395&id=61574344049563" target='_blank'><FaFacebookSquare className='footer__socialIcon' /></Link>
                            </div>
                        </div>
                        <div className='flex flex-wrap sm:flex-nowrap gap-20 lg:gap-40'>
                            <div>
                                <span className='block footer__title'>Company</span>
                                <div className='flex flex-col gap-5'>
                                    <Link to="/about"><span className='block footer__navLink'>About us</span></Link>
                                    <Link to="/refund-policy"><span className='block footer__navLink'>Refund Policy</span></Link>
                                    <Link to="/tds"><span className='block footer__navLink'>TDS</span></Link>
                                    <Link to="/community-guidelines"><span className='block footer__navLink'>Community Guidelines</span></Link>
                                </div>
                            </div>

                            <div>
                                <span className='block footer__title'>Help</span>
                                <div className='flex flex-col gap-5'>
                                    <Link to="/terms-and-conditions"><span className='block footer__navLink'>Terms and Conditions</span></Link>
                                    <Link to="/terms-service"><span className='block footer__navLink'>Terms Service</span></Link>
                                    <Link to="/privacy-and-policy"><span className='block footer__navLink'>Privacy Policy</span></Link>
                                    <Link to="/cancellation-settlement"><span className='block footer__navLink'>Cancel Settlement</span></Link>
                                </div>
                            </div>
                            {/* <div>
                                                        <span className='block footer__title'>Help</span>

                                                        <div className='flex flex-col gap-5'>
                                                            <span className='block footer__content pb-5'>Customer Support</span>
                                                           <div className='flex justify-start gap-2 items-center'>
                                                           <span
                                        className="block footer__content cursor-pointer"
                                        onClick={toggleDropdown}
                                      >
                                        Terms & Conditions
                                      </span>
                                      {isOpen ? (
                                          <FaChevronUp className="footer__content" />
                                        ) : (
                                          <FaChevronDown className="footer__content" />
                                        )}
                                                           </div>
                                                           <div
                                        className={`transition-all duration-500 ease-in-out pt-5 ${
                                          isOpen
                                            ? 'h-auto opacity-100 mb-3'
                                            : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                      >
                                      {isOpen && (
                                        <div className="footer__content grid gap-2">
                                          <ul className='list-disc pl-4 grid gap-2'>
                                          <a href='/terms&conditions'><li>Terms & Conditions</li></a>
                                          <a href='/community-guidelines'><li>Community Guidelines</li></a>
                                          <a href='/privacy'><li>Privacy & Policy</li></a>
                                          </ul>
                                        </div>
                                      )}  </div>
                            
                            
                                                <div className='flex justify-start gap-2 items-center'>
                                                           <span
                                        className="block footer__content cursor-pointer"
                                        onClick={togglePrivacyDropdown}
                                      >
                                        Terms of Service
                                      </span>
                                      {isPrivacyOpen ? (
                                          <FaChevronUp className=" footer__content" />
                                        ) : (
                                          <FaChevronDown className="footer__content" />
                                        )}
                                                           </div>
                                                           <div
                                        className={`transition-all duration-500 pt-5 ease-linear ${
                                            isPrivacyOpen
                                            ? 'h-auto opacity-100 mb-3 '
                                            : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                      >
                                      {isPrivacyOpen && (
                                        <div className="footer__content grid gap-2">
                                          <ul className='list-disc pl-4 grid gap-2'>
                                             <a href='/tds'><li>TDS</li></a>
                                             <a href='/cancellationSettlement'><li>Cancellation Settlement</li></a>
                                             <a href='/terms'><li>Terms of Service</li></a>
                                          </ul>
                                        </div>
                                      )}  </div>
                                                        </div>
                        </div> */}
                            

                        </div>
                    </div>
                </div>
    
                <span className='copy__rights block'>© Copyright {year.getFullYear()}, All Rights Reserved by Haoda Network</span>
    
            </div>  )
}

export default Footer