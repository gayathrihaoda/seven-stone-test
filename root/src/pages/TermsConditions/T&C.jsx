import React, { useState } from 'react'
import Nav from '../nav/nav'

import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import logo from "../../assets/footer__logo.png"
import Footer from '../footer/footer';

const TC = () => {

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

    <div className='tcHeading__conatainer grid place-content-center h-80 sm:h-120'>
      <span className='bannerHeading__Title block'>TERMS AND CONDITION</span>
    </div>


    <div style={{background:"linear-gradient(0deg, #1F0C00 0%, #3D1700 100%)",}}>  <div className='text-justify' style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color:'#fff' }}>
    <div className='font-semibold '>1.	INTRODUCTION - WHO WE ARE AND WHAT WE DO?</div>
    <div className='pt-3 tc__content'>We are the flagship brand of Haoda Network Solutions, offering Our Platform to You and an opportunity for You to participate in Contests spanning across a broad range of officially sanctioned live sporting events (“Services”). An illustrative list of such sporting events is mentioned below as maybe modified from time to time (“Sports”):</div>
    <ul className='list-disc grid gap-1 pl-12 pt-3'>
        <li>Cricket</li>
        <li>Football</li>
        <li> Basketball</li>
        <li>Baseball</li>
        <li>Hockey</li>
        <li>Hand Ball</li>
        <li>Volley Ball</li>
        <li>Kabaddi </li>
    </ul>
    <div className='py-3 tc__content'>
    Any person using, accessing and/or participating in any fantasy sports-related free-to-play online gaming contests (“Practice Contest”) and/or pay-to-play online gaming contests (“Paid Contest”) on Our Platform is a user (“User”). All references to “You/Your” relate to the User. All references to “We/Us/Our” relate to “7 stones” which denotes a collective reference to the 7 stones mobile application and the 7 stones website (hereinafter collectively referred to as “Platform”). Practice Contest and Paid Contest are hereinafter collectively referred to as “Contests”.     
    </div>
   <div className='grid gap-3'>
        <div className='font-semibold tc__contentCon'>1.	ACCEPTANCE OF OUR TERMS AND CONDITIONS</div>
        <div>Your continued usage of Our Platform constitutes Your acceptance of the terms and conditions, including any additional terms that We may make available to You (“Terms") and are contractually binding on You.</div>
        <ul className='list-disc grid gap-2 pl-12'>
            <li>Announcements</li>
            <li>Administrative messages/direct messages;</li>
            <li>Advertisements;</li>
            <li>Direct notification to your account; and</li>
            <li>By any other means that We may consider fit for this purpose.</li>
            <li>You agree that You shall mark Us as a safe sender on all Your platforms where You receive any such communications from Us (including via email and SMS) to ensure such communications are not transferred to the spam/junk folder</li>
        </ul>
   </div>

    <div className='grid gap-3 py-5 tc__contentCon'>
      <div className='font-semibold text-md'>
         2.	USER ACCOUNT
      </div>
      <div>You are required to register on Our Platform to create an account to access Our Services (“Account”). At the time of creating Your Account and/or at any time during the utilisation of Our Services, You will be required to provide any and/or all of the following information and/or documents: </div>
      <ul className='list-disc grid gap-2 pl-12'>
            <li>Your full name;</li>
            <li>Your team’s name;</li>
            <li>Your mobile number;</li>
            <li>Your gender; and</li>
            <li>Your date of birth.</li>
            <li>Aadhar number</li>
            <li>Any other valid identification</li>
            <li>Bank Account information</li>
            <li>UPI ID</li>
            <li>Permanent Account Number (PAN)</li>
        </ul>
        <div>We reserve the right to conduct KYC as may be required from time to time in the manner prescribed under such law.</div>
    </div>

    <div className='grid gap-3 py-5'>
      <div className='font-semibold text-md tc__contentCon'>
      3. ELIGIBILITY
      </div>
      <div>
      i. To participate in any Paid Contest, you must meet the following eligibility criteria:
      </div>
      <ul className='grid gap-2 pl-8'>
         <li>1. You must be above the age of 18 years.</li>
         <li>2.	You must be residing in India.</li>
         <li>3.	You must have a valid Indian mobile number to create an Account.</li>
      </ul>
      <div>
      ii. Please note that Paid Contests are not permitted in the following states (“Restricted States”):
      </div>
      <ul className='grid gap-2 pl-8'>
         <li>1.	Andhra Pradesh;</li>
         <li>2.	Assam;</li>
         <li>3.	Nagaland;</li>
         <li>4.	Sikkim; and</li>
         <li>5.	Telangana</li>
      </ul>
      <div>iii.	  You agree that You are not from any of these Restricted States and You shall refrain from making any false disclosures, declarations and/or representations to Us to circumvent the applicable laws and/or regulations of the territory of India (“Applicable Law”) of the Restricted States to participate in any Paid Contests</div>
    </div>

    <div className='grid gap-3 py-5'>
      <div className='font-semibold text-md tc__contentCon'>
      4. CONTEST RULES AND FORMAT
      </div>
      <div className='font-semibold'>I. CONTEST RULES</div>
      <div className='font-semibold'>a) You agree and acknowledge that:</div>
      <div>i.	To participate in a Contest(s), You are required to create a fantasy team (“Team”), by selecting real-life players who are participating in the specific Sports. </div>
      <div>ii.	You must finalise Your Team for the relevant Contest before the start time and/or any other adjusted time (as specified below) of the Sports (“Contest Deadline”). We may notify any extensions to the Contest Deadline in advance.</div>
      <div>iii.	Each Contest will require a minimum number of Users to participate in the Contest for it to become operational (“Pre-specified Number of Users”)</div>
      <div>iv.	In the case of a multiple-entry contest, a User may create multiple Teams to participate in such a Contest (“Multiple Entry Contest”). We reserve Our right in Our sole discretion to restrict the maximum number of Teams You may submit for each Contest format.</div>
      <div>v.	You may participate in the Paid Contests by paying a pre-designated amount as specified on the relevant Contest page (“Pre-Designated Amount”).</div>
      <div>vi.	For each Contest, We will create a prize pool consisting of contributions from all participating Users (“Prize Money Pool”).</div>
      <div>vii.	For clarity, we have no right or interest in this Prize Money Pool.</div>
      <div>viii.	We reserve a right to deduct a fee from the Pre-Designated Amount in lieu of the Service being provided by Us (“Platform Fees”) and the balance amount shall constitute Your contribution towards the Prize Money Pool.</div>
      <div>ix.	From time to time, we may conduct/organize promotions/offers on the Platform. Your participation in such promotions/ offers shall be in accordance with the terms and conditions applicable to the Promotion.</div>
      <div>x.	You can participate in up to 2000 Contests per match in cricket and up to 500 Contests per match in any other sports.</div>
      <div>xi.	You can only create a maximum of 20 (twenty) Teams for any Contest You are participating in.</div>
      <div>xii.	Our toss and starting lineup feature in relation to the Contests is only to guide and assist the User in selecting their Team(s). In indicating a player’s inclusion in a starting lineup, we rely on information/data received from third-party data feed service providers (“Data Feed Providers”) and/or publicly available information.</div>
      <div>xiii.	Prior to creating your Team, We strongly recommend You conduct Your own independent research of player statistics, pitch conditions, weather conditions, player performances, track record of competing teams, winning record of captains and vice captains.</div>
      <div>xiv.	Flexible and Non-Flexible Contest</div>
      <ul className='grid gap-1 pl-8'>
        <li>(a) A Contest will be operational even if a minimum of (2)two Users join such a Contest (“Flexible Contest”)</li>
        <li>(b) A Contest will be operational only if the number of Users participating in such Contest is equal to the limit set by us in case of a Public Contest and by You in case of a Private Contest (“Non-Flexible Contest”)</li>
        <li>(c) The Prize Money Pool shall be directly proportional to the number of Users participating in a Flexible Contest. For clarity, the Prize Money Pool specified on the Contest page will decrease if the number of Users joining the Contest is less than the limit set by You for a Private Contest and by Us for a Public Contest.</li>
      </ul>
      <div>xv.	In participating in Contests, You agree to strictly comply with the Terms, including additional rules published by Us, such as: </div>
      <ul className='grid gap-1 pl-8'>
        <li>(a) “Fantasy Rules ( available at  How to Play – Fantasy Cricket or How to Play –  Fantasy Football  or How to Play – Fantasy Kabaddi or Fantasy or How to Play - Fantasy Hockey or How to Play - Fantasy Basketball or How to Play - Fantasy Baseball or How to Play - Fantasy Handball or How to Play - Fantasy American Football; and</li>
        <li>(b) any other rules and regulations (including without limitation in relation to payments made to participate in any Contest)</li>
      </ul>
    </div>

    <div className='grid gap-3 py-5'>
      <div className='font-semibold text-md tc__contentCon'>
      5. WINNING
      </div>
      <div className='font-semibold text-md'>i. WINNER DECLARATION</div>
      <div>1.	Teams are awarded points based on the performance of Your Team at the end of the Contest. The User’s Team with the highest score(s) in the Contest will be declared as the winner (“Winners”). In certain pre-specified Contests having more than one Winner, the distribution of prizes to such Winners will be in increasing order of their Team’s aggregate score at the end of the relevant Sports relating to such Contest. </div>
      <div>2.	The Winner(s) will be selected based on the highest aggregate scoring User Team in a particular Contest (where the duration of the Sports can range from 1 day to 5 days).</div>
      <div>3.	The number of eligible winners and prizes for the Contest(s) will be announced on the Contest page before the Contest begins.</div>
      <div className='font-semibold text-md'>ii. GENERAL RULES FOR DISTRIBUTION OF WINNINGS</div>
      <div>1.	The User accumulating the highest points at the end of a match shall be eligible to win a pre-designated winning disbursed out of the Prize Money Pool as stated on the relevant Contest page.</div>
      <div>2.	If there is a tie, the winnings will be distributed evenly among the declared winners.</div>
      <div>3.	We reserve the right to vary or modify the winnings at Our discretion before the Contest Deadline.</div>
      <div>4.	You agree that any winnings in the nature of prizes or rewards awarded by Us shall be governed by the terms and conditions of such specific promotional events.</div>
      <div>5.	We reserve the right to disqualify any Winner and prevent them from withdrawing their winnings or receiving any prize if:</div>
      <div className='pl-3'>a)	any of the document or information submitted by You are incorrect, misleading, false, fabricated, incomplete or illegible; or</div>
      <div className='pl-3'>b)	You created teams on behalf of other Users.</div>
      <div className='pl-3'>c) You do not abide by these Terms.</div>
      <div className='pl-3'>d) You have falsely declared your State and entered the contest from prohibited states as per clause IV above.</div>
      <div className='font-semibold text-md'>iii.	TABULATION AND SCORING</div>
      <div>We use Data Feed Providers and/ or the official website of the Sports Event organiser to obtain scores and relevant information required for calculating the fantasy points.</div>
      <div>If there is an error in calculating the fantasy points that are brought to Our attention due to inaccuracies or incompleteness of the information provided by the Data Feed Provider, We shall do Our best to rectify said errors before distributing the prizes.</div>
      <div className='font-semibold text-md'>iv.	VERIFICATION OF WINNERS</div>
      <div className='pl-3'>1.	We or our third-party service providers working on behalf of us may contact the Winners on the email address provided at the time of Account creation. At this stage, Winner will be explained the details of the verification process and the documents required for collecting the prize.</div>
      <div className='pl-3'>2.	If You have been declared as a Winner on Our Platform but have not received Your Winnings, You may contact Our Help and Support (LINK ) within forty-eight (48) hours of the Winner declaration to help us resolve your concern at the earliest.</div>
      <div className='pl-3'>3. You agree and acknowledge that Our decision with respect to awarding the Winnings as per the Terms will be final and binding on You.</div>
    </div>

    <div className='grid gap-3 py-5'>
      <div className='font-semibold text-md'>PAYMENT TERMS</div>
      <div>The below terms govern all payment-related transactions made by You, and You  agree to abide by them.</div>
      <div className='font-semibold'> i.	PAYMENT ACCOUNTS</div>
      <div>By accessing and using Our Platform, you are provided with the following categories of accounts for processing and reconciling Your payments:</div>
      <ul className='pl-6'>
        <li><span className='font-semibold'>1.	Unutilized Account - </span><span>This account holds any amount remitted by You through a designated payment gateway for availing Our Services; and</span></li>
        <li><span className='font-semibold'>2.	Winning Account - </span><span>This account holds your winnings in any Paid Contests.</span></li>
      </ul>
      <div className='font-semibold'>ii.	DISCOUNT OFFERED</div>
      <div>1.	In order to conduct promotional activities and provide incentives, we may issue discounts to You which may be utilised for joining any paid Public Contest(s) (“Discount(s)”). You agree to the following</div>
      <div className='grid gap-2 pl-4'>
        <div>a)	You shall not be permitted to transfer or withdraw any amount of Discounts offered to any other account including Your bank account.</div>
        <div>b)	The utilisation of any Discount shall be subject to certain terms which will be notified to You at the time of issuance of any Discount.</div>
        <div>c)	Discount shall be issued at our sole discretion and will not be demanded as a matter of right.</div>
        <div>d)	Discount will be applied towards the Pre-designated Amount for joining any Contest.</div>
        <div>e)	Upon termination of Your Account, all Discounts shall be forfeited and You shall not have any right or interest on such Discount.</div>
        <div>f)	Any Discount issued to you may take up to 24 hours to reflect in their respective Discount account as defined below. You agree not to hold Us responsible or liable for any delay, including any loss of opportunity to join any Contest(s) due to delay in crediting the Discount.</div>
        <div>g)	In the event of any conflict between these Terms and the terms specific to the Discount, if any, the Discount terms shall prevail.</div>
      </div>
      <div className='fony-semibold'>2.	We offer the following Discounts</div>
      <div className='font-semibold'>a)	Discount Point</div>
      <div>We may award discount points at the time of a successful deposit in your Unutilised Account (“Discount Point”). Your utilisation of the Discount Points shall be subject to the following terms and conditions:</div>
     
        <ul className='grid gap-2 pl-4'>
          <li>i.	Discount Points shall be valid for a period of three (03) months from the date of issuance</li>
          <li>ii. Discount Points shall be credited to your Discount Point account (“Discount Point Account”).</li>
          <li>iii.	 While participating in any Paid Contest, a certain percentage of available Discount Points in Your Discount Point Account shall be applied to the Pre Designated Amount.</li>
          <li>iv.	 Deduction of Discount Points from the Pre-Designated Amount is in    addition to any other Discounts available to You.</li>
          <li>v.	  You agree that in the event of any request for refund of the amount deposited in the Unutilised Account, any Discount Points awarded to you in connection with such amount deposited shall stand forfeited and you will not be able to utilise such Discount Points.</li>
          <li>vi.	 If a match is abandoned or cancelled, the applicable Discount Points deducted from the Pre Designated Amount shall be returned to Your Discount Point Account.</li>
        </ul>
      <div className='font-semibold'>b)	Discount Bonus</div>
      <div>We may at our discretion as part of our Promotion issue a Discount bonus to You in accordance with the terms and conditions applicable to such Promotions (Link) (“Discount Bonus”). In addition to the terms relating to the Promotion, You agree to the following:</div>
      <div className='pl-4 grid gap-2'>
          <div>1.	Discount Bonus shall be credited to your Discount Bonus account upon fulfilling the applicable conditions under the respective Promotions (“Discount Bonus Account”).</div>
          <div>2.	Discount Bonus will be automatically deducted from the Pre- Designated Amount payable by You.</div>
          <div>3.	Discount Bonuses shall be valid for a period of 14 days from the date of the credit</div>
      </div>
      <div className='font-semibold'>c)	Discount Coupons.</div>
      <div>We may grant Discount coupons at Our sole discretion and each Discount coupon shall be governed by the specific terms and conditions as notified by Us at the time of grant of such Discount coupons. You acknowledge that Discount coupons shall have their own validity and specific terms and conditions available on the Platform. In case of any conflict between these Terms and the terms specific to the Discount coupon, the terms specific to the Discount coupon shall prevail.</div>
      <div className='font-semibold'>iii. PRE - DESIGNATED AMOUNT PAYMENT</div>
      <div className='pl-4'>1.	When You join any Contest, subject to the deduction of Discount Bonus and Discount Points (if any), the Pre-Designated Amount gets debited first from the Unutilised Account, and then from Your Winnings Account. For the Unutilized Account, debits will be made in order of the date when the funds were first credited.</div>
      <div className='pl-4'>2.	If You do not have enough balance in either of your Accounts to participate in any Paid Contest, You will need to remit the Pre-Designated Amount required to join the Contest(s). You agree that any amount deposited shall be subject to deduction of applicable GST in accordance with these Terms.</div>
      <div className='font-semibold'>iv. WITHDRAWALS PROCESSING</div>
      <div className='pl-6 grid gap-2'>
         <div>1.	You will be prompted to provide certain documents for processing your payments and verification purposes at the time of your first withdrawal.</div>
         <div>2.	The name mentioned on the identification document as provided by You in the app at the time of withdrawal should correspond with the name of the Bank Account holder of the Bank or linked to the UPI ID provided by You at the time of bank account or UPI verification at the time of withdrawal or bank account change request. </div>
         <div>3.	We will process your withdrawal after verifying your bank account details and/ or UPI ID (as applicable). Upon verification, we will debit the amount from your Winning Account and transfer it online to your bank account at the earliest.</div>
         <div>4.	We may charge any processing fee for the online transfer of funds from your Winning Account to Your bank account</div>
         <div>5.	We depend on banks and third parties to process transactions on Our Platform. Thus, we may take up to 24 hours to process any payments to Your bank account. You agree not to hold Us responsible or liable for any delay in processing any payments.</div>
         <div>6.	A transaction, once confirmed, is final, and no cancellation is permissible.</div>
      </div>
      <div className='font-semibold'>v.	  TAXES PAYABLE</div>
      <div>1.	From 01 October 2023, 28% GST is applicable on the amount deposited by You in Your Unutilised Account. You can view the GST paid on each deposit made by You in the Unutilised Account on the ‘My Transaction’ page on the Platform. The GST value listed on the invoice shall be the final GST amount charged to You</div>
      <div>2.	All winnings shall be subject to deduction of tax (“TDS”) as per the Income Tax Act 1961. With effect from 1st April 2023, TDS of 30% shall be deducted from Net Winnings (“NW”) on each withdrawal request placed by You.</div>
      <div>3.	For the purpose of calculating NW:</div>
      <div className='grid gap-2 pl-6'>
        <div>a)	calculation of NW for the first withdrawal during the Financial Year (“FY”):
