import React, { useState } from 'react'
import './Legal.css'
import { FaExclamationTriangle } from 'react-icons/fa'

import Nav from '../nav/nav'

import logo from "../../assets/footer__logo.png"

import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Footer from '../footer/footer'


const Legal = () => {

        const [isOpen, setIsOpen] = useState(false);
        const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
    
        const togglePrivacyDropdown = () => {
            setIsPrivacyOpen(!isPrivacyOpen);
          };
    

  return (

    <>
    <Nav />
    <div className='legal__container'>
      
      <div className='flex justify-center items-center'>
      <div className='px-5 py-12 text-center'>
        <div className='legal__title'>
          <span className='text-[#FF8735]'>Seven Stones</span> Legal
        </div>
        <div className='legal__content mx-auto'>
          Yes, it is absolutely safe! <span className='font-semibold text-[#FF8735]'>7 Stones</span> is a game of 
          <span className='font-bold'> “skill”.</span> The relevant law in India is absolutely clear that, unlike games of 
          <span className='font-bold'> "chance"</span>, games which substantially require a player to apply their skill are absolutely legal.
        </div>
      </div>
      </div>

<div className='flex justify-center items-center'>
      <div className='md:w-3/4 px-5'>
        <div className='legal__compliance grid place-content-center py-10 md:py-20'>
          <div className='legal__content '>
            All games hosted by <span className='font-semibold text-[#FF8735]'>7 Stones</span> are carefully designed, and the jurisdiction of prize winners is strictly monitored 
            to ensure legal compliance with relevant laws currently in force in India.
          </div>
        </div>
      </div>
      </div>

<div className='flex justify-center items-center'>
      <div className='px-5 md:w-3/4 pt-10'>
        <div className='legal__notice flex items-start gap-4 p-6 rounded-lg'>
          <div className='legal__icon text-[#FF8735]'>
            <FaExclamationTriangle />
          </div>
          <div>
            <div className='legal__noticeTitle'>Important Notice:</div>
            <div className='legal__noticeText'>
            If you are accessing this site from  <span className='text-[#FF8735] font-semibold'>Andhra Pradesh, Assam, Telangana, Sikkim,</span> or 
              <span className='text-[#FF8735] font-semibold'> Nagaland</span>, we hope you will enjoy our practice contests. However, the law in these states is unclear 
              on playing games of skill with entry fees for cash prizes. You are therefore prohibited from playing cash contests on <span className='font-semibold'>7 Stones</span> 
              from any of these states.
            </div>
          </div>
        </div>
      </div>

      </div>

      <div className='container mx-auto px-5 py-8 text-center'>
        <div className='legal__contact'>
          For additional information, please reach out to us. <a href='#' className='legal__contactLink'>Contact us</a>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}

export default Legal