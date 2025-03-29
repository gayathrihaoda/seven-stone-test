import React from 'react'
import './CanecellationPolicy.css'
import { FaUndo, FaCheckCircle } from 'react-icons/fa'
import Nav from '../nav/nav'
import Footer from '../footer/footer'

const CancellationPolicy = () => {
  return (
    <>
    <Nav />

    <div className='refundHeading__conatainer grid place-content-center h-80 sm:h-120'>
      <span className='bannerHeading__Title block'>CANCELLATION AND REFUND POLICY</span>
    </div>

    <div className="policy__container py-12 text-white" style={{background:"linear-gradient(0deg, #1F0C00 0%, #3D1700 100%)",}}>
    <div className="container mx-auto px-5 text-center">

      <div className="policy__section text-center p-6 rounded-xl shadow-lg mb-6">
        <div className="text-2xl font-semibold text-white mb-4" style={{marginBottom: "20px"}}>
          Cancellation Policy
        </div>
        <div className="policy__content text-lg text-gray-300 leading-relaxed">
          All deposits and purchases made and fees paid on 
          <span className="font-semibold text-[#FF8735]"> Haoda Network</span> 
          to play or in connection with Fantasy Cricket are final. All transactions are final. 
          We recognize that customer satisfaction is extremely important to us, so only error-oriented 
          transaction cases shall be reviewed.
        </div>
        <div className="policy__content text-lg text-gray-300 leading-relaxed mt-4">
          If you are not fully satisfied with any deposit/purchase made or fee paid on 
          <span className="font-semibold text-[#FF8735]"> Haoda Network</span> and feel there is an 
          <span className="font-semibold"> 'Error' </span> in the transaction, please let us know about that 
          within 3 days from the transaction date, and we shall certainly review the transaction and 
          determine the resolution at our own discretion.
        </div>
      </div>

    
      <div className="policy__section text-center p-6 rounded-xl shadow-lg" style={{margin: "40px 0px"}}>
        <div className="text-2xl font-semibold text-white mb-4" style={{marginBottom: "20px"}}>
          Refund Policy
        </div>
        <div className="policy__content text-lg text-gray-300 leading-relaxed">
          If you are not fully satisfied with any deposit/purchase made or fee paid on 
          <span className="font-semibold text-[#FF8735]"> Haoda Network</span> and feel there is an 
          <span className="font-semibold"> 'Error' </span> in the transaction, please let us know about that 
          within 3 days from the transaction date, and we shall certainly review the transaction and 
          determine the resolution at our own discretion.
        </div>
        <div className="policy__content text-lg text-gray-300 leading-relaxed mt-4">
          <span className="font-semibold text-[#FF8735]">Refund timeline:</span> 
          If the claim is accepted, the refund will be processed within <span className="font-semibold">7-8 days.</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default CancellationPolicy
