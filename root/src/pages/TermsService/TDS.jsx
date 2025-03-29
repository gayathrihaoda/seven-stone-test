import React from 'react'
import './TDS.css'
import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaFileInvoice } from 'react-icons/fa'
import Nav from '../nav/nav'
import Footer from '../footer/footer'

const TDS = () => {
  return (
    <>

    <Nav />

    <div className='tdsHeading__conatainer grid place-content-center h-80 sm:h-120'>
      <span className='bannerHeading__Title block'>TDS</span>
    </div>

    <div className='tds__container'>

      <div className='grid place-content-center px-5 py-12 text-center'>
        <h2 className='tds__title'>TDS On Winnings</h2>
        <p className='tds__content mx-auto'>
          As per the <span className='text-[#FF8735] font-semibold'>Finance Bill passed by the Govt. of India</span>,
          new tax laws are applicable on Online Gaming apps from <span className='font-semibold'>April 1st, 2023.</span> Platforms offering Online Games are required to deduct tax at source (“TDS”) at the time of withdrawal or at the end of the financial year.
          TDS shall be levied at the rate of <span className='font-bold'>30%</span> for all the net winnings of a Player.
        </p>
      </div>

      <div className='flex items-center justify-center tds__viewCon'>

      <div className='px-5 md:w-4/5 py-8 grid  md:grid-cols-2 gap-8'>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaPercentage />
          </div>
          <h3 className='tds__cardTitle'>What are the latest changes to TDS?</h3>
          <p className='tds__cardContent'>
            As per the Finance Bill passed in 2023, all Real Money Gaming Apps are mandated to deduct tax at the rate of
            <span className='text-[#FF8735] font-semibold'> 30%</span> on users’ Net Winnings.
          </p>
        </div>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaRupeeSign />
          </div>
          <h3 className='tds__cardTitle'>What is ‘Net Winnings’?</h3>
          <p className='tds__cardContent'>
            Net Winnings is the difference between the total money won and entry fees paid by a player. For example, if a
            player wins ₹2000 after paying an entry fee of ₹1000, the Net Gain will be 
            <span className='text-[#FF8735] font-semibold'> ₹1000</span>.
          </p>
        </div>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaCalendarAlt />
          </div>
          <h3 className='tds__cardTitle'>How is tax calculated on 'Net Winnings'?</h3>
          <p className='tds__cardContent'>
            Tax is calculated at 30% of Net Winnings. For example, if the Net Winnings are ₹1000, 
            <span className='text-[#FF8735] font-semibold'> ₹300</span> will be deducted as TDS.
          </p>
        </div>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaCalendarAlt />
          </div>
          <h3 className='tds__cardTitle'>When will the tax be deducted?</h3>
          <p className='tds__cardContent'>
            Tax will be deducted on net winnings at the time of withdrawal or if any pending tax liability remains at the
            end of the financial year.
          </p>
        </div>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaPercentage />
          </div>
          <h3 className='tds__cardTitle'>Can I get a refund of deducted TDS?</h3>
          <p className='tds__cardContent'>
            Players can file tax returns and claim refunds, but the excess TDS cannot be refunded directly by us.
          </p>
        </div>

        <div className='tds__card'>
          <div className='tds__cardIcon'>
            <FaFileInvoice />
          </div>
          <h3 className='tds__cardTitle'>How can I get my Tax Certificate?</h3>
          <p className='tds__cardContent'>
            Tax Certificates will be issued within 1 month from the last date of filing TDS returns for every quarter.
          </p>
        </div>
      </div>

      </div>

      <div className='container mx-auto px-5 py-8 text-center'>
        <p className='tds__contact'>
          Need assistance? <a href='#' className='tds__contactLink'>Contact us</a>
        </p>
      </div>
    </div>

    <Footer />


    </>
  )
}

export default TDS
