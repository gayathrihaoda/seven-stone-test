import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './footer.css'
import Nav from '../nav/nav';

import logo from "../../assets/footer__logo.png"
import Footer from '../footer/footer';

const CommunityGuidelines = () => {
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

    <div className='CommunityHeading__conatainer grid place-content-center h-80 sm:h-120'>
      <span className='bannerHeading__Title block'>COMMUNITY GUIDELINES</span>
    </div>

   <div style={{background:"linear-gradient(0deg, #1F0C00 0%, #3D1700 100%)",}}>  <div className='text-justify' style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color:'#fff' }}>
      <div className='font-semibold text-xl'>COMMUNITY GUIDELINES</div>
      <div className='pt-3 tc__content'>We are the flagship brand of Haoda Network Solutions, offering Our Services to You wherein You can also participate in various Contests hosted on Our Platform. We, as a Platform, are committed to creating a safe and open environment for expression and giving people a voice on its social communities available on Our Platform. Through these communities, You can post, comment, vote, discuss, learn, debate, support and connect with people who share Your interests.
      </div>
      <div className='pt-3 tc__content'>All capitalised terms not defined herein shall have the meaning ascribed to them in the Terms.</div>
      <div className='pt-3 tc__content'>These guidelines (“Community Guidelines”), set out below provide general guidance and an overview of what is and what is not allowed on Our Platform. These Community Guidelines apply to any content uploaded, hosted, transmitted or otherwise made available or communicated on Our Platform (“Content”). Use of the Platform constitutes Your acceptance of these Community Guidelines which may be amended from time to time. We may, at Our sole discretion, also notify the User(s) of any change or modification in these Community Guidelines, by way of sending an email to the User’s registered email address or posting notifications on the Platform.</div>
      <div className='pt-3 tc__content'>We are committed to these Community Guidelines and We require You to be committed too. Violation of these Community Guidelines may result in deleted content, disabled accounts, or other restrictions including a complete ban from the Our Platform. We may also notify law enforcement when We believe that there is a genuine risk of physical harm or a direct threat to public safety. Any action or decision taken by Us for violation of these Community Guidelines shall be at Our sole discretion.</div>
      <div className='pt-3 tc__content'>We have sought to make these Community Guidelines as detailed as possible, however, this is not an exhaustive list of policies and all Content, if reported, shall be analysed independently based on the parameters mentioned in these Community Guidelines. We urge Our User(s) that if You find Content that indirectly or directly violates these Community Guidelines, please report it to Us in the manner set forth herein.</div>
    
      <div className='font-semibold pt-5 pb-3'>Prohibited Content</div>
      <div className='tc__content'>The following types of content are prohibited on Our Platform and may warrant action from Us –</div>

      <ul className='list-disc grid gap-2 pl-12 tc__contentCon'>
        <li>Post, share, engage with Content, or create accounts, groups, pages, events, either manually or automatically, at very high frequencies;</li>
        <li>Direct User(s) of Our Platform directly or indirectly to leave the Platform for another website by posting misleading content, redirecting users to defective pop-up websites or impersonating well-known brands;</li>
        <li>Link to harmful third-party content, such as malware, phishing websites, deceptive pop-ups, etc.</li>
        <li>Incentivise User(s) to partake in some kind of monetary action for the purpose of gaining any unfair or undue advantage on Our Platform;</li>
        <li>Program bots that harm Our Platform, including bots intended to promote content, products or services;</li>
        <li>Repeatedly contact people for commercial purposes without their consent;</li>
        <li>Post repetitive comments across Our Platform multiple times without any context or post Content that include the words “follow me” in standalone form. Do note, however, that genuine instances where the words “follow me” come up contextually and naturally will not be included in this category;</li>
        <li>Post repetitive Content or comments promoting other fantasy sports platforms, Telegram or WhatsApp groups or repeatedly mentioning names of competitors on Our Platform;</li>
        <li>Posting any form of content that can make other User(s) believe about Your association with any brand, company, trust, organisation, community or service that provides information/ tips/ tricks/ hacks/ cheats on Fantasy games offered on Our Platform.</li>
      </ul>

      <div className='pt-5 tc__contentCon'>2.	Misinformation or Scam - It is not mandatory to use Your real name on Our Platform, however, Your name, profile picture, team name cannot include: </div>
      <ul className='list-disc grid gap-2 pl-12'>
        <li>Characters from multiple languages;</li>
        <li>Symbols, numbers including without limitation mobile numbers, unusual capitalization, repeating characters or punctuation;</li>
        <li>Words or phrases in place of name;</li>
        <li>Offensive or suggestive words of any kind; or</li>
        <li>Names of brands associated with fantasy sports.</li>
        <li>to provide Us with accurate and up to date account-related information.</li>
        <li>Not to impersonate others by using their images with the explicit aim to deceive people;</li>
        <li>Not to create accounts for the purpose of violating our guidelines or misleading others.</li>
        <li>Not to use another person or organization’s name or details in a misleading manner;</li>
        <li>Not to post images, videos, clips, gifs and such other content that is likely to deceive the public to the content’s origin, if (i) the entity or an authorised representative object to the content; and/ or (ii) can establish a risk of harm to members of the public;</li>
        <li>Not to create accounts for minors;</li>
        <li>Not to maintain multiple accounts;</li>
        <li>Not to share an account with another person;</li>
        <li>Not to create another account after being banned from Our Platform;</li>
        <li>Not to create an account assuming to be or speak for another person or entity for whom you are not authorised to do so;</li>
        <li>Not to use another person’s name, username, image, brand, logo, or other personal information; and</li>
        <li>Not to set up a user account using the name and image of a person, and then pretending that person is posting content or comments.</li>
      </ul>

      <div className='pt-5 tc__contentCon'>3.	Violent and Criminal Behaviour - We remove any content that encourages violence or has the potential to contribute to real-world harm or attacks on anyone based on their race, ethnicity, national origin, sex, gender, gender identity, sexual orientation, religious affiliation, disabilities or diseases. We vehemently prohibit hate speech, bullying and harassment and misinformation that contributes to the risk of imminent violence or physical harm. We try to consider the language and context in order to distinguish casual statements from content that constitutes a credible threat to public or personal safety.
