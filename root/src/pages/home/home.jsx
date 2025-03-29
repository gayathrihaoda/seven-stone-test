import React, { useEffect, useRef, useState } from 'react'
import "../../style/homepage.css"
import "../../index.css"

// video
import video from "../../assets/video.mp4"

// Images
import phnImg from "../../assets/phn__img.png"
import avatar from "../../assets/avatarImg.png"
import partner from "../../assets/partner3.png"
import cri from "../../assets/criImg.png"
import faqImg from "../../assets/batImg.png"
import logo from "../../assets/footer__logo.png"
import cric from "../../assets/FantasyCricket.jpg"
import kabadi from "../../assets/Kabaddi.jpg"
import football from "../../assets/FantasyFootball.jpg"
import hockey from "../../assets/FantasyHockey.jpg"
import basket from "../../assets/FantasyBasketball.jpg"
import foot from "../../assets/footImg.png"

// SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import Nav from '../nav/nav'

import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useScroll } from "@react-three/drei";
import Bee from '../bee/bee'

import { motion, useScroll, useTransform, useMotionValueEvent, easeInOut, useAnimation } from "framer-motion";

import { useLocation } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from '../loader/loader'

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Footer from '../footer/footer'


gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {

    const data = [
        {
            title: "1. What are Fantasy Sports?",
            content: "Fantasy sports are online games where players create virtual teams using real-life athletes. Points are earned based on their actual performance in live matches."
        },
        {
            title: "2. How Do I Register on the Seven Stones?",
            content: 'Simply click on the "Register Now" button, fill in your details, verify your account, and start playing!'
        },
        {
          title: "3. How do I contact customer support?",
          content: 'You can reach us via email, live chat, or our helpline for any assistance.'
        },
        {
            title: "4. Why Should I Play Fantasy Sports on Seven Stones?",
            content: "Seven Stones offers an exciting platform where you can build your dream team, compete in thrilling contests, and enjoy real-time sports action."
        },
        // {
        //     title: "5. Can I Play on Both Mobile and Desktop?",
        //     content: "Easy team selection and player stats tracking. Real-time match updates and leaderboard rankings."
        // },
    ]

    const [select, setSelect] = useState(null)

    const toggle = (id) => {
        if(select === id){
            return setSelect(null)
        }
        setSelect(id)
    }

    const cricImg = useRef(null)

    useEffect(() => {
        const el = cricImg.current;
    
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 }, 
            {
              opacity: 1, 
              y: 0, 
              duration: 2,
              scrollTrigger: {
                trigger: el,
                start: "top 80%", 
                end: "top 30%",
                scrub: 1, 
              },
            }
        );

    }, []);

    const playSound = () => {
        const audio = new Audio("/btn1.mp3"); 
        audio.play().catch(err => console.log("Playback failed:", err));
    }

    
  return (
    <div className='w-full'>
        <Nav /> 

        <div className='banner__section'>
            <video autoPlay playsInline muted loop>
                <source src={ video } type='video/mp4' />
            </video>
            <div className='banner__content w-full h-full grid place-content-center px-10'>
                <div className='flex justify-center items-center h-full'>
                    <div className='xl:w-3/5'>
                        <motion.span 

                        initial={{
                            opacity: 0,
                            y: "20px"
                        }}

                        whileInView={{ opacity: 1, y:"0px" }}

                        transition={{ 
                            duration: 1.2,
                            ease: easeInOut,
                            delay: 0.4 
                        }}

                        className='block banner__title'>Play Fantasy Games on 7Stones</motion.span>                
                        <motion.span 

                        initial={{
                            opacity: 0,
                            y: "20px"
                        }}
                        
                        whileInView={{ opacity: 1, y:"0px" }}
                        
                        transition={{ 
                            duration: 1.2,
                            ease: easeInOut,
                            delay: 0.4 
                        }}
                        
                        className='block banner__para'>Welcome to 7Stones! Build your dream team, compete in thrilling contests, and enjoy nonstop fantasy sports action—from cricket to basketball, kabaddi, and more</motion.span>
                        <div className='banner__btn grid place-content-center' onClick={ playSound }>
                            <span className='banner__btnName'>Download APP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='gameList__container'>

        {/* Game list section */}

               <div className='gameList__contentList grid place-content-center'>
                 <span className='hidden md:block gameList__title text-center' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Fantasy Sports in India: Play, Win & Experience the Action with 7Stones!</span>
                    <span className='block md:hidden gameList__title text-center'>Fantasy Sports in India: Play, Win & Experience the Action with 7Stones!</span>
                    <span className='block gameList__para text-center my-5'>Fantasy sports are booming, bringing fans closer to real-time action! Build your dream team, join contests, and win big—with 7Stones</span>
                    <div className='grid place-content-center'>
                        <span className='gameList__content text-center block px-10 py-3'>Master the game, pick the best players, and start winning today!</span>
                    </div>
                </div>


        <div className='view__home grid place-content-center'>

            <div className='container mx-auto'>
                <Swiper
 effect="coverflow"
 grabCursor={true}
 centeredSlides={true}
 loop={true}
 slidesPerView="auto"
 modules={[EffectCoverflow, Pagination, Navigation]}
 coverflowEffect={{
   rotate: 0,
   stretch: 0,
   depth: 100,
   modifier: 2.5,
 }}
 pagination={{ clickable: true }}
 className="tranding-slider mb-10"       
      >
        <SwiperSlide>
          <img src={cric} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Cricket</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kabadi} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Kabaddi</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={football} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Football</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hockey} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Hockey</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cric} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Cricket</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={basket} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Basketball</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kabadi} alt="slide_image" />
          <div className='slider__imgName grid place-content-center'>
            <span className='block slider__imgTitle'>Fantasy Kabaddi</span>
          </div>
        </SwiperSlide>
        </Swiper>

            </div>
        </div>


        {/* Partner with 7Stone */}
        
        <div className='view__home partner__viewContainer grid place-content-center'>
            <div className='partner__container container mx-auto'>
                <span 
                 
                className="gameImg__foot" data-scroll data-scroll-speed="-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="219" height="320" viewBox="0 0 219 320" fill="none"
                    >
                        <path d="M216.426 137.24C216.426 137.24 211.046 134.091 202.511 135.759C193.975 137.426 194.533 135.388 194.533 135.388C194.533 135.388 193.791 134.277 192.863 134.277C191.936 134.277 190.638 135.943 190.638 135.943L188.596 134.832C188.596 134.832 185.627 135.387 185.813 135.943C185.999 136.498 179.319 135.017 179.319 135.017C179.319 135.017 172.453 121.128 166.887 112.98C161.321 104.832 154.271 100.757 154.271 100.757L142.582 82.2379C142.582 82.2379 139.427 75.0158 138.685 72.4234C137.943 69.831 130.892 60.757 129.964 59.2746C129.036 57.7921 123.284 57.6081 123.284 57.6081L109.498 46.1272L106.957 42.6089L106.585 38.5341C106.585 38.5341 108.698 36.3112 109.498 32.2379C110.298 28.1646 109.498 25.9417 109.498 25.9417C109.498 25.9417 109.811 19.2745 107.828 15.3867C105.843 11.4974 100.835 3.72032 87.289 5.75623C73.7449 7.79362 70.9617 18.3486 70.7759 24.8303C70.59 31.312 77.0841 36.4967 77.0841 36.4967C77.0841 36.4967 79.1253 42.0524 80.0531 43.5334C80.9808 45.0158 78.0117 43.3478 72.0752 45.1998C66.1372 47.0517 61.8703 47.4227 61.8703 47.4227L47.2127 45.0158C47.2127 45.0158 44.0578 38.5341 39.9767 35.2012C35.8957 31.8684 31.0712 28.1646 27.3603 24.0898C23.6494 20.0165 20.0738 14.4059 20.0738 14.4059V12.83C20.0738 12.83 20.9763 8.32634 20.0738 7.42562C19.1714 6.52489 13.0803 1.12201 13.0803 1.12201C13.0803 1.12201 11.0449 0.847488 10.6851 1.12201C10.3253 1.39653 10.3253 2.35365 10.3253 2.35365C10.3253 2.35365 7.74736 1.51525 7.20768 2.47236C6.668 3.42948 6.18773 4.92674 6.18773 4.92674C6.18773 4.92674 3.73023 5.34518 3.73023 6.3023C3.73023 7.25941 1.81229 10.432 1.81229 10.432C1.81229 10.432 0.67344 11.6889 1.0927 12.8849C1.51196 14.0824 4.08995 17.7313 5.28974 18.5103C6.48953 19.2879 9.96708 21.3832 9.96708 21.3832C9.96708 21.3832 16.4149 31.4959 23.0027 42.8849C29.5889 54.2738 35.5269 57.0517 35.5269 57.0517C35.5269 57.0517 45.3602 60.941 49.6286 62.4219C53.8955 63.9043 60.2037 65.2918 60.2037 65.2918V70.4765L61.5031 71.4025C61.5031 71.4025 62.8025 94.4578 63.5444 103.533C64.2863 112.607 59.4618 113.533 63.5444 123.164C67.627 132.793 66.3276 144.09 68.5547 150.571C70.7818 157.053 71.8938 161.683 72.2655 162.423C72.6372 163.164 70.4101 167.794 70.7818 169.646C71.1535 171.497 65.7715 169.646 66.8851 173.904C67.9987 178.163 68.9264 186.127 68.9264 186.127C68.9264 186.127 66.3291 197.424 66.6993 205.758C67.0709 214.091 65.2155 225.758 67.0709 228.35C68.9264 230.942 71.7927 237.055 72.3086 243.165C72.823 249.276 73.1947 254.648 75.7921 263.906C78.3894 273.165 82.1003 283.906 83.3997 284.832C84.6991 285.758 85.997 289.647 85.997 289.647C85.997 289.647 80.9867 288.907 74.4942 287.426C68.0001 285.943 64.2892 286.5 62.8055 290.203C61.3217 293.907 61.1359 297.426 65.0326 301.686C68.9293 305.945 74.8659 309.834 80.8039 311.5C86.7419 313.167 93.6061 313.167 94.1621 313.722C94.7182 314.277 102.512 316.5 102.512 316.5L109.933 314.833L115.26 310.824C119.59 315.823 125.975 319 133.116 319C146.156 319 156.727 308.449 156.727 295.434C156.727 282.419 146.156 271.868 133.116 271.868C121.268 271.868 111.488 280.588 109.794 291.941C106.208 286.977 103.075 281.95 102.697 279.091C101.77 272.054 103.253 263.349 101.398 256.313C99.5426 249.276 90.6371 236.127 91.0073 233.349C91.379 230.571 94.3464 222.423 94.3464 222.423C94.3464 222.423 107.149 220.016 110.304 214.645C113.458 209.275 116.426 202.607 116.426 200.755C116.426 198.904 118.837 189.273 118.837 189.273L123.662 192.422C123.662 192.422 146.113 193.162 155.575 197.607C165.036 202.051 179.695 209.83 183.776 209.088C187.859 208.347 191.012 210.57 193.239 206.31C195.466 202.051 196.95 193.903 197.322 191.125C197.694 188.347 203.816 180.939 204.372 176.865C204.928 172.791 204.186 160.257 204.372 158.746C204.558 157.236 203.125 156.124 204.583 155.384C206.042 154.643 211.422 149.828 211.422 149.828C211.422 149.828 216.061 150.754 217.544 146.679C219.024 142.61 216.426 137.24 216.426 137.24ZM182.472 161.686C182.472 161.686 180.245 164.278 178.02 166.13C175.793 167.982 174.865 176.501 174.865 176.501C174.865 176.501 170.782 171.316 165.959 167.242C161.135 163.167 154.641 152.612 150.93 151.871C147.219 151.131 145.364 148.724 143.694 146.13C142.024 143.538 134.603 141.871 133.303 141.5C132.004 141.129 137.384 138.723 135.345 137.056C133.303 135.39 137.572 131.315 137.942 129.834C138.314 128.353 134.045 120.019 132.561 118.353C131.078 116.687 125.882 118.353 125.036 118.353C124.19 118.353 121.799 116.132 120.873 114.464C119.945 112.797 122.357 108.353 123.47 106.501C124.584 104.649 126.067 103.168 125.697 100.39C125.326 97.6126 129.408 91.5019 129.408 91.5019C129.964 96.6866 137.758 103.354 140.355 105.391C142.952 107.429 146.107 116.132 147.405 117.984C148.703 119.835 156.311 126.132 162.434 130.761C168.557 135.391 169.484 137.429 170.228 140.021C170.97 142.613 177.65 147.614 179.691 149.28C181.732 150.947 184.885 149.28 184.885 149.28C184.885 149.28 185.999 150.206 186.741 152.984C185.256 153.723 182.472 161.686 182.472 161.686Z" fill="#181818" stroke="#FF6700"/>
                    </svg>                
                </span>

                <span className='block md:hidden partner__title text-center'>Why Partner with 7Stones ?</span>
                <span className='hidden md:block partner__title text-center' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Why Partner with 7Stones ?</span>
                <span className='block partner__para text-center'>7Stones leads the way in innovation with its unified API. Here's why we’re the ideal partner:</span>
                <div className='flex items-center justify-center gap-8 flex-wrap'>
                    <div className='partner__card'>
                        <span className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                              <g clip-path="url(#clip0_9067_24382)">
                                <path d="M40.25 19.9805H20.25L19.4167 28.5249L20.25 37.3242H40.25V19.9805Z" fill="#FF6A9A"/>
                                <path d="M0.25 19.9805H20.25V37.3242H0.25V19.9805Z" fill="#FF6A9A"/>
                                <path d="M34.4167 29.9805H20.25L19.4167 31.0248L20.25 32.3242H34.4167V29.9805Z" fill="#29376D"/>
                                <path d="M6.08337 29.9805H20.25V32.3242H6.08337V29.9805Z" fill="#47568C"/>
                                <path d="M6.08337 24.9805H8.55736V27.3242H6.08337V24.9805Z" fill="#8253FF"/>
                                <path d="M10.9011 24.9805H16.9167V27.3242H10.9011V24.9805Z" fill="#F9F9F9"/>
                                <path d="M40.25 8.93789L35.2491 8.21125L33.0127 3.67969L30.7762 8.21125L26.6314 8.81352L22.4865 8.21125L20.25 3.67969L19.4167 10.1901L20.25 15.0943L24.7229 17.4459L23.8687 12.4652L26.6313 9.77227L29.3941 12.4652L28.5398 17.4459L33.0127 15.0943L37.4856 17.4459L36.6314 12.4652L40.25 8.93789Z" fill="#FF6A9A"/>
                                <path d="M18.0136 8.21125L13.8687 8.81352L9.72375 8.21125L7.48734 3.67969L5.25086 8.21125L0.25 8.93789L3.86867 12.4652L3.01445 17.4459L7.48734 15.0943L11.9602 17.4459L11.106 12.4652L13.8687 9.77227L16.6313 12.4652L15.7771 17.4459L20.25 15.0943V3.67969L18.0136 8.21125Z" fill="#F30045"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_9067_24382">
                                  <rect width="40" height="40" fill="white" transform="translate(0.25 0.5)"/>
                                </clipPath>
                              </defs>
                            </svg>
                        </span>
                        <span className='block text-center partnerBox__titlef'>Live Scores</span>
                        <span className='block text-center partnerBox__para'>Trusted by clients—check their testimonials!</span>
                        <img src={ phnImg } alt='img' className="partPhnImg" />
                    </div>

                    <div className='partner__card'>
                        <span className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                              <g clip-path="url(#clip0_9067_24403)">
                                <path d="M34.4759 14.8928V20.5178H32.1321V17.2366H21.9219V20.5178H19.5781V17.2366H9.3703V20.924H7.02655V14.8928H19.5781V10.5312H21.9219V14.8928H34.4759Z" fill="#FFF600"/>
                                <path d="M34.4759 14.8928V20.5178H32.1321V17.2366H21.9219V20.5178H20.7515V10.5312H21.9219V14.8928H34.4759Z" fill="#D8D000"/>
                                <path d="M40.75 2.92188V11.7048H7.14679L0.75 8.04852V6.57819L7.14679 2.92188H40.75Z" fill="#FFF600"/>
                                <path d="M20.7515 2.92188H40.75V11.7048H20.7515V2.92188Z" fill="#FFF600"/>
                                <path d="M35.6798 27.1211H31.429C28.6327 27.1211 26.3585 29.3962 26.3585 32.1916V38.0125H40.75V32.1916C40.75 29.3962 38.4758 27.1211 35.6798 27.1211Z" fill="#B3AC00"/>
                                <path d="M38.4023 23.8829C38.4023 26.5562 36.2273 28.7306 33.554 28.7306H33.553C30.8806 28.7297 28.7062 26.5562 28.7062 23.8829C28.7062 21.2101 30.8806 19.0361 33.553 19.0352H33.554C36.2273 19.0352 38.4023 21.2101 38.4023 23.8829Z" fill="#FDD1A3"/>
                                <path d="M40.75 32.1916V38.0125H33.553V27.1211H35.6798C38.4758 27.1211 40.75 29.3962 40.75 32.1916Z" fill="#FFF600"/>
                                <path d="M38.4023 23.8829C38.4023 26.5562 36.2273 28.7306 33.554 28.7306H33.553V19.0352H33.554C36.2273 19.0352 38.4023 21.2101 38.4023 23.8829Z" fill="#FFEDDE"/>
                                <path d="M10.0954 27.1211H5.84491C3.04858 27.1211 0.774414 29.3962 0.774414 32.1916V38.0125H15.1659V32.1916C15.1659 29.3962 12.8917 27.1211 10.0954 27.1211Z" fill="#B3AC00"/>
                                <path d="M12.8182 23.8829C12.8182 26.5562 10.6432 28.7306 7.96985 28.7306H7.96893C5.2962 28.7297 3.12213 26.5562 3.12213 23.8829C3.12213 21.2101 5.2962 19.0361 7.96893 19.0352H7.96985C10.6432 19.0352 12.8182 21.2101 12.8182 23.8829Z" fill="#FDD1A3"/>
                                <path d="M15.1659 32.1916V38.0125H7.96893V27.1211H10.0954C12.8917 27.1211 15.1659 29.3962 15.1659 32.1916Z" fill="#FFF600"/>
                                <path d="M12.8182 23.8829C12.8182 26.5562 10.6432 28.7306 7.96985 28.7306H7.96893V19.0352H7.96985C10.6432 19.0352 12.8182 21.2101 12.8182 23.8829Z" fill="#FFEDDE"/>
                                <path d="M7.15625 2.92188H7.14709L0.75 6.57788V8.04822L7.14709 11.7042H7.15625V2.92188Z" fill="#FEC000"/>
                                <path d="M33.9235 2.92188H36.2673V11.7042H33.9235V2.92188Z" fill="#FF9F00"/>
                                <path d="M22.8765 27.1211H18.6257C15.8297 27.1211 13.5555 29.3962 13.5555 32.1916V38.0125H27.947V32.1916C27.947 29.3962 25.6728 27.1211 22.8765 27.1211Z" fill="#B3AC00"/>
                                <path d="M25.5992 23.8829C25.5992 26.5562 23.4243 28.7306 20.7509 28.7306H20.75C18.0773 28.7297 15.9032 26.5562 15.9032 23.8829C15.9032 21.2101 18.0773 19.0361 20.75 19.0352H20.7509C23.4243 19.0352 25.5992 21.2101 25.5992 23.8829Z" fill="#FDD1A3"/>
                                <path d="M27.947 32.1916V38.0125H20.75V27.1211H22.8765C25.6728 27.1211 27.947 29.3962 27.947 32.1916Z" fill="#FFF600"/>
                                <path d="M25.5992 23.8829C25.5992 26.5562 23.4243 28.7306 20.7509 28.7306H20.75V19.0352H20.7509C23.4243 19.0352 25.5992 21.2101 25.5992 23.8829Z" fill="#FFEDDE"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_9067_24403">
                                  <rect width="40" height="40" fill="white" transform="translate(0.75 0.5)"/>
                                </clipPath>
                              </defs>
                            </svg>
                        </span>
                        <span className='block text-center partnerteam__titlef'>Team Creation</span>
                        <span className='block text-center partnerBox__para'>Boost player engagement with exciting features.</span>
                        <img src={ avatar } alt='img' className="partPhnImg" />
                    </div>

                    <div className='partner__card'>
                        <span className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                              <g clip-path="url(#clip0_9067_24431)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90781 0.394531C9.90781 5.58984 5.69531 9.80234 0.5 9.80234C3.27734 28.0992 10.7047 36.3992 20.5 39.6063C30.2969 36.3992 37.7227 28.0992 40.5 9.80234C35.3047 9.80234 31.0922 5.58984 31.0922 0.394531H9.90781Z" fill="#00FFFF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52441 12.6383C5.62051 18.1547 7.46348 23.8461 10.6916 28.3305C13.2604 31.9 16.483 34.3875 20.5002 35.9172C24.5197 34.3867 27.7416 31.9 30.3104 28.3305C33.5393 23.8461 35.3814 18.1547 36.4775 12.6383C32.4158 11.3055 29.2471 8.00781 28.0908 3.87109H12.9111C11.7549 8.00703 8.58379 11.3047 4.52441 12.6383Z" fill="#F1F1F1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89292 12.7516C10.0234 11.3937 13.2585 8.06094 14.4835 3.87109H12.9109C11.7546 8.00781 8.58354 11.3055 4.52417 12.6383C5.62026 18.1547 7.46323 23.8461 10.6914 28.3305C13.2601 31.9 16.4828 34.3875 20.5 35.9172C17.2046 34.325 14.4789 32.0109 12.2398 28.8992C8.91558 24.2828 7.02183 18.4273 5.89292 12.7516Z" fill="#D9D9D9"/>
                                <path d="M24.5904 16.493V13.118C24.5904 11.9953 24.1295 10.9742 23.3881 10.232C22.6467 9.48984 21.6248 9.02969 20.4998 9.02969C19.3771 9.02969 18.3561 9.49063 17.6139 10.232C16.8717 10.9734 16.4115 11.9945 16.4115 13.118V16.7141H14.374V13.118C14.374 11.4328 15.0631 9.90234 16.1725 8.79063C17.2818 7.68125 18.8146 6.99219 20.4998 6.99219C22.1873 6.99219 23.7178 7.68125 24.8272 8.79063C25.9389 9.90234 26.6279 11.4328 26.6279 13.118V16.493C26.6279 16.7273 26.435 16.918 26.2006 16.918H25.0154C24.7803 16.918 24.5904 16.7273 24.5904 16.493Z" fill="#2F5274"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.076 15.5938H26.9268C27.7416 15.5938 28.408 16.2602 28.408 17.075V24.7555C28.408 25.5703 27.7416 26.2367 26.9268 26.2367H14.076C13.2611 26.2367 12.5947 25.5703 12.5947 24.7555V17.075C12.5939 16.2602 13.2611 15.5938 14.076 15.5938Z" fill="#01BABA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4998 24.318C22.3732 24.318 23.9014 22.7922 23.9014 20.9187C23.9014 19.0453 22.3732 17.5195 20.4998 17.5195C18.6287 17.5195 17.1006 19.0453 17.1006 20.9187C17.1006 22.7922 18.6287 24.318 20.4998 24.318Z" fill="#007979"/>
                                <path d="M21.6248 19.5291C21.8748 19.2768 22.285 19.2768 22.535 19.5291C22.7873 19.7814 22.7873 20.1893 22.535 20.4416L20.6748 22.3018C20.4225 22.5541 20.0146 22.5541 19.7623 22.3018L18.4646 21.0041C18.2123 20.7518 18.2123 20.3439 18.4646 20.0916C18.717 19.8393 19.1248 19.8393 19.3771 20.0916L20.2186 20.933L21.6248 19.5291Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3758 24.7563V17.0758C13.3758 16.4289 13.7945 15.8758 14.3742 15.6758C14.525 15.6227 14.6883 15.5938 14.857 15.5938H14.3742H14.075C13.2602 15.5938 12.5938 16.2602 12.5938 17.075V24.7555C12.5938 25.5703 13.2602 26.2367 14.075 26.2367H14.857C14.0422 26.2375 13.3758 25.5711 13.3758 24.7563Z" fill="#01BABA"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_9067_24431">
                                  <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                              </defs>
                            </svg>
                        </span>
                        <span className='block text-center partnerSec__titlef'>Secure</span>
                        <span className='block text-center partnerBox__para'>Full range of products, payments, and services to grow your business.</span>
                        <img src={ partner } alt='img' className="partPhnImg" />
                    </div>
                </div>
                <span className='gameImg__basket' data-scroll data-scroll-speed="-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="179" height="278" viewBox="0 0 179 278" fill="none">
                        <path d="M178.737 63.6653C181.033 57.1307 167.613 31.7419 165.597 28.4746C163.581 25.2073 165.597 17.4132 165.597 16.159C165.597 14.9021 160.803 11.8851 160.046 10.125C159.291 8.36357 159.291 3.84073 159.291 2.58387C159.291 1.32701 157.526 0.320471 157.526 1.57733C157.526 2.83418 155.759 7.61128 156.265 10.1237C156.769 12.6374 156.516 19.172 156.516 19.172C156.516 19.172 150.965 14.6479 149.959 14.8995C148.951 15.1498 146.934 13.893 147.183 14.8995C147.435 15.906 154.12 18.7959 154.876 21.4341C155.634 24.0736 158.66 27.8442 161.308 32.3684C163.96 36.8925 163.959 46.3183 163.959 51.2199C163.959 56.1215 163.579 59.8921 157.148 63.4294C150.716 66.9667 136.718 79.4972 133.341 78.7423C129.967 77.9887 130.665 72.3322 131.045 70.4476C131.423 68.563 133.316 62.9065 133.316 62.9065C134.071 52.7258 119.318 43.3013 113.642 50.8424C107.969 58.3823 113.642 70.4476 113.642 70.4476C117.423 75.9796 113.896 73.7162 110.112 73.4646C106.33 73.2129 78.5852 78.7423 76.568 78.2417C74.552 77.7384 66.7314 74.7201 52.8603 74.4698C42.8685 74.2902 31.5696 74.8905 25.8426 74.0202C37.152 72.8446 45.9681 63.3193 45.9681 51.7376C45.9681 39.363 35.9027 29.3304 23.4834 29.3304C11.068 29.3304 1 39.3617 1 51.7376C1 56.5344 2.52546 60.9694 5.10164 64.6141C7.14128 69.3087 11.5441 75.8577 16.5399 79.4959C23.0968 84.273 47.8157 84.7736 64.7141 88.7985C81.6138 92.8194 102.042 90.8076 102.042 90.8076C102.042 90.8076 102.042 100.862 103.052 106.642C104.062 112.425 108.851 120.718 108.851 122.479C108.851 124.238 103.052 136.554 104.564 137.809C106.076 139.066 110.617 139.069 111.625 138.997C112.632 138.926 111.121 149.624 111.121 151.635C111.121 153.647 101.535 181.799 100.274 183.307C99.0132 184.814 95.4836 185.822 93.97 187.077C92.4577 188.334 91.4477 193.111 89.6816 193.361C87.9142 193.613 85.647 194.367 83.6271 196.378C81.6085 198.389 79.0889 219.755 78.8364 221.011C78.5852 222.266 83.1235 222.266 86.6531 221.263C90.184 220.257 93.4637 207.939 96.2371 206.935C99.0145 205.929 121.205 204.672 122.466 204.923C123.727 205.172 136.338 190.093 136.338 190.093C136.338 190.093 142.14 214.978 143.654 215.48C145.166 215.983 149.202 216.487 149.202 216.487C141.638 217.744 118.18 235.59 115.404 236.595C112.631 237.6 103.554 235.088 102.04 237.602C100.526 240.115 108.85 276.061 112.632 276.813C116.415 277.568 115.658 275.807 116.919 275.558C118.18 275.307 116.919 249.415 119.441 247.907C121.963 246.398 167.615 230.814 168.876 229.055C170.135 227.298 167.364 214.728 168.876 214.225C170.389 213.721 174.676 208.695 174.676 207.188C174.676 207.188 159.542 160.939 159.542 159.431C159.542 157.922 154.5 154.654 153.994 153.398C153.488 152.141 152.482 139.322 152.482 139.322C152.482 139.322 159.291 134.044 160.046 131.276C160.803 128.512 152.482 93.0723 154.5 88.7998C156.519 84.5286 176.442 70.2012 178.737 63.6653Z" fill="#111113" stroke="#FF6700"/>
                    </svg>                
                </span>
            </div>
        </div>

        {/* Fantasy Section */}

        <div className='view__home partner__viewContainer grid place-content-center'>
            <div className='fantasy__container container mx-auto'>
                <span className='fantasy__basket' data-scroll data-scroll-speed="5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="436" viewBox="0 0 152 436" fill="none">
                        <path d="M93.6123 209.392C93.6123 209.392 96.6291 157.237 96.8548 148.231C96.8548 148.231 149.921 109.5 150.971 101.394C152.025 93.2889 124.098 61.988 125.229 56.8116C125.478 55.6659 125.846 54.5913 126.257 53.5439C129.826 48.1835 131.913 41.7548 131.913 34.8348C131.913 16.1466 116.764 1 98.0779 1C79.3918 1 64.243 16.1466 64.243 34.8348C64.243 35.8132 64.3079 36.7749 64.3873 37.7324C63.9671 38.0878 63.1978 38.23 61.4981 37.8913C56.9948 36.9923 32.2271 38.5666 13.7626 53.2031C-4.70186 67.8397 18.7174 130.437 18.4916 135.392C18.2679 140.345 3.62514 190.786 4.07672 205.648L17.3627 210.375C17.3627 210.375 17.3606 225.915 14.21 231.091C11.0594 236.272 -0.428601 294.368 1.14774 325.218C1.14774 325.218 30.6466 350.665 31.0982 353.815C31.5476 356.97 28.8424 371.372 27.4939 378.581C26.1434 385.789 24.5649 394.798 25.466 395.026C26.3692 395.247 40.3283 389.617 43.2573 380.839C46.1821 372.058 49.1111 351.11 49.1111 348.185C49.1111 345.26 32.4466 332.648 32.4466 332.648L39.1659 334.224C39.1659 334.224 53.6143 287.613 56.0917 286.94C58.5691 286.265 76.283 326.121 77.3325 326.121C78.382 326.121 86.4916 323.415 86.4916 323.415C86.4916 323.415 124.32 382.411 125.225 385.342C126.12 388.265 129.504 430.372 131.53 433.527C133.552 436.682 149.995 432.632 150.894 429.927C151.793 427.224 144.364 391.871 142.111 384.891C139.861 377.91 133.102 335.355 116.44 315.987L124.096 310.581C124.096 310.581 105.349 242.924 92.797 224.788C83.8658 211.882 93.6123 209.392 93.6123 209.392ZM86.4958 111.304C82.2162 110.624 77.4726 111.162 76.7116 107.2C76.7116 107.2 74.968 104.288 76.7116 95.5656C78.4552 86.8393 75.5471 62.4103 64.496 60.6646C53.4428 58.9189 42.9729 75.207 42.3918 83.9313C41.8106 92.6597 49.3724 108.946 45.2998 107.202C41.2273 105.456 37.738 72.3011 30.7574 68.8076C30.7574 68.8076 56.9342 50.778 60.4235 51.3571C63.365 51.8484 72.3296 59.3391 75.8419 60.2925C81.7918 65.4939 89.5585 68.6696 98.0799 68.6696C105.123 68.6696 111.661 66.5121 117.08 62.8284C120.525 70.1394 130.857 93.2618 130.857 94.4137C130.857 95.7663 90.7753 111.981 86.4958 111.304Z" fill="#0D0E10" stroke="#FF6700"/>
                    </svg>
                </span>
                <span className='block md:hidden partner__title text-center'>How to Get Started with Fantasy Sports?</span>
                <span className='hidden md:block  partner__title text-center' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">How to Get Started with Fantasy Sports?</span>
                <span className='block partner__para text-center'>Getting started with fantasy sports is easy! Follow these simple steps:</span>
                <div className='fantasy__cards flex items-center justify-center gap-6 flex-wrap'>
                    <div className='sign__up grid place-content-center'>
                        <span className='block fantacy__title'>Sign Up</span>
                        <span className='block fantacy__para'>Register in Minutes – Just Your Email or Mobile Needed!</span>
                    </div>
                    <div className='sign__up1 grid place-content-center'>
                        <span className='block fantacy__title'>Choose Your Sport</span>
                        <span className='block fantacy__para'>Select your preferred sport from our list, including Cricket, Football, Kabaddi, Basketball, and more.</span>
                    </div>
                    <div className='sign__up2 grid place-content-center'>
                        <span className='block fantacy__title'>Create Your Team</span>
                        <span className='block fantacy__para'>Use your sports knowledge to pick the best players for your fantasy team based on their recent performances and match conditions.</span>
                    </div>
                    <div className='sign__up3 grid place-content-center'>
                        <span className='block fantacy__title'>Join Contests</span>
                        <span className='block fantacy__para'>Enter free or paid contests and compete with other players to test your skills.</span>
                    </div>
                    <div className='sign__up4 grid place-content-center'>
                        <span className='block fantacy__title'>Track Your Performance</span>
                        <span className='block fantacy__para'>Monitor your team’s performance in real-time with live match updates and leaderboards.</span>
                    </div>
                </div>
                <span className='fantasy__cric' data-scroll data-scroll-speed="-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="217" height="430" viewBox="0 0 217 430" fill="none">
                        <path d="M212.342 358.115C209.024 357.928 208.23 358.91 207.108 358.022C205.987 357.134 205.894 357.508 204.632 357.648C203.37 357.788 196.549 357.181 193.184 354.891C189.82 352.555 188.698 355.031 186.456 353.256C184.213 351.434 180.335 347.275 176.83 344.892C173.326 342.462 160.756 330.22 160.756 330.22C160.756 330.22 160.756 327.696 158.887 326.949C157.018 326.201 152.86 322.089 152.205 324.332C149.215 321.482 147.252 319.192 145.243 319.379C143.234 319.613 141.131 316.856 140.664 315.968C140.243 315.081 139.402 312.137 137.534 309.894C135.664 307.651 133.141 306.997 132.534 305.362C131.926 303.727 124.03 285.737 122.207 282.606C120.385 279.429 121.319 278.307 119.404 276.391C117.488 274.476 117.254 273.915 117.254 273.915C117.254 273.915 125.384 266.018 125.384 253.496C125.384 240.927 122.02 234.712 119.544 231.955C121.926 231.301 120.712 230.6 117.955 225.974C115.198 221.301 113.189 221.675 114.077 218.731C114.918 215.788 111.227 215.507 109.778 213.077C108.376 210.601 106.273 205.555 104.965 204.34C103.61 203.078 103.236 201.302 103.797 196.817C104.405 192.378 101.461 196.817 102.302 189.995C103.143 183.173 101.367 181.257 99.8255 177.753C98.3302 174.248 98.3302 171.305 97.9096 169.716C97.536 168.081 97.0685 166.866 97.4424 165.23C97.8164 163.641 97.6759 156.399 97.6759 153.689C101.788 151.773 103.891 150.605 103.891 145.605C103.891 140.652 102.302 137.054 101.321 135.839C101.087 131.587 99.5451 126.588 93.6578 121.822C87.7704 117.009 83.5651 114.72 78.6586 112.757C73.7525 110.794 68.2388 106.449 68.2388 106.449C68.2388 106.449 67.5379 103.973 66.2297 104.206C68.3323 98.7859 69.2203 96.5431 66.6499 94.487C68.3323 90.5155 67.1174 87.8988 67.1174 87.8988L69.3602 86.0296C69.3602 86.0296 71.2294 86.6838 73.7991 84.8616C76.4158 82.9923 78.8455 79.6281 75.9487 77.7123C79.9672 76.0771 79.5463 70.7502 79.5463 70.7502C79.5463 70.7502 80.0607 71.5446 84.1258 67.1989C88.1443 62.8534 134.216 13.9782 136.599 11.0812C138.982 8.13751 134.356 3.41817 128.141 1.78237C121.88 0.1472 118.282 1.36184 116.927 2.81053C115.572 4.21228 68.5191 54.6297 68.5191 54.6297C68.5191 54.6297 62.6318 54.9101 60.2485 55.9379C57.8658 56.9661 56.9778 58.0875 56.9312 59.3487C54.8286 60.4704 54.0807 60.5167 53.9875 62.2458C50.5297 63.9748 49.9224 64.5821 50.0157 66.2176C47.1186 68.1331 46.1377 69.4886 46.3711 71.2173C41.3245 72.5255 39.6427 73.6469 39.7826 76.6842C36.6987 78.4129 35.297 80.7962 35.6242 81.9176C32.7738 83.2261 34.0354 85.1416 34.0354 85.1416C34.0354 85.1416 32.7738 85.7023 33.428 88.2255C30.1108 87.8519 20.7657 87.9451 14.1302 96.2158C7.54193 104.533 9.83137 113.738 9.83137 113.738C9.83137 113.738 1 116.729 1 119.252C1 121.822 6.79413 122.663 15.205 121.121C15.4555 122.808 15.4545 124.097 15.6277 125.493C15.3531 125.642 15.0901 125.792 14.8139 125.94C11.914 127.501 9.40894 128.849 9.336 130.23C9.24942 131.909 14.937 143.312 15.7723 144.564C16.3565 145.442 17.0332 146.09 17.5676 146.532C17.1893 146.925 16.7992 147.329 16.3264 147.755C13.99 149.904 11.5601 151.773 9.5044 157.193C7.44839 162.567 9.73782 169.062 12.5416 172.613C15.3918 176.164 17.8216 177.052 18.8495 179.715C19.8777 182.378 24.7369 186.07 26.0451 188.593C27.3536 191.163 28.8489 191.163 29.4096 193.827C29.9703 196.49 32.2131 198.125 32.6336 200.275C33.0075 202.377 37.0726 205.695 39.3154 209.246C41.6048 212.797 46.1374 218.217 49.1277 223.638C52.1649 229.058 51.791 230.833 56.3236 237.188C60.8558 243.543 64.0332 252.981 65.4353 255.037C66.8371 257.093 68.0983 258.121 66.3229 261.485C64.5006 264.85 48.1464 281.671 42.633 289.474C38.3339 282.886 28.8955 273.307 18.4756 273.307C13.3357 273.307 14.1302 275.129 14.6442 279.989C15.158 284.895 16.8401 296.763 14.4571 300.735C12.0272 304.706 14.5973 308.818 14.5973 308.818C14.5973 308.818 12.5413 314.519 17.7747 317.65C17.3542 321.715 18.5689 323.958 20.9988 325.313C19.4568 329.751 22.7744 332.508 24.2697 332.555C26.1386 337.555 26.6993 336.293 28.475 339.704C30.2507 343.069 55.1089 400.308 55.7162 401.943C56.3236 403.532 55.9496 404.934 55.9496 404.934C55.9496 404.934 51.6042 407.177 46.7913 411.102C41.9318 414.98 38.7547 415.307 35.5304 416.429C32.2594 417.55 32.026 420.494 32.353 422.923C32.6799 425.4 44.5016 427.83 48.2863 428.203C52.071 428.624 60.3417 429.699 68.0047 426.288C75.6677 422.923 76.275 423.064 77.6771 421.802C79.0789 420.541 79.2191 422.783 82.7235 421.054C86.2278 419.372 92.2557 417.83 95.6668 413.485C99.1246 409.093 96.4146 406.336 94.4985 405.401C94.4985 400.962 93.0967 399.093 93.751 395.869C94.4049 392.598 88.7513 389.468 84.9666 387.131C81.1818 384.842 78.425 378.674 78.425 378.674C78.425 378.674 79.313 378.441 78.7519 376.151C78.1446 373.861 76.7429 367.273 75.8549 368.114C76.0417 364.189 75.8548 362.04 74.0792 354.237C72.2569 346.433 71.6026 343.816 71.6026 343.816C71.6026 343.816 73.9856 344.33 72.2569 339.798C70.5282 335.312 68.9862 333.163 67.3974 334.564C65.0144 331.667 66.4628 330.172 66.0889 328.77C65.7153 327.322 64.8273 324.004 64.3602 323.116C63.893 322.229 64.5004 322.042 63.893 320.313C63.2857 318.584 61.5101 319.892 61.5101 318.911C61.5101 317.93 60.3886 314.846 61.5567 314.986C62.7716 315.126 65.5751 316.948 70.6684 313.117C75.8083 309.285 77.8173 310.547 80.0604 307.556C82.3499 304.519 88.0504 299.566 88.0504 299.566L93.9377 308.07C93.9377 308.07 85.8076 313.864 90.0125 317.556C94.2181 321.247 102.956 335.031 104.077 337.695C105.198 340.405 105.432 343.956 113.049 344.797C113.563 347.647 117.067 348.441 117.067 348.441C117.067 348.441 118.282 351.432 125.945 351.526C127.814 353.161 128.561 352.18 132.533 354.376C136.505 356.525 162.578 368.02 166.737 370.356C170.942 372.646 168.185 372.272 171.082 375.075C173.979 377.832 172.951 378.253 179.679 379.468C186.408 380.636 186.548 380.122 185.941 381.991C185.333 383.86 187.903 383.954 187.903 387.458C187.903 390.962 188.931 396.429 187.529 400.448C186.081 404.513 183.558 406.429 186.268 408.671C188.931 410.915 193.043 411.054 197.622 408.531C202.154 405.961 205.612 398.345 206.406 396.102C207.247 393.859 206.266 389.794 206.406 388.486C206.593 387.224 207.621 384.234 209.116 383.86C210.611 383.486 215.985 373.207 216.826 368.02C217.622 362.881 215.612 358.256 212.342 358.115ZM14.0994 134.701C15.1374 134.546 16.8443 133.968 18.4353 133.363C18.6583 133.838 18.8631 134.242 19.0604 134.644C18.0386 136.353 16.8249 138.496 16.1843 139.637C15.4742 138.096 14.7419 136.388 14.0994 134.701ZM18.0348 132.503C17.2781 132.787 16.4986 133.081 15.8113 133.303C16.4573 133.013 17.2086 132.698 17.9805 132.386C17.9983 132.425 18.017 132.465 18.0348 132.503ZM13.6221 133.368C13.4759 132.951 13.3348 132.543 13.2067 132.141C14.0208 132.185 14.9696 132.185 16.1947 132.096C14.8954 132.651 14.1029 133.056 13.6221 133.368ZM19.5577 135.638C20.2963 137.04 20.9201 137.951 21.6533 138.457C21.6514 138.498 21.6508 138.528 21.6489 138.569C19.1574 139.566 17.7072 139.982 16.9819 140.125C17.554 139.104 18.6053 137.247 19.5577 135.638ZM15.2592 126.764C15.4482 126.662 15.629 126.56 15.8183 126.457C16.0435 127.682 16.405 129.014 17.261 130.841C17.2971 130.919 17.3209 130.969 17.3564 131.046C15.6626 131.196 14.0322 131.268 12.9358 131.218C12.6425 130.194 12.4024 129.222 12.3114 128.421C13.2149 127.864 14.2897 127.285 15.2592 126.764ZM11.8731 130.947C11.8861 130.995 11.8972 131.041 11.9102 131.09C11.8607 131.076 11.7881 131.067 11.75 131.052C11.776 131.025 11.8306 130.983 11.8731 130.947ZM16.5483 144.045C15.3185 142.201 10.2078 131.453 10.2719 130.28C10.2899 129.931 10.7533 129.482 11.4469 128.989C11.4922 129.283 11.5867 129.627 11.6552 129.946C11.1938 130.244 10.5678 130.737 10.7783 131.346C10.8998 131.696 11.3977 131.928 12.2089 132.058C12.4249 132.765 12.6628 133.483 12.9326 134.225C12.9422 134.276 12.9583 134.324 12.9755 134.371L13.0122 134.44C13.8026 136.586 14.7407 138.766 15.6239 140.638L15.4507 140.948L15.8237 141.053C16.6644 142.81 17.4227 144.26 17.8509 144.964C18.082 145.346 18.1845 145.57 18.2847 145.787C18.2631 145.811 18.2435 145.831 18.2216 145.855C17.7506 145.469 17.1008 144.874 16.5483 144.045ZM18.9396 145.084C18.8305 144.872 18.8045 144.734 18.6497 144.48C18.2377 143.802 17.5898 142.566 16.8702 141.08C17.6415 140.963 19.0655 140.596 21.6077 139.596C21.5227 142.295 21.6603 142.946 20.6252 144.064C20.1659 143.895 19.6474 144.338 18.9396 145.084ZM69.1268 129.392C68.0054 129.298 63.9403 128.738 62.959 131.494C60.903 129.579 53.8474 124.719 53.8474 124.719C53.8474 124.719 58.9406 122.009 59.5013 119.766C61.1365 119.813 60.4359 118.925 61.5573 118.318C62.6787 117.757 63.0992 117.57 63.0992 117.57C63.0992 117.57 71.2294 124.252 73.1452 128.084C71.0892 128.925 70.2482 129.486 69.1268 129.392Z" fill="#101010" stroke="#FF6700"/>
                    </svg>
                </span>
            </div>
        </div>

        </div>

        {/* Why play with 7 stone */}


        <div className='whyPlay__section flex items-center justify-center'>
            <div className='container mx-auto whyPlay__container flex jusity-center items-center'>
                <div className='grid place-content-center'>
                <div className='w-full lg:w-3/5'>
                    <span className='block md:hidden whyPlay__title'>Why Play with 7Stones</span>
                    <span className='hidden md:block whyPlay__title' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Why Play with 7Stones</span>
                    <span className='block whyPlay__para'>7Stones brings you the ultimate fantasy sports experience with unbeatable offers, exciting rewards, and seamless gameplay.</span>
                </div>
                <div className='whyPlay__card'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <g clip-path="url(#clip0_9114_7382)">
                            <path d="M15.5297 7.61408C14.2109 7.61408 13.1383 8.68673 13.1383 10.0055C13.1383 11.3258 14.2109 12.4 15.5297 12.4C16.8484 12.4 17.9211 11.3258 17.9211 10.0055C17.9211 8.68673 16.8484 7.61408 15.5297 7.61408ZM15.5297 11.1508C14.9 11.1508 14.3867 10.6367 14.3867 10.0055C14.3867 9.3758 14.9 8.86329 15.5297 8.86329C16.1601 8.86329 16.6727 9.3758 16.6727 10.0055C16.6727 10.6367 16.1601 11.1508 15.5297 11.1508ZM21.8414 7.69767C21.543 7.52501 21.1609 7.62736 20.9883 7.92658L14.4422 19.2649C14.2695 19.5633 14.3719 19.9453 14.6703 20.118C14.7687 20.175 14.8766 20.2016 14.982 20.2016C15.1976 20.2016 15.4078 20.0899 15.5234 19.8891L22.0695 8.55079C22.2422 8.25236 22.1398 7.87033 21.8414 7.69767ZM20.982 15.4156C19.6633 15.4156 18.5906 16.4899 18.5906 17.8102C18.5906 19.1289 19.6633 20.2016 20.982 20.2016C22.3008 20.2016 23.3734 19.1289 23.3734 17.8102C23.3734 16.4899 22.3008 15.4156 20.982 15.4156ZM20.982 18.9524C20.3516 18.9524 19.8391 18.4399 19.8391 17.8102C19.8391 17.1789 20.3516 16.6649 20.982 16.6649C21.6125 16.6649 22.125 17.1789 22.125 17.8102C22.125 18.4399 21.6125 18.9524 20.982 18.9524ZM20.982 15.4156C19.6633 15.4156 18.5906 16.4899 18.5906 17.8102C18.5906 19.1289 19.6633 20.2016 20.982 20.2016C22.3008 20.2016 23.3734 19.1289 23.3734 17.8102C23.3734 16.4899 22.3008 15.4156 20.982 15.4156ZM20.982 18.9524C20.3516 18.9524 19.8391 18.4399 19.8391 17.8102C19.8391 17.1789 20.3516 16.6649 20.982 16.6649C21.6125 16.6649 22.125 17.1789 22.125 17.8102C22.125 18.4399 21.6125 18.9524 20.982 18.9524ZM21.8414 7.69767C21.543 7.52501 21.1609 7.62736 20.9883 7.92658L14.4422 19.2649C14.2695 19.5633 14.3719 19.9453 14.6703 20.118C14.7687 20.175 14.8766 20.2016 14.982 20.2016C15.1976 20.2016 15.4078 20.0899 15.5234 19.8891L22.0695 8.55079C22.2422 8.25236 22.1398 7.87033 21.8414 7.69767ZM17.9211 10.0055C17.9211 8.68673 16.8484 7.61408 15.5297 7.61408C14.2109 7.61408 13.1383 8.68673 13.1383 10.0055C13.1383 11.3258 14.2109 12.4 15.5297 12.4C16.8484 12.4 17.9211 11.3258 17.9211 10.0055ZM14.3867 10.0055C14.3867 9.3758 14.9 8.86329 15.5297 8.86329C16.1601 8.86329 16.6727 9.3758 16.6727 10.0055C16.6727 10.6367 16.1601 11.1508 15.5297 11.1508C14.9 11.1508 14.3867 10.6367 14.3867 10.0055ZM34.5906 34.2844H34.2891V33.1742C34.2891 33.1305 34.2922 33.0938 34.3 33.0477L35.3414 26.9734C35.6344 25.2656 35.432 23.7375 34.7031 22.1649L32.3914 17.1758C32.1351 16.6203 31.6812 16.2125 31.132 16.0156L31.4789 15.6711C31.9578 15.1945 32.1937 14.5875 32.1602 13.918C32.1305 13.243 31.8391 12.6602 31.3187 12.2328L30.5008 11.557C30.1664 11.2813 30.0344 10.8672 30.1484 10.4485L30.5891 8.82501C30.7664 8.17423 30.6672 7.53048 30.3031 6.96095C29.9375 6.39533 29.3945 6.03751 28.7328 5.92658L27.6844 5.74923C27.2516 5.67658 26.9383 5.39064 26.8258 4.96486L26.3953 3.33829C26.2211 2.68673 25.8141 2.1797 25.2164 1.87033C24.6172 1.56173 23.9672 1.52189 23.3367 1.75626L22.3414 2.12814C21.9359 2.28048 21.5117 2.18751 21.2062 1.87892L20.0211 0.685169C19.5453 0.206263 18.9367 -0.0304558 18.2656 0.00313799C17.5914 0.0336067 17.0086 0.325013 16.5812 0.844544L15.9047 1.66329C15.6289 1.99767 15.2148 2.1297 14.7961 2.01564L13.1734 1.57501C12.5234 1.39767 11.8805 1.49611 11.3109 1.86095C10.7437 2.22736 10.3851 2.77033 10.2742 3.43204L10.0992 4.47892C10.0273 4.90704 9.73437 5.22814 9.31328 5.33829L7.68593 5.76876C7.03515 5.9422 6.52734 6.35001 6.21796 6.94689C5.90859 7.54845 5.87031 8.19845 6.10624 8.82579L6.47656 9.82111C6.63046 10.2336 6.53984 10.6477 6.22734 10.9578L5.03203 12.1445C4.55703 12.6195 4.32109 13.2258 4.35156 13.8977C4.38124 14.5695 4.67187 15.1524 5.19374 15.5836L6.01249 16.2578C6.34609 16.5344 6.47812 16.9492 6.36562 17.3664L5.92187 18.993C5.74765 19.6438 5.84765 20.2867 6.20937 20.8531C6.57265 21.4195 7.11562 21.7781 7.77968 21.8899L8.82499 22.0641C9.26093 22.1383 9.57578 22.4258 9.68828 22.8508L10.118 24.475C10.2891 25.1281 10.6977 25.6367 11.2961 25.9445C11.8961 26.2555 12.5461 26.2938 13.1742 26.0578L14.1695 25.6875C14.582 25.5336 14.9961 25.6242 15.3062 25.9367L16.493 27.1305C16.9391 27.5797 17.5039 27.8149 18.132 27.8149C18.1695 27.8149 18.2078 27.8141 18.2461 27.8125C18.918 27.7828 19.5008 27.4914 19.9312 26.9703L20.6062 26.1516C20.8828 25.818 21.2969 25.6859 21.7156 25.8008L22.9266 26.1289V27.1617C22.9266 29.4906 23.8617 30.7445 25.0453 32.3313L25.0875 32.3875V34.2844H24.7867C24.2016 34.2844 23.7258 34.7602 23.7258 35.3445V38.9367C23.7258 39.5227 24.2016 40 24.7867 40H34.5906C35.1758 40 35.6516 39.5227 35.6516 38.9367V35.3445C35.6516 34.7602 35.1758 34.2844 34.5906 34.2844ZM22.9266 21.1985V24.8352L22.043 24.5953C21.1523 24.3524 20.2328 24.6438 19.643 25.3563L18.968 26.175C18.7633 26.4235 18.5086 26.5508 18.1906 26.5649C17.8687 26.5789 17.6039 26.4758 17.3789 26.25L16.193 25.057C15.5414 24.4 14.5992 24.1938 13.7328 24.5172L12.7367 24.8875C12.4383 25 12.1547 24.9828 11.8695 24.8352C11.5851 24.6891 11.407 24.4672 11.3258 24.157L10.8961 22.5305C10.6594 21.6391 9.94687 20.9891 9.03359 20.8328L7.98593 20.6578C7.67109 20.6047 7.43359 20.4484 7.26171 20.1797C7.08906 19.9094 7.04531 19.6266 7.12812 19.3188L7.57109 17.693C7.81093 16.8024 7.51874 15.8836 6.80702 15.2953L5.98906 14.6203C5.74062 14.4149 5.61328 14.161 5.59921 13.8422C5.58437 13.5211 5.68828 13.2539 5.91328 13.0289L7.10624 11.8445C7.76328 11.1938 7.97031 10.2508 7.64687 9.38517L7.27578 8.38829C7.16406 8.08986 7.18124 7.80548 7.32812 7.52033C7.47499 7.23673 7.69765 7.05783 8.00703 6.97579L9.63124 6.54611C10.5266 6.31173 11.1781 5.59923 11.3312 4.68517L11.5062 3.63829C11.5586 3.32345 11.7164 3.08595 11.9867 2.91173C12.2562 2.73908 12.5367 2.69611 12.8461 2.7797L14.4687 3.22033C15.3609 3.46408 16.2805 3.17111 16.868 2.45783L17.5445 1.63908C17.7477 1.3922 18.0016 1.26486 18.3242 1.25079C18.6437 1.23439 18.9094 1.33829 19.1344 1.56564L20.3195 2.75861C20.9711 3.41642 21.9141 3.62267 22.7797 3.29845L23.7726 2.92658C24.0726 2.81564 24.3578 2.83283 24.6437 2.9797C24.9273 3.12658 25.1055 3.34923 25.1883 3.65939L25.618 5.28517C25.8547 6.17814 26.568 6.82814 27.4773 6.98048L28.5258 7.15783C28.8414 7.21095 29.0789 7.36798 29.2523 7.63595C29.425 7.90626 29.468 8.18751 29.3836 8.49767L28.943 10.1203C28.7 11.0125 28.9922 11.9328 29.7062 12.5203L30.5242 13.1969C30.7711 13.4 30.8984 13.6539 30.9125 13.9758C30.9281 14.2945 30.8258 14.5586 30.5977 14.7852L29.4055 15.9711C29.3766 15.9992 29.35 16.0289 29.3234 16.0578C29.2984 16.082 29.2758 16.1078 29.2547 16.136C28.7195 16.7758 28.568 17.6352 28.8656 18.432L29.2375 19.425C29.3484 19.7242 29.3312 20.0086 29.1836 20.2945C29.0367 20.5789 28.8148 20.7563 28.5047 20.8383L27.8023 21.0242C27.7133 19.7594 26.6562 18.7578 25.3687 18.7578C24.0219 18.7578 22.9266 19.8524 22.9266 21.1985ZM24.1758 27.1617V21.1985C24.1758 20.5414 24.7109 20.007 25.3687 20.007C26.0258 20.007 26.5602 20.5414 26.5602 21.1985V26.0391C26.5602 26.3844 26.8398 26.6641 27.1852 26.6641C27.5297 26.6641 27.8094 26.3844 27.8094 26.0391V22.3141L28.8227 22.0461C29.4758 21.8742 29.9844 21.4664 30.293 20.8672C30.6023 20.2695 30.6422 19.6203 30.4078 18.9883L30.0352 17.9945C29.9234 17.6945 29.9414 17.3938 30.0797 17.132H30.3695C30.7672 17.132 31.0914 17.3391 31.2578 17.7L33.5695 22.6899C34.1867 24.0219 34.3586 25.3156 34.1101 26.7617L33.0687 32.8399C33.0492 32.957 33.0406 33.061 33.0406 33.1742V34.2844H26.3367V32.1805C26.3367 32.0461 26.2937 31.9149 26.2133 31.8078L26.0469 31.5836C24.9195 30.0742 24.1758 29.0766 24.1758 27.1617ZM34.4023 38.7508H24.975V35.5328H34.4023V38.7508ZM20.982 15.4156C19.6633 15.4156 18.5906 16.4899 18.5906 17.8102C18.5906 19.1289 19.6633 20.2016 20.982 20.2016C22.3008 20.2016 23.3734 19.1289 23.3734 17.8102C23.3734 16.4899 22.3008 15.4156 20.982 15.4156ZM20.982 18.9524C20.3516 18.9524 19.8391 18.4399 19.8391 17.8102C19.8391 17.1789 20.3516 16.6649 20.982 16.6649C21.6125 16.6649 22.125 17.1789 22.125 17.8102C22.125 18.4399 21.6125 18.9524 20.982 18.9524ZM21.8414 7.69767C21.543 7.52501 21.1609 7.62736 20.9883 7.92658L14.4422 19.2649C14.2695 19.5633 14.3719 19.9453 14.6703 20.118C14.7687 20.175 14.8766 20.2016 14.982 20.2016C15.1976 20.2016 15.4078 20.0899 15.5234 19.8891L22.0695 8.55079C22.2422 8.25236 22.1398 7.87033 21.8414 7.69767ZM17.9211 10.0055C17.9211 8.68673 16.8484 7.61408 15.5297 7.61408C14.2109 7.61408 13.1383 8.68673 13.1383 10.0055C13.1383 11.3258 14.2109 12.4 15.5297 12.4C16.8484 12.4 17.9211 11.3258 17.9211 10.0055ZM14.3867 10.0055C14.3867 9.3758 14.9 8.86329 15.5297 8.86329C16.1601 8.86329 16.6727 9.3758 16.6727 10.0055C16.6727 10.6367 16.1601 11.1508 15.5297 11.1508C14.9 11.1508 14.3867 10.6367 14.3867 10.0055ZM15.5297 7.61408C14.2109 7.61408 13.1383 8.68673 13.1383 10.0055C13.1383 11.3258 14.2109 12.4 15.5297 12.4C16.8484 12.4 17.9211 11.3258 17.9211 10.0055C17.9211 8.68673 16.8484 7.61408 15.5297 7.61408ZM15.5297 11.1508C14.9 11.1508 14.3867 10.6367 14.3867 10.0055C14.3867 9.3758 14.9 8.86329 15.5297 8.86329C16.1601 8.86329 16.6727 9.3758 16.6727 10.0055C16.6727 10.6367 16.1601 11.1508 15.5297 11.1508ZM21.8414 7.69767C21.543 7.52501 21.1609 7.62736 20.9883 7.92658L14.4422 19.2649C14.2695 19.5633 14.3719 19.9453 14.6703 20.118C14.7687 20.175 14.8766 20.2016 14.982 20.2016C15.1976 20.2016 15.4078 20.0899 15.5234 19.8891L22.0695 8.55079C22.2422 8.25236 22.1398 7.87033 21.8414 7.69767ZM20.982 15.4156C19.6633 15.4156 18.5906 16.4899 18.5906 17.8102C18.5906 19.1289 19.6633 20.2016 20.982 20.2016C22.3008 20.2016 23.3734 19.1289 23.3734 17.8102C23.3734 16.4899 22.3008 15.4156 20.982 15.4156ZM20.982 18.9524C20.3516 18.9524 19.8391 18.4399 19.8391 17.8102C19.8391 17.1789 20.3516 16.6649 20.982 16.6649C21.6125 16.6649 22.125 17.1789 22.125 17.8102C22.125 18.4399 21.6125 18.9524 20.982 18.9524ZM21.8414 7.69767C21.543 7.52501 21.1609 7.62736 20.9883 7.92658L14.4422 19.2649C14.2695 19.5633 14.3719 19.9453 14.6703 20.118C14.7687 20.175 14.8766 20.2016 14.982 20.2016C15.1976 20.2016 15.4078 20.0899 15.5234 19.8891L22.0695 8.55079C22.2422 8.25236 22.1398 7.87033 21.8414 7.69767ZM15.5297 7.61408C14.2109 7.61408 13.1383 8.68673 13.1383 10.0055C13.1383 11.3258 14.2109 12.4 15.5297 12.4C16.8484 12.4 17.9211 11.3258 17.9211 10.0055C17.9211 8.68673 16.8484 7.61408 15.5297 7.61408ZM15.5297 11.1508C14.9 11.1508 14.3867 10.6367 14.3867 10.0055C14.3867 9.3758 14.9 8.86329 15.5297 8.86329C16.1601 8.86329 16.6727 9.3758 16.6727 10.0055C16.6727 10.6367 16.1601 11.1508 15.5297 11.1508ZM20.982 15.4156C19.6633 15.4156 18.5906 16.4899 18.5906 17.8102C18.5906 19.1289 19.6633 20.2016 20.982 20.2016C22.3008 20.2016 23.3734 19.1289 23.3734 17.8102C23.3734 16.4899 22.3008 15.4156 20.982 15.4156ZM20.982 18.9524C20.3516 18.9524 19.8391 18.4399 19.8391 17.8102C19.8391 17.1789 20.3516 16.6649 20.982 16.6649C21.6125 16.6649 22.125 17.1789 22.125 17.8102C22.125 18.4399 21.6125 18.9524 20.982 18.9524Z" fill="#F86400"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_9114_7382">
                              <rect width="40" height="40" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                    </span>
                    <span className='block whyPlay__cardTitle'>Exciting Offers</span>
                    <span className='block whyPlay__cardPara'>Get special promotions and bonuses on your favorite fantasy games.</span>
                </div>
                <div className='whyPlay__card'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_9114_7374)">
    <path d="M24.4758 0.9375V2.30391H14.968V0.9375H24.4758Z" fill="url(#paint0_linear_9114_7374)"/>
    <path d="M25.2781 35.3969H14.632C14.4663 35.3969 14.3073 35.4627 14.1901 35.5799C14.0729 35.6971 14.007 35.8561 14.007 36.0219C14.007 36.1876 14.0729 36.3466 14.1901 36.4638C14.3073 36.581 14.4663 36.6469 14.632 36.6469H25.2781C25.4439 36.6469 25.6029 36.581 25.7201 36.4638C25.8373 36.3466 25.9031 36.1876 25.9031 36.0219C25.9031 35.8561 25.8373 35.6971 25.7201 35.5799C25.6029 35.4627 25.4439 35.3969 25.2781 35.3969ZM25.2781 35.3969H14.632C14.4663 35.3969 14.3073 35.4627 14.1901 35.5799C14.0729 35.6971 14.007 35.8561 14.007 36.0219C14.007 36.1876 14.0729 36.3466 14.1901 36.4638C14.3073 36.581 14.4663 36.6469 14.632 36.6469H25.2781C25.4439 36.6469 25.6029 36.581 25.7201 36.4638C25.8373 36.3466 25.9031 36.1876 25.9031 36.0219C25.9031 35.8561 25.8373 35.6971 25.7201 35.5799C25.6029 35.4627 25.4439 35.3969 25.2781 35.3969ZM29.568 0H10.4328C9.26206 0.00130234 8.1396 0.466912 7.31167 1.2947C6.48374 2.12248 6.01793 3.24486 6.01642 4.41563V35.5844C6.01793 36.7551 6.48374 37.8775 7.31167 38.7053C8.1396 39.5331 9.26206 39.9987 10.4328 40H29.568C30.7386 39.9985 31.8609 39.5328 32.6887 38.7051C33.5164 37.8773 33.9821 36.755 33.9836 35.5844V4.41563C33.9821 3.24498 33.5164 2.1227 32.6887 1.29493C31.8609 0.467155 30.7386 0.00146779 29.568 0ZM15.2805 1.25H24.1633V1.99141H15.2805V1.25ZM32.7336 35.5844C32.7326 36.4236 32.3987 37.2282 31.8053 37.8217C31.2118 38.4151 30.4072 38.749 29.568 38.75H10.4328C9.59344 38.7491 8.78868 38.4154 8.19507 37.8219C7.60147 37.2284 7.26749 36.4238 7.26642 35.5844V4.41563C7.26749 3.57624 7.60147 2.77156 8.19507 2.1781C8.78868 1.58464 9.59344 1.25087 10.4328 1.25H14.0305V2.61641C14.0305 2.78217 14.0963 2.94114 14.2135 3.05835C14.3307 3.17556 14.4897 3.24141 14.6555 3.24141H24.7883C24.9541 3.24141 25.113 3.17556 25.2302 3.05835C25.3474 2.94114 25.4133 2.78217 25.4133 2.61641V1.25H29.568C30.4072 1.25101 31.2118 1.58486 31.8053 2.17831C32.3987 2.77176 32.7326 3.57636 32.7336 4.41563V35.5844ZM25.2781 35.3969H14.632C14.4663 35.3969 14.3073 35.4627 14.1901 35.5799C14.0729 35.6971 14.007 35.8561 14.007 36.0219C14.007 36.1876 14.0729 36.3466 14.1901 36.4638C14.3073 36.581 14.4663 36.6469 14.632 36.6469H25.2781C25.4439 36.6469 25.6029 36.581 25.7201 36.4638C25.8373 36.3466 25.9031 36.1876 25.9031 36.0219C25.9031 35.8561 25.8373 35.6971 25.7201 35.5799C25.6029 35.4627 25.4439 35.3969 25.2781 35.3969Z" fill="#F86400"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_9114_7374" x1="18.2376" y1="-0.950234" x2="21.2062" y2="4.19164" gradientUnits="userSpaceOnUse">
      <stop offset="0.01" stop-color="#FF8735"/>
      <stop offset="1" stop-color="#FFC7A0"/>
    </linearGradient>
    <clipPath id="clip0_9114_7374">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    </span>
                    <span className='block whyPlay__cardTitle'>Redmi Rewards</span>
                    <span className='block whyPlay__cardPara'>Stand a chance to win Redmi smartphones and gadgets while you play!</span>
                </div>
                <div className='whyPlay__card'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 35.2344C14.9531 35.2344 10.8594 31.1406 10.8594 26.0938C10.8594 21.0469 14.9531 16.9531 20 16.9531C25.0469 16.9531 29.1406 21.0469 29.1406 26.0938C29.1328 31.1406 25.0469 35.2266 20 35.2344ZM20 17.8437C15.4453 17.8437 11.75 21.5391 11.75 26.0938C11.75 30.6484 15.4453 34.3438 20 34.3438C24.5547 34.3438 28.25 30.6484 28.25 26.0938C28.2422 21.5391 24.5547 17.8516 20 17.8437Z" fill="url(#paint0_linear_9115_7393)"/>
  <path d="M23.9141 23.4609H21.3203C21.2266 22.9062 20.9688 22.3906 20.5938 21.9688H23.9219C24.1875 21.9688 24.4062 21.75 24.4062 21.4844C24.4062 21.2188 24.1875 21 23.9219 21H16.0859C15.8203 21 15.6016 21.2188 15.6016 21.4844C15.6016 21.75 15.8203 21.9688 16.0859 21.9688H18.3906C19.2969 21.9688 20.0938 22.5781 20.3203 23.4609H16.0859C15.8203 23.4609 15.6016 23.6797 15.6016 23.9453C15.6016 24.2109 15.8203 24.4297 16.0859 24.4297H20.3359C20.1172 25.3281 19.3203 25.9609 18.3906 25.9609H16.0859C15.8203 25.9609 15.6016 26.1797 15.6016 26.4453C15.6016 26.5781 15.6563 26.7031 15.7422 26.7891L19.9922 31.0391C20.1797 31.2266 20.4922 31.2266 20.6797 31.0391C20.8672 30.8516 20.8672 30.5391 20.6797 30.3516L17.2656 26.9375H18.3984C19.8594 26.9375 21.1016 25.875 21.3359 24.4375H23.9219C24.1875 24.4375 24.4062 24.2188 24.4062 23.9531C24.4062 23.6875 24.1797 23.4688 23.9141 23.4609C23.9141 23.4688 23.9141 23.4688 23.9141 23.4609Z" fill="#F86400"/>
  <path d="M24.4062 12.0312C25.4844 11.8047 26.1797 10.7422 25.9453 9.65625C25.75 8.73438 24.9375 8.07031 23.9922 8.07031H23.2031L25.4531 3.82812C26.0625 2.77344 25.7031 1.42969 24.6484 0.820312C24.4766 0.71875 24.2969 0.648438 24.1016 0.59375C22.5938 0.195312 21.2969 0 20 0C18.7031 0 17.4062 0.195312 15.8906 0.601562C14.7188 0.90625 14.0156 2.10938 14.3203 3.28125C14.3672 3.46875 14.4453 3.65625 14.5469 3.82812L16.8047 8.07031H16.0156C14.9141 8.07031 14.0156 8.96875 14.0156 10.0703C14.0156 11.0156 14.6797 11.8359 15.6016 12.0312C9.14062 14.1406 4.42969 20.6641 4.42969 27.3047C4.42969 35.375 11.4062 40 20 40C28.5938 40 35.5703 35.375 35.5703 27.3047C35.5703 20.6641 30.8594 14.1406 24.4062 12.0312ZM15.3672 3.38281L15.3594 3.36719L15.3516 3.35156C15 2.74219 15.2109 1.97656 15.8203 1.625C15.9141 1.57031 16.0234 1.52344 16.1328 1.5C17.6172 1.10938 18.8125 0.9375 20 0.9375C21.1875 0.9375 22.3828 1.10938 23.8672 1.5C24.5469 1.67188 24.9453 2.36719 24.7734 3.03906C24.7422 3.14844 24.7031 3.25781 24.6484 3.35156L24.6406 3.36719L24.6328 3.38281L22.1484 8.0625H17.8672L15.3672 3.38281ZM14.9453 10.0703C14.9453 9.48438 15.4219 9.00781 16.0078 9.00781H23.9922C24.5781 9.02344 25.0391 9.51562 25.0234 10.1016C25.0078 10.6641 24.5547 11.125 23.9922 11.1328H16.0078C15.4219 11.1328 14.9453 10.6562 14.9453 10.0703ZM30.4375 35.9375C27.8125 37.9531 24.1094 39.0625 20 39.0625C15.8906 39.0625 12.1875 37.9453 9.5625 35.9375C6.82031 33.8281 5.36719 30.8359 5.36719 27.3047C5.36719 23.6094 6.9375 19.8281 9.67188 16.9297C10.9922 15.5078 12.5781 14.3594 14.3359 13.5312C15.8125 12.8359 17.4141 12.4141 19.0391 12.2891C19.3594 12.2656 19.6797 12.2578 20 12.2578C20.3203 12.2578 20.6406 12.2656 20.9609 12.2891C22.5938 12.4141 24.1875 12.8281 25.6641 13.5312C27.4219 14.3594 29 15.5078 30.3281 16.9297C33.0625 19.8281 34.6328 23.6094 34.6328 27.3047C34.6328 30.8359 33.1797 33.8281 30.4375 35.9375Z" fill="url(#paint1_linear_9115_7393)"/>
  <defs>
    <linearGradient id="paint0_linear_9115_7393" x1="20" y1="16.9531" x2="20" y2="35.2344" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF8735"/>
      <stop offset="1" stop-color="#FFC7A0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_9115_7393" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF8735"/>
      <stop offset="1" stop-color="#FFC7A0"/>
    </linearGradient>
  </defs>
</svg>
                    </span>
                    <span className='block whyPlay__cardTitle'>Cashback Deals</span>
                    <span className='block whyPlay__cardPara'>Enjoy amazing cashback on deposits and transactions, making every game more rewarding.</span>
                </div>
                </div>
            </div>
            <img src={ cri } alt='img' className='playImg hidden md:inline-block' data-scroll data-scroll-speed="-2" />
        </div>
      
    

        {/* FAQ section */}

      <div className=''>
        <div className='faq__container grid place-content-center'>
            <div className='faq__viewCon px-5 flex'>
                <div className='w-1/2 hidden lg:inline-block' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                    <img src={ faqImg } alt='img' className='faqImg' />
                </div>
                <div  className='w-full lg:w-1/2'>
                    <span className='faq__title block md:hidden'>Frequently Ask <span className='faq__subTitle'>Questions</span></span>
                    <span className='faq__title hidden md:block' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Frequently Ask <span className='faq__subTitle'>Questions</span></span>
                    <div>
                        <div className='flex justify-center items-center flex-col mt-10 gap-8'>
                            {data.map((item, id) => (
                                <div className='faq__viewContainer pt-5 px-5 my-2'>
                                    <div className='faq__titleContents flex justify-between  items-center pb-5 cursor-pointer' onClick={() => toggle(id) }>
                                        <span className='block faq__contentTitle'> {item.title} </span>
                                        <span className='block faq__icons' onClick={ playSound }> { select === id ? <FaMinus /> : <FaPlus /> } </span>
                                    </div>
                                    <div className={select === id ? "faq__content show" : "faq__content"}>
                                        <span className='faq__contentPara block pb-5'> {item.content} </span>
                                    </div>
                                </div>                        
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        {/* Connect section */}

        <div className='section'>

        <div className='footer__section'>
            <div className='grid place-content-center'>
                <div className='connect__container'>
                    <span className='block connect__title text-center'>Join the Fantasy Sports Revolution Today!</span>
                    <div className='flex justify-center items-center w-full'>
                        <span className='xl:w-3/5 block connect__para text-center'>Fantasy sports is more than just a game—it’s an experience that brings you closer to the action. Whether you're a cricket lover, a football fanatic, or a basketball enthusiast, our platform has something for every sports fan.</span>
                    </div>
                    <div className='grid place-content-center' onClick={playSound}>
                        <button className='connect__btn'>Get In The Game</button>
                    </div>
                </div>
            </div>

          <Footer />

        </div>
        </div>

    </div>
  )
}

export default HomePage