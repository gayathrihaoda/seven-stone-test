import React, { useState } from 'react';
import './Faq.css'
import { FaPlus } from 'react-icons/fa';
import { TiMinus, TiPlus } from 'react-icons/ti';
import Nav from '../nav/nav';

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import logo from "../../assets/footer__logo.png"
import Footer from '../footer/footer';

const faqsData = [
    {
        question: 'What are Fantasy Sports?',
        answer: 'Fantasy sports are online games where players create virtual teams using real-life athletes. Points are earned based on their actual performance in live matches.'
    },
    {
        question: 'How Do I Register on the Seven Stones?',
        answer: 'Simply click on the "Register Now" button, fill in your details, verify your account, and start playing!'
    },
    {
        question: 'Why Should I Play Fantasy Sports on Seven Stones?',
        answer: 'Seven Stones offers an exciting platform where you can build your dream team, compete in thrilling contests, and enjoy real-time sports action.'
    },
    {
        question: 'Can I Play on Both Mobile and Desktop?',
        answer: 'Yes! Seven Stones is available on both the mobile app and website, ensuring a seamless gaming experience.'
    },
    {
        question: 'What Are the Key Features of the Seven Stones Gaming Platform?',
        answer: ` Easy team selection and player stats tracking. Real-time match updates and leaderboard rankings.`
    },
    {
        question: 'Is Fantasy Sports Legal in India?',
        answer: 'Yes! Fantasy sports are 100% legal in India, as they are classified as games of skill, not chance. The Supreme Court and various High Courts have ruled that skill-based games do not fall under gambling laws, making them legally permissible.'
    },
    {
        question: 'What is the objective of fantasy sports?',
        answer: 'Fantasy sports let fans build their own teams and compete based on real player performances. It adds strategy and excitement, making every game more engaging.'
    },
    {
        question: 'Is Seven Stones safe and secure to play?',
        answer: 'Absolutely! We ensure a secure gaming environment with encrypted transactions, fair play policies, and anti-fraud measures.'
    },
    {
        question: 'Can I play Seven Stones on my mobile?',
        answer: 'Yes! Seven Stones is available on both mobile and desktop, offering a seamless gaming experience anytime, anywhere.'
    },
    {
        question: 'How do I contact customer support?',
        answer: 'You can reach us via email, live chat, or our helpline for any assistance.'
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>

        <Nav />

            <div className='faq__container'>
              
                <div className='container mx-auto px-5 py-12 text-center'>
                    <h2 className='faq__title'>Fantasy Sports FAQs</h2>
                    <p className='faq__content mx-auto'>
                        Got questions? Find all the answers about gameplay, rules, legality, and winnings in our FAQs and play with confidence! 
                    </p>
                </div>
    
                <div className='flex justify-center items-center'>
                <div className='md:w-3/4 py-8'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className={`faq__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className='faq__question ' onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <span>{activeIndex === index ? <TiMinus className='TiMinus_icon' /> : <TiPlus className='TiPlus_icon' />}</span>
                            </div>
                            {activeIndex === index && (
                                <div className='faq__answer'>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
    
              
                <div className='container mx-auto px-5 py-8 text-center'>
                    <p className='faq__contact'>
                        Need further assistance? <a href='#' className='faq__contactLink'>Contact our support team today!</a>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Faq;