Do not post any of the following:
</div>
      <ul className='list-disc grid gap-2 pl-12'>
        <li>Statements of intent to commit violence or statements advocating violence;</li>
        <li>	Content that encourages glorifies, incites, or calls for violence or physical harm against an individual or a group of people or animals;</li>
        <li>Threats that lead to serious injury towards private individuals, public figures, high-risk persons or high-risk groups;</li>
        <li>Content that praises or supports any criminal or terrorist organisations or individuals or any acts committed by them;</li>
        <li>Content that praises or supports hate crimes, organised violence, mass shooting, human trafficking groups etc.;</li>
        <li>Misinformation and unverifiable rumours that contribute to the risk of imminent violence or physical harm;</li>
        <li>Content encouraging participation in high-risk viral challenges;</li>
        <li>Content advocating vandalism, harm against property, theft etc.</li>
        <li>Content that encourages bribery, embezzlement, money laundering, scams or any other fraudulent activity;</li>
        <li>Content that promotes the selling of fantasy teams or convinces others to partake in any kind of monetary transactions;</li>
        <li>Content that facilitates or coordinates the exploitation of humans, including human trafficking;</li>
        <li>Content that encourages suicide, self-injury, self-mutilation including certain graphic imagery and real-time depictions of such acts;</li>
        <li>Display content that promotes drug consumption, or encourages others to make, use, or trade-in drugs or other illicit substances;</li>
        <li>Content that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order.</li>
       
      </ul>

      <div className='pt-5 tc__contentCon'>4.	Harassment - We do not tolerate harassment, threatening, or bullying of any individuals on Our Platform nor do we tolerate any groups dedicated to this behaviour.</div>

      <div className='pt-3 tc__content'>Do not do any of the following on the Our Platform:</div>
      <ul className='list-disc grid gap-2 pl-12'>
        <li>Repeatedly contact someone in an unwanted, unsolicited or sexually harassing manner;</li>
        <li>Target anyone by attacking them based on their status as a victim of sexual assault, sexual exploitation or domestic abuse;</li>
        <li>Threaten to release an individual's private phone number, residential address or email address;</li>
        <li>Abuse, use curse words or swear words in any language against any individual in a derogatory way or engage in targeted swearing;</li>
        <li>Make derogatory comments against other users or any other individuals;</li>
        <li>Create pages or groups that are dedicated to attacking an individual;</li>
        <li>Call for self-injury or suicide of a specific person or group of people;</li>
        <li>Post content that mocks premature death, serious or fatal disease or disability, starvation, physical violence, domestic violence or serious physical injury;</li>
        <li>Make calls for death, serious disease or disability, or physical harm to a specific person or group of people;</li>
        <li>Attack a specific person or group of people through derogatory terms related to sexual activity;</li>
        <li>Post content about a violent tragedy, or victims of violent tragedies, that includes claims that a violent tragedy did not occur.</li>

      </ul>

      <div className='grid gap-3 py-5 tc__contentCon'>
        <div className=' text-md'>5.	Hate Speech - We remove content that contains credible threats or hate speech or content that incites violence or promotes hate based on identity or vulnerability or certain characteristics such as race, ethnicity, national origin, religious affiliation, sexual orientation, caste, sex, gender, gender identity and serious disease or disability.</div>
        <ul className='list-disc grid gap-2 pl-12'>
            <li>Violent or dehumanising speech, statements of inferiority, or calls for exclusion or segregation targeting a person or specific persons;</li>
            <li>Content mocking events or victims of hate crimes;</li>
            <li>Content that describes or negatively targets people with slurs;</li>
            <li>Calls for segregation or political, social or economic exclusion of specific persons on the basis of their identity;</li>
            <li>Expressions of contempt, dismissal, disgust or generalisations about the inferiority of specific persons on the basis of their identity.</li>
           
        </ul>
        <div>
        6.	Copyright Violation - We require you to post original content and to refrain from posting content that violates someone else's intellectual property rights. Plagiarism of other Users’ profiles or profile elements of other users is prohibited.
