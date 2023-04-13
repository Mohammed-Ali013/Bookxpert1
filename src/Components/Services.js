import React from 'react'
import './Services.css';

import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArticleIcon from '@mui/icons-material/Article';
import TableChartIcon from '@mui/icons-material/TableChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Services = () => {
  return (
    <div className='conatainer'>
        <div className='hed'>
           <h3 className='heading'>
            Our Services
           </h3>
           <div className='line'></div>
           <p className='para'>
           To make you stress free and comfortable to do your business and help you to maximize your returns
           </p>
        </div>

        <div className='row-services'>
            <div className='services'>
                <div>
                    <LockIcon className='icon'/>
                    <h4 className='title'>No Security Risk</h4>
                    <p className='cont'>Book Experts ensures that there will not be any risk to your financial data as the data is automatically saved and protected</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <AccountBalanceWalletIcon className='icon'/>
                    <h4 className='title'>Account Management</h4>
                    <p className='cont'>Your Account Manager takes care of your Books updating & validation on daily basis and provides you the required info to you and your people within minutes</p>
                </div>            
            </div>

            <div  className='services'>
                <div>
                    <CardMembershipIcon className='icon'/>
                    <h4 className='title' >Statuory Compliance</h4>
                    <p className='cont'>Your chosen Experts will be provided the required data in full and in required format for statutory and other compliances in advance for filings/submissions.</p>
                </div>
            </div>
            
            <div  className='services'>
                <div>
                    <ArticleIcon className='icon'/>
                    <h4 className='title'>Audit & Filling Of Returns</h4>
                    <p className='cont'>Your CA will be provided with all the required data like books, Statements, schedules, reconciliations, info required for reporting etc., well in advance and in reusable shape</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <TableChartIcon className='icon'/>
                    <h4 className='title'> Data Management</h4>
                    <p className='cont'>In MSMEs capturing and organizing of data is a big task, we will handle the same with our advanced technologies and techniques by a least or no disturbance to the Business owners</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <SupportAgentIcon className='icon'/>
                    <h4 className='title'>Awesome Support</h4>
                    <p className='cont'>You are always connected to a single person for all your queries and required data</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <CheckIcon className='icon'/>
                    <h4 className='title'>Always Available</h4>
                    <p className='cont'>Your necessities can be fulfilled on any day and any time through our online platform or through our special mobile app in your hand</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <ReceiptLongIcon className='icon'/>
                    <h4 className='title'>Tax Planning</h4>
                    <p className='cont'>Since the recording and verifications is done on day to day basis you are able to plan your taxes and commitments</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <AccountBalanceIcon className='icon'/>
                    <h4 className='title'>Bank Compliances</h4>
                    <p className='cont'>Cost and availability of funds will be directly proportional to quality and timeliness of our statements. With proper data and timeliness you can demand more funds at less cost now.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services