NW = A - (B+C)
</div>
         <div>A = Aggregate amount withdrawn from the Winning Account;</div>
         <div>B = Aggregate amount of non-taxable deposit made in the Unutilised Account till the time of withdrawal;</div>
         <div>C = balance amount in the Unutilised Account and the Winning Account at the beginning of the FY (“Opening Balance”);</div>
         <div>NW shall be Zero if the sum of B & C is equal to or greater than A</div>
      </div>
      <div className='grid gap-2 pl-6'>
        <div>b)	calculation of NW during the FY in each subsequent withdrawal from the Winning Account
NW =A-(B+C+E)
</div>
         <div>A = Aggregate amount withdrawn from the Winning Account till the time of such withdrawal including the amount of such subsequent withdrawal;</div>
         <div>B = Aggregate amount of non-taxable deposit made in the Unutilised Account till the time of such subsequent withdrawal;</div>
         <div>C = balance amount in the Unutilised Account and the Winning Account at the beginning of the FY (“Opening Balance”);</div>
         <div>E = NW comprised in earlier withdrawal or withdrawals during the FY until this subsequent withdrawal if tax has been deduced on winnings comprised in such withdrawal or withdrawals</div>
         <div>NW shall be Zero if the sum of B, C & E is equal to or greater than A</div>
      </div>
      <div className='grid gap-2 pl-6'>
        <div>c)	calculation of NW at the end of the FY
