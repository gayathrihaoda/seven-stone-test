import React from 'react';
import { FaUndo, FaCheckCircle } from 'react-icons/fa';
import './CanecellationPolicy.css'
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const CancelSettlement = () => {
  return (
    <>
    <Nav />
    <div className="policy__container bg-gray-100 cancelView__container">
      <div className="container mx-auto px-5 text-center">
        <h2 className="policy__title text-3xl font-bold text-gray-800 mb-6">
          Seven Stones Cancellation Settlement Policy
        </h2>
        <p className="policy__content text-lg text-gray-600 mb-8">
          If any contest or competition gets cancelled or disrupted for any reasons whatsoever, 
          <span className="font-semibold text-[#FF8735]"> 7 Stones </span> has the option to either cancel and refund the payments made by the user(s)
          towards such contest or competition, if any; or settle it at the stage up to which it is completed.
        </p>
        <p className="policy__content text-lg text-gray-600 mb-6">
          The decision of <span className="font-semibold text-[#FF8735]">7 Stones</span> shall be final in this regard.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CancelSettlement;
