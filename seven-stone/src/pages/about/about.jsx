import React from 'react'

import "./About.css"
// import choose from "../../../public/Images/Vector.png"
// import about1 from "../../../public/Images/Vector.png"
// import about2 from "../../../public/Images/Vector.png"
// import aboutMani from "../../../public/Images/Vector.png"

// import logo from "../../../public/Images/BeeLogo2.gif"

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Nav from '../nav/nav';
// import banner_img from './seven_stone_aboutImg.png'

import logo from "../../assets/footer__logo.png"

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Footer from '../footer/footer';



const About = () => {

    const playSound = () => {
        const audio = new Audio("/btn1.mp3"); 
        audio.play().catch(err => console.log("Playback failed:", err));
    }

  return (
   <div> 


    <Nav />
    
    
    <div className='about__viewContainer'>
   
    <div className='aboutBannerImg flex justify-center'><div className='about__heroSection md:flex justify-center items-center xl:px-40'>
        <div className='container md:w-2/3 mx-auto xl:px-0 px-5 md:text-left text-center'>
            <h1 className='subPage__title'>About Us</h1>
            <p className='about__content mx-auto lg:pr-10 xl:pr-20'>
                Welcome to <span className='text-[#FF8735]'>Seven Stones</span>, the ultimate destination for sports lovers who want to test their skills, strategy, and passion for the game.
                Create your dream team, participate in thrilling contests, and win big based on real-match performances.
            </p>
            <div className='about__content  pt-5 lg:pr-10 xl:pr-20'>
            At Seven Stones, we believe fantasy sports is more than just a game—it’s a strategy-driven experience where knowledge meets opportunity. Whether you are a seasoned player or a beginner, our platform offers an engaging and competitive environment that enhances your love for sports.
            </div>
        </div>
        <div className='flex justify-center '>
        <div className='md:w-full md:pt-0 pt-12'>
            {/* <img className='banner_image' src={banner_img} alt='image' /> */}
        </div>
        </div>
    </div>
    </div>

   
    <div className=' px-5 xl:px-20 about__whyChoose'>
        <h2 className='about__subTitle text-center'>Why Choose Us?</h2>
        <div className='flex flex-wrap justify-center gap-8'>
            {[
                {
                    title: 'Multiple Sports & Leagues',
                    desc: 'From cricket, football, and basketball to global tournaments, enjoy a variety of sports and leagues to keep the excitement alive.'
                },
                {
                    title: 'Skill-Based Gaming',
                    desc: 'Use your sports knowledge, analytical skills, and strategic thinking to build a winning team.'
                },
                {
                    title: 'Real-Time Leaderboards',
                    desc: 'Track your performance, climb the ranks, and challenge top players.'
                },
                {
                    title: 'User-Friendly Interface',
                    desc: 'Our platform is designed for seamless navigation, ensuring a smooth and enjoyable experience for all users.'
                },
                {
                    title: 'Fair Play & Security',
                    desc: 'We are committed to maintaining a secure and fair gaming environment with strict anti-fraud measures in place.'
                }
            ].map((item, index) => (
                <div key={index} className='about__card  w-82 lg:w-96'>
                    <h3 className='about__contentTitle'>{item.title}</h3>
                    <p className='about__contentPara'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>

  
    <div className=' about__whyChoose'>
        <h2 className='about__subTitle text-center'>How Does It Work?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
                {
                    title: 'Create Your Team',
                    desc: 'Pick real players participating in live matches.'
                },
                {
                    title: 'Join Contests',
                    desc: 'Choose from free and paid contests across different leagues and formats.'
                },
                {
                    title: 'Score & Win',
                    desc: 'Earn points based on your team’s real-time performance and win exciting rewards.'
                }
            ].map((item, index) => (
                <div key={index} className='about__card1  w-82 md: w-full '>
                    <h3 className='about__contentTitle'>{item.title}</h3>
                    <p className='about__contentPara'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>


    <div className=' about__missionCon px-5 xl:px-40 my-16'>
        <div className='about__missionContainer text-center'>
            <h2 className='about__subTitle'>Our Mission</h2>
            <p className='about__content mx-auto'>
                Our mission is to provide a thrilling and rewarding fantasy gaming experience where users can showcase their skills, compete with fellow sports enthusiasts, and enjoy the thrill of real-time sports action.
            </p>
        </div>
    </div>

    
    <div className='about__ctaSection text-center xl:px-40'>
        <h2 className='about__ctaTitle'>Join the Action!</h2>
        <p className='about__content mx-auto'>
            With Seven Stones, every match is an opportunity to prove your expertise and win exciting prizes.
            Sign up today and turn your sports knowledge into real rewards!
        </p>
        <button className='about__btn'>Sign Up Now</button>
    </div>
    </div>

 {/* Connect section */}

 <Footer />

</div>
  )
}

export default About