NW =(A+D)-(B+C+E)
</div>
         <div>A = Aggregate amount withdrawn from the Winning Account during the FY;</div>
         <div>B = Aggregate amount of non-taxable deposit made in the Unutilised Account during the FY;</div>
         <div>C = balance amount in the Unutilised Account and the Winning Account at the beginning of the FY (“Opening Balance”);</div>
         <div>D = balance amount in the Unutilised Account and Winning Account at the end of the FY (“Closing Balance”) and</div>
         <div>E = Net Winnings comprised in earlier withdrawal or withdrawals during the FY until this subsequent withdrawal if tax has been deduced on winnings comprised in such withdrawal or withdrawals;</div>
         <div>NW shall be Zero if the sum of B, C & E is equal to or greater than sum of A & D</div>
         <div>4.	  In the event, You do not withdraw any of Your winnings during a financial year and You have Net Winning balance as of 31 March of each year, then TDS of 30% shall be deducted on such Net Winnings balance from Your Winning Account as on 31 March as calculated above.</div>
         <div>5.	  In case of any revisions by the Government of India to the aforementioned rate or the definition of Net Winnings in the future, TDS will be deducted by Us in accordance with the then-current prescribed TDS rate and the revised definition of Net Winnings. Winners will be provided TDS certificates in respect of such tax deductions. The Winners shall be responsible for payment of any other applicable taxes, including but not limited to, income tax, gift tax, etc. in respect of the Net Winnings. We shall not in any manner be responsible for users' individual tax matters.</div>
         <div className='font-semibold'>vi. REFUNDS</div>
         <div>1.	We will refund any amount left in your Unutilised Account if your Account gets suspended or removed</div>
         <div className='pl-4'>
          <div>due to Our failure to provide Services,</div>
          <div>any instruction received from any government or regulatory authority</div>
         </div>
         <div>2.	We will refund the Pre-Designated Amount paid by You in case any Contest is abandoned in accordance with these Terms.</div>
         <div>3.	We shall deactivate Your Account pursuant to any direction issued by an appropriate government agency and/or competent authority. If We receive requisite instructions from such authority, We shall refund the deposited amount from Your Unutilised Account to the source account, subject to applicable processing fees.</div>
         <div>4.	In the event Our Services are not available due to reasons outside Our control, including but not limited to any failure to perform due to unforeseen circumstances or cause beyond Our control, such as acts of god, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemic, epidemic, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor or materials or any cancellation of services available on Our Platform (each a “Force Majeure Event”), then We reserve the right to cancel any Contest and process refund of the Pre - Designated Amount.</div>
         <div>5.	In the event of a Paid Contest involving up to 4 Users, where all the Users have entered the same teams (including the same Captain, Vice-captain and Back Up replacement), the Pre-Designated Amount shall be refunded to all the users after the match starts. The refund shall be credited to the account from which the Pre-designated Amount was utilized. For a Paid Contest involving 5 or more Users, where all the Users have entered the same teams (including the same Captain, Vice-captain and Back Up replacement), the Prize Money Pool shall be equally divided between the Users.</div>
         <div>6.	If there is any request for withdrawal of amount deposited in Unutilised Account, such refund request shall be processed net of GST i.e. applicable 28% GST paid on the amount deposited in Unutilised Account. GST amount shall not be refunded as per applicable government laws.</div>
         <div className='font-semibold'>vii. USER FUNDS</div>
         <div>1.	You hereby authorise Us to appoint an independent third-party/ trustee/ escrow agent to act on your behalf in a fiduciary capacity (“Third Party”) with respect to holding any amount belonging to You and undertaking actions, consents, approvals and any other requisite instructions necessary for such amount.</div>
         <div>2.	You acknowledge that</div>
         <div className='pl-6 grid gap-2'>
            <div>a)	We do not hold any right, title and/or interest in the amount deposited by You.</div>
            <div>b)	the amount deposited by You will be used only for participation in the Paid Contest.</div>
            <div>c)	any amount deposited by You, shall not be forfeited by Us except in case where We receive an instruction from any government agency or competent authority.</div>
         </div>
         <div>3.	You further authorize Us to instruct the Third Party to open a non-interest earning bank account(s) which will be used for the following payouts:</div>
         <div className='pl-6 grid gap-2'>
            <div>a)	withdrawal of Your winnings;</div>
            <div>b)	payment of Platform Fee;</div>
            <div>c)	payment of taxes as applicable towards TDS on Net Winnings; and</div>
            <div>d)	Government (toward GST payable)</div>
         </div>
      </div>
    </div>

    <div className='grid gap-3 py-5'>
      <div className='font-semibold text-md'>
      8.	YOUR CONDUCT
      </div>
      <div className='font-semibold'>i.	ACCOUNT INFORMATION</div>
      <div>a)	You are permitted to create only one Account on Our Platform. When creating Your Account with Us (or updating Your Account information), You agree that You will provide true, accurate and updated information and documentation. You will not provide any false and/or incorrect information and documentation nor impersonate or attempt to impersonate and/or otherwise assume the identity of another person without due authority. You will not commit any such fraudulent act which amounts to forgery and/or involves the fabrication of documentation.</div>

      <div>b)	You agree and acknowledge that the address-related details provided by You shall be treated as Your “Address on record” for the purposes of the Goods and Service Tax Act.</div>
      <div>c)	You agree that You shall promptly update your Account related details on Our Platform in the event of any change in such details and/or write to Our Help and Support (Link)  in the event of any; a) change in Your Account related details and/or; b) any unauthorised use of Your Account to enable us to take remedial action.</div>
      <div className='font-semibold'>ii.	MAINTAIN CONFIDENTIALITY</div>
      <div>1.	You will maintain the confidentiality of all information relating to Your Account, and You will not share Your One Time Password (“OTP”) with any other person;</div>
      <div>2.	You will not engage in any fraudulent conduct in logging into another user’s account by asking for their account-related information or taking their OTP.</div>
      <div className='font-semibold'>iii.	COMPLIANCE WITH APPLICABLE LAW</div>
      <div>1.	You agree to comply with Applicable Laws.</div>
      <div>2.	You agree that You shall not commit any illegal act that disrupts Our systems.</div>
      <div className='font-semibold'>iv.	VIOLATION OF PLATFORM TERMS</div>
      <div>1.	You shall not engage in any Fair Play Violation Rules.</div>
      <div>2.	You shall not violate any of the Terms in using and accessing Our Platform and Services;</div>
      <div>3.	You shall not misuse any Discount and/or any other offers or promotions given by Us.</div>
      <div>4.	You agree that you shall use the Platform and Our Services solely in Your personal capacity, and You will not engage in malpractices or collude with other Users in deriving any benefit and/or running any business in connection with the use of Our Platform and/or Services.</div>
      <div>5.	You shall not be engaged in any form of insider trading, i.e. illegally sharing and seeking non-public information, knowledge of participating teams in any given contests/match, strategies, organizing boards, leagues etc. which may give You an unfair competitive advantage. (“Insider Trading”)</div>
      <div>6.	You shall not tamper, modify, or otherwise deal with our data, content, software, technology and/or Intellectual Property by any means.</div>
      <div className='font-semibold'>v.	RESPONSIBLE PLAY</div>
      <div>We're committed to fostering responsible gaming for all our users. You agree to participate in the Contests responsibly by making informed decisions and playing within Your means. You are encouraged to seek help if needed.</div>
      <div>vi.	ADDITIONAL FEATURES</div>
      <div>We offer Our Users additional features on our platform</div>
      <div>1.	Chat Feature: is a tool that allows You to communicate with each other in real-time on the Platform either in a public or private setting (“Chat Feature”). You agree to observe the following code of conduct:</div>
      <div>
        <div>a)	You shall not engage in illegal, obscene, abusive, offensive, racially insensitive, communal, objectionable, defamatory, or otherwise inappropriate and immoral conduct</div>
        <div>b)	You shall not harass, bully, stalk, threaten, or otherwise violate any rights of other Users;</div>
        <div>c)	You shall be responsible for all content published, contributed, and made available by You on Our Platform. This includes any content You share with Us (“User Content/Your Content”).</div>
        <div>d)	Your Content shall not be immoral, profane, defamatory, or offensive;</div>
        <div>e)	You shall not use Our Platform for advertising, offering or selling any goods or services for commercial gain except with Our prior written consent;</div>
        <div>f)	You shall not restrict or inhibit any other User from using Our Platform;</div>
        <div>g)	You shall not publish any content on Our Platform which is patently false, with the intent to mislead or harass any person or third party, whether for financial gain or to cause any injury to any person or otherwise;</div>
        <div>h)	You shall not collude with any other User(s) or engage in syndicate play;</div>
        <div>i)	You agree that such behaviour qualifies as User misconduct.</div>
        <div>j)	You shall not spam other User(s) by sending any unsolicited communications;</div>
        <div>k)	You will not collect, store, or obtain any information about other Users without their prior written consent;</div>
        <div>l)	You shall not engage in any action that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting other nations.</div>
        <div>m)	You agree to adhere to the Community Guidelines.</div>
      </div>
    </div>

  </div>
</div>

<Footer />


</>
  )
}

export default TC