Do not do any of the following:

        </div>
        <ul className='list-disc grid gap-2 pl-12'>
            <li>Reshare a team created by another user and portray it as your own team;</li>
            <li>Reshare a personalized image with data belonging to other User(s), as your own data; and</li>
            <li>Reshare a screenshot shared by another user and project it as your own.</li>
        </ul>
      </div>

      <div className='grid gap-3 py-5 tc__contentCon'>
        <div className='text-md'>7.	Security of Our Platform - Attempts to gather sensitive personal information by deceptive or invasive methods are harmful to the authentic, open, and safe atmosphere that we want to foster. Therefore, we do not allow attempts to gather sensitive user information through the abuse of Our Platform.
Do not do any of the following:
</div>
       <ul className='list-disc grid gap-2 pl-12'>
        <li>Hack Our Platform or encourage User(s) to hack the Platform or engage in any other activities that threaten or compromise the security of Our Platform;</li>
        <li>Gain or attempt to gain access to any account or user data other than your own without explicit permission from the account owner;</li>
        <li>Disseminate any individual’s personal or confidential information including but not limited to PAN card, bank details, AADHAR card, telephone number, email address, residential address etc;</li>
        <li>Encourage or deceive users and entities to download or run files or programs that will compromise a user’s online or data security. Such files and programs will be deemed to install malicious software or "malware" if they harm or gain unauthorized access to a computer, device, or network;</li>
        <li>Distribute files that contain viruses, trojan horses, worms, logic bombs, or other materials that are malicious or harmful;</li>
        <li>Attempt to obtain the sensitive information of others such as usernames, passwords, or other personal information, through deceptive means or the use of malicious software or websites;</li>
        <li>Publicly share your own or another user’s login information on Our Platform or through a third-party service;</li>
        <li>Post Content that provides tips or encourages hacking of Our Platform or engages in any other activities that threaten or compromise the security of Our Platform;</li>
        <li>Create, share, or host malicious software or malicious browser extensions to compromise accounts or gain access to user data or to interrupt the efficient functioning of the Our Platform.</li>
       </ul>
        <div>8.	Offensive Language & Visually Inappropriate Content - We have zero-tolerance for predatory behaviour towards minors or posting sexual or suggestive content involving minors or someone who appears to be a minor. We remove content that depicts, threatens or promotes sexual violence, sexual assault or sexual exploitation. We remove content that displays, advocates for or coordinates sexual acts with non-consenting parties. </div>
        <ul className='list-disc grid gap-2 pl-12'>
            <li>Child sexual abuse imagery, child pornography, and any other content, including fantasy content, that depicts encourages or promotes paedophilia, child sexual exploitation, or otherwise sexualizes minors or someone who appears to be a minor;</li>
            <li>Content that consists of any form of sexual touching, crushing, necrophilia or bestiality, or forced stripping or mocking victims of such acts;</li>
            <li>Non-consensual intimate images of a person or secretly taken non-commercial imagery of a real person's commonly sexualised body parts or of a person engaged in sexual activity;</li>
            <li>Details about any adult commercial sexual services or prostitution activities, including requesting, offering or asking for rates for escort services.</li>
            <li>Content that consists of any nudity, pornography, whether consensual or non-consensual.</li>
        </ul>
        <div>9.	Reporting - Each of us is an important part of the Seven Stone’s community. If you see any post, or comment or receive any message in your inbox that you think may violate these Community Guidelines, please report such Content by clicking on the Report button available on the Platform. Should you feel the need to communicate and share information about an offensive post or comment, you may choose to write to us Help & Support section. When reporting Content, try to provide as much information as possible, such as links, usernames, and descriptions of the content. We shall personally review the post or comment and shall provide warnings via emails, remove entire posts if they are found to violate these Community Guidelines, temporarily or permanently ban and/ or block users who post objectionable Content or report such behaviour to relevant authorities, helplines and third-party experts, at Our sole discretion. If User(s) complain against any content posted by any User(s) either as a post, private message or in a group message and frequent complaints are received against any User(s) from different User(s) at any point in time, such User(s) shall be blocked from posting, commenting, messaging in group chats and sending direct messages or to other users on the platform for a period of fourteen (14) days from the date of receipt of the complaint. For the avoidance of doubt, it is pertinent to mention that We reserve the right to automatically block a user from commenting, posting in a group chat, sending direct messages on Our Platform if it is observed that the user has violated these Community Guidelines by sending an email to the registered email id of such User(s). Notwithstanding anything to the contrary contained herein, if a User wishes to be unblocked then he/ she shall place a request Help & Support section. Please note that We shall have the right to review a User’s request for unblocking a User account on a case-to-case basis and any decision taken by Us in this regard shall be final and at Our sole discretion.</div>
        <div>10.	Moderation - In addition to moderation of Content through the user reporting mechanism, in case of groups, the administrators of the groups on the Platform (“Group Admin”) shall have the power to remove any User found to be sharing any aforementioned prohibited content or otherwise violating these Community Guidelines. Group Admins may mute all other group members from sending messages by turning on the “Only Group Admins can send Message” mode. We may also report risky behaviour to relevant authorities, helplines and third-party experts and block user access to Our Platform, at Our sole discretion.</div>
      </div>

      <div className='grid gap-3 py-5 tc__contentCon'>
        <div className='font-semibold text-md'>
           Links:
        </div>
        <div>
        We also include links to other websites. Such websites are governed by their respective privacy policies, which are beyond Our control. Once the User(s) leaves Our servers (the User can tell where he/she is by checking the URL in the location bar on the User's browser), use of any information provided by the User is governed by the privacy policy of the operator of the site which the User is visiting. That policy may differ from Our Privacy Policy. If the User can't find the privacy policy of any of these sites via a link from the site's homepage, the User may contact the site directly for more information. We are not responsible for the privacy practices or the content of such third-party websites.
        </div>
      </div>

    </div>

    <Footer />

   
        
</div>
 </>
  )
}

export default CommunityGuidelines