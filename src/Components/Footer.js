import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer " >
   
   <div className='footer-row'>
   <div className="copyright">
       
       © Copyright <strong>Bookxpert</strong>   All rights reserved.
 </div>
 <div className="social-links ">
     
   <a href="https://www.facebook.com/bookxpert" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
  <a href="https://twitter.com/bookxpert" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
   <a href="https://www.instagram.com/bookxpert/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
    <a href="https://www.linkedin.com/company/bookxpert/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
 </div>
   </div>
    
  </div>
  )
}

export default Footer