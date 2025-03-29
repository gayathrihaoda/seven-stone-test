import React, { useEffect, useRef, useState } from 'react'
import HomePage from './pages/home/home'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import "locomotive-scroll/dist/locomotive-scroll.css"
import Loader from './pages/loader/loader'
import ScrollManager from './pages/scroll/scrollMange'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import About from './pages/about/about'
import Audio from './pages/audio/audio'
import Faq from './pages/faq/Faq'
import Legal from './pages/legal/Legal'
import TC from './pages/TermsConditions/T&C'
import CommunityGuidelines from './pages/TermsConditions/CommunityGuidelines'
import PrivacyPolicy from './pages/TermsConditions/PrivacyPolicy'
import TDS from './pages/TermsService/TDS'
import CancelSettlement from './pages/TermsService/CancelSettlement'
import TermsService from './pages/TermsService/TermsService'
import CancellationPolicy from './pages/TermsService/CancellationPolicy'


const App = () => {

  const containerRef = useRef(null)
  
  const [loader, setLoader] = useState(false)
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoader(true);
        }, 5000); 
    
        return () => clearTimeout(timer); 
  }, []);

  
  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        smartphone: { smooth: false, getDirection: true },
        tablet: { smooth: true, getDirection: true },
      }
    }
    containerRef={containerRef}
    >
          {!loader && <Loader />}
    <main data-scroll-container ref={containerRef}>
      <BrowserRouter>
      <ScrollManager />
         <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/faq' element={ <Faq /> } />
            <Route path='/legal' element={ <Legal /> } />
            <Route path='/terms-and-conditions' element={ <TC /> } />
            <Route path='/community-guidelines' element={ <CommunityGuidelines /> } />
            <Route path='/privacy' element={ <PrivacyPolicy /> } />
            <Route path='/tds' element={ <TDS /> } />
            <Route path='/privacy-and-policy' element={ <PrivacyPolicy /> } />
            <Route path='/cancellation-settlement' element={ <CancelSettlement /> } />
            <Route path='/terms-service' element={ <TermsService /> } />
            <Route path='/refund-policy' element={ <CancellationPolicy /> } />

            <Route path='/demo' element={ <Audio /> } />
         </Routes>
      </BrowserRouter>
    </main>
    </LocomotiveScrollProvider>
  )
}

export default App