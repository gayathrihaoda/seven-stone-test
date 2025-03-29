import React, { useState } from 'react'
import "../../style/nav.css"

// Image
import Logo from "../../assets/footer__logo.png"

// React Icon
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaCircleDown } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { BsThreadsFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";


const Nav = () => {

    const [menuLink, setMenuLink] = useState(false)
    const location = useLocation()

    const handleMenu = () => {
        setMenuLink(!menuLink)
    }

    const [btnClick, setBtnClick] = useState(null)

    const playSound = () => {
        const audio = new Audio("/btn1.mp3"); // Make sure the file is in the public folder
        audio.play().catch(err => console.log("Playback failed:", err));
    };

  return (
    <>
    <div className='nav__container'>
        <div className='social__header hidden lg:flex items-center justify-center'>
            <div className='flex items-center social__linkHeader gap-10 xl:gap-20'>
                <Link to="https://www.instagram.com/7_stones_online" target='_blank'><div className='flex items-center gap-x-4 cursor-pointer' onClick={playSound}>
                    <span className='social__icon'> <FaInstagram /> </span>
                    <span className='social__name'>Instagram</span>
                </div></Link>
                <Link to="https://www.facebook.com/profile.php?viewas=100000686899395&id=61574344049563" target='_blank'><div className='flex items-center gap-x-4 cursor-pointer' onClick={playSound}>
                    <span className='social__icon'> <FaFacebookSquare /> </span>
                    <span className='social__name'>Facebook</span>
                </div></Link>
                <Link to="https://x.com/7_Stones_online" target='_blank'><div className='flex items-center gap-x-4 cursor-pointer' onClick={playSound}>
                    <span className='social__icon'> <FaXTwitter /> </span>
                    <span className='social__name'>Twitter</span>
                </div></Link>
            </div>
        </div>
        <div className='navLink__container hidden lg:flex justify-center'>
            <div className='container mx-auto flex items-center justify-between h-full'>
                <div className='h-full'>
                    <div className='flex justify-center items-center gap-x-10 lg:gap-x-20 2xl:gap-x-30 h-full'>
                        <div className={`${location.pathname === "/" ? "nav__linkBot" : "nav__linkName" } h-full grid place-content-center`}>
                            <Link to="/"><span className={`${location.pathname === "/" ? "nav__linkName" : "nav__link" } block`}>Home</span></Link>                        
                        </div>
                        <div className={`${location.pathname === "/about" ? "nav__linkBot" : "nav__linkName" } h-full grid place-content-center`}>
                            <Link to="/about"><span className={`${location.pathname === "/about" ? "nav__linkName" : "nav__link" } block`}>About US</span></Link>
                        </div>
                    </div>
                </div>
                <div className='h-full ml-auto'>
                    <div className='flex justify-center items-center gap-x-10 xl:gap-x-20 2xl:gap-x-30 h-full'>
                        <div className={`${location.pathname === "/faq" ? "nav__linkBot" : "nav__linkName" } h-full grid place-content-center`}>
                            <Link to="/faq"><span className={`${location.pathname === "/faq" ? "nav__linkName" : "nav__link" } block`}>FAQ</span></Link> 
                        </div>
                        <div className={`${location.pathname === "/legal" ? "nav__linkBot" : "nav__linkName" } h-full grid place-content-center`}>
                            <Link to="/legal"><span className={`${location.pathname === "/legal" ? "nav__linkName" : "nav__link" } block`}>LEGAL</span></Link>
                        </div>
                        <button className='header__btn flex items-center justify-center gap-x-4 cursor-pointer' onClick={playSound}> Download App</button>
                    </div>
                </div>
            </div>
        </div>
        <Link to="/"><div className='logo__container grid place-content-center'>
            <img src={ Logo } alt='logo' className='logo' />
        </div></Link>
        <div className='menu__logoCon lg:hidden' onClick={ handleMenu }>
            <span className='nav__menuIcon'><RiMenu3Fill /></span> 
        </div>
    </div>

    <div className={`submenu ${menuLink ? "open" : "" }`}>
        <div className='relative'>
            <div className='closeIcon__menu absolute right-0' onClick={ handleMenu }>
                <span className='closeIcon__icon'> <IoCloseSharp /> </span>
            </div>
            <div className='navMenuLink__content'>
                <Link to="/"><span className='block nav__link'>Home</span></Link>
                <Link to="/about"><span className='block nav__link'>About US</span></Link>
                <Link to="/legal"><span className='block nav__link'>Legal</span></Link>
                <Link to="/faq"><span className='block nav__link'>faq</span> </Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default Nav