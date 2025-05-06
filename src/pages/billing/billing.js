import React from 'react'
import './billing.css'
import Sidebar from '../../components/sideBar/sidebar'
import { Background_Image, Card_Bacground, Circles, Credit_Balance, Mastercard_Icon } from '../../assets/images'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Button } from '@mui/material';
import { RiVisaLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



function Billing() {
    const invoicesData = [
        { id: '#MS-415646', date: 'March,01,2025', total: '$180' },
        { id: '#MS-728391', date: 'April,12,2025', total: '$245' },
        { id: '#MS-934827', date: 'February,27,2025', total: '$399' },
        { id: '#MS-183746', date: 'January,15,2025', total: '$120' },
        { id: '#MS-672349', date: 'May,03,2025', total: '$310' },
        { id: '#MS-297463', date: 'March,22,2025', total: '$225' },
    ];
    const billingData = [
        { id: 1, companyName: "Vilkim Burito", email: "oliver@burito.com", vat: "FRB123476" },
        { id: 2, companyName: "Vilkim Burito", email: "oliver@burito.com", vat: "FRB123476" },
        { id: 3, companyName: "Vilkim Burito", email: "oliver@burito.com", vat: "FRB123476" },

    ]

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="dashboard-container" style={{
                backgroundImage: `url(${Background_Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                flex: 1,
                padding: '2rem',
            }}>
                <div className='billing-main-upper-container'>
                    <div className='billing-cards-main-container'>
                        <div className='billing-cards-container'>
                            <div className='card-container'>
                                <div className='card-header'>
                                    <p className='card-heading'>Vision UI</p>
                                    <img src={Circles} className='circle-image' />
                                </div>
                                <div className='card-footer'>
                                    <p className='card-number'>7812 2139 0823 XXXX</p>
                                    <div className="card-bottom-container">
                                        <div className='validity-container'>
                                            <p className='validity-heading'>VALID THRU</p>
                                            <p className='validity-date'>05/26</p>
                                        </div>
                                        <div className='cvv-container'>
                                            <p className='cvv-heading'>CVV</p>
                                            <p className='cvv-number'>1234</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='credit-balance-main-container'>
                                <div className='credit-balance-img-container'>
                                    <img src={Credit_Balance} className='credit-balance-img' />
                                </div>
                                <p className='subheading'>NEWEST</p>

                                <div className='credit-detil-container'>
                                    <div className='icon-container'>
                                        <HiOutlineBuildingOffice2 color='green' size={20} />
                                    </div>
                                    <div className='details-info-container'>
                                        <div className='details'>
                                            <p className='details-heading'>Bill & Taxses</p>
                                            <p className='details-date'>Today 16:34</p>
                                        </div>
                                        <div className="balnce-container">
                                            <p className='balance-value'>-$154.50</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className='payment-method-container'>
                            <div className='payment-header'>
                                <p className='payment-heading'>Payment Method</p>
                                <Button style={{ backgroundColor: "#0075FF", fontWeight: "bold" }} className="custom-add-card-button" variant="contained">ADD NEW CARD</Button>
                            </div>
                            <div className='payment-footer'>
                                <div className='mastercard-container'>
                                    <img src={Mastercard_Icon} className='mastercard_img' />
                                    <p className='master-card-number'>7812 2139 0823 XXXX</p>
                                </div>
                                <div className='visa-container'>
                                    <RiVisaLine color='white' size={20} />
                                    <p className='master-card-number'>7812 2139 0823 XXXX</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='invoices-main-container'>
                        <div className='payment-header'>
                            <p className='payment-heading'>Invoices</p>
                            <Button style={{ backgroundColor: "#0075FF", fontWeight: "bold" }} className="custom-add-card-button" variant="contained">View All</Button>
                        </div>
                        {invoicesData?.map((item, index) => {
                            return (
                                <div key={index} className='invoices-list-container'>
                                    <div className='invoices-details'>
                                        <p className='invoice-date'>{item?.date}</p>
                                        <p className='invoice-id'>{item?.id}</p>
                                    </div>
                                    <p className='invoice-total'>{item?.total}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='billing-bottom-container'>
                    <div className='billing-information-container'>
                        <p className='billing-heading'>Billing Information</p>
                        {billingData?.map((item, index) => {
                            return (
                                <div className='billing-detail-conatiner'>
                                    <div className='billing-details' >

                                        <p className="billing-name">Oliver Liam</p>
                                        <p className="billing-company-name">Company Name: Oliver Liam</p>
                                        <p className="billing-email-address">Email Address: oliver@burito.com</p>
                                        <p className="billing-vat-number">VAT Number: FRB123456</p>

                                    </div>
                                    <div className='btns-container'>
                                        <div className='delete-container'>
                                            <MdDelete color='red' size={15} />
                                            <a className='delete-btn-text'> DELETE</a>
                                        </div>
                                        <div className='edit-container'>
                                            <MdEdit color='green' size={15} />
                                            <a className='edit-btn-text'> EDIT</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Billing
