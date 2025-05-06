import React from 'react'
import "./table.css"
import Sidebar from '../../components/sideBar/sidebar'
import { Background_Image } from '../../assets/images'
import { FaCheckCircle } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const Table = () => {
    const authorsTableHeading = [
        { id: 1, name: "Author" },
        { id: 2, name: "Function" },
        { id: 3, name: "Status" },
        { id: 4, name: "Employed" },

    ]
    const authorsTable = [

        { id: 5, name: "Michael Lee", email: "michael.lee@example.com", role: "QA Engineer", field: "Testing", status: "Online", date: "2023-08-17", pic: "https://randomuser.me/api/portraits/men/5.jpg" },
        { id: 6, name: "Aisha Patel", email: "aisha.patel@example.com", role: "Developer", field: "Mobile", status: "Offline", date: "2023-07-23", pic: "https://randomuser.me/api/portraits/women/6.jpg" },
        { id: 7, name: "David Kim", email: "david.kim@example.com", role: "Support", field: "Customer Service", status: "Online", date: "2023-06-11", pic: "https://randomuser.me/api/portraits/men/7.jpg" },
        { id: 8, name: "Linda Nguyen", email: "linda.nguyen@example.com", role: "DevOps Engineer", field: "Infrastructure", status: "Online", date: "2023-05-30", pic: "https://randomuser.me/api/portraits/women/8.jpg" },

    ];

    const projectTableHeader = [
        { id: 1, name: "Companies" },
        { id: 2, name: "Budget" },
        { id: 3, name: "Status" },
        { id: 4, name: "Completion" }
    ]


    const projectTable = [
        {
            id: 1,
            company: "Charka Soft UI Version",
            budget: "$14,000",
            status: "Working",
            percentage: 60,
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png" // Adobe XD
        },
        {
            id: 2,
            company: "Add Progress Track",
            budget: "$3,000",
            status: "Canceled",
            percentage: 10,
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png" // Atlassian
        },
        {
            id: 3,
            company: "Fix Platform Errors",
            budget: "Not Set",
            status: "Done",
            percentage: 100,
            icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png" // Slack
        },
        {
            id: 4,
            company: "Launch our Mobile App",
            budget: "$32,000",
            status: "Done",
            percentage: 100,
            icon: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png" // Spotify
        },
        {
            id: 5,
            company: "Add the New Pricing Page",
            budget: "$400",
            status: "Working",
            percentage: 100,
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968835.png" // Bitbucket
        }
    ];



    return (
        <div className='table-container' style={{ display: 'flex' }}>
            <Sidebar />
            <div className="table-main-container" style={{
                backgroundImage: `url(${Background_Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                flex: 1,
                padding: '2rem',
            }}>

                <div className="authors-table-container">
                    <p className='table-main-heading'>Authors Table</p>
                    <div className="authors-table-header">

                        {authorsTableHeading.map((item) => {
                            return (
                                <div key={item.id} className="table-heading">
                                    {item.name.toUpperCase()}
                                </div>
                            )
                        })}

                    </div>
                    <div className="table-heading-line"></div>
                    <div className="authors-table-body">
                        {authorsTable.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="table-row">
                                        <div className="table-row-item">
                                            <img src={item.pic} alt="pic" className='table-row-pic' />
                                            <div className="table-row-pic-overlay">
                                                <p className='table-row-name'>{item.name}</p>
                                                <p className='table-row-email'>{item.email}</p>
                                            </div>
                                        </div>
                                        <div className="table-row-role-container">
                                            <p className="table-row-role">{item.role}</p>
                                            <p className="table-row-field">{item.field}</p>
                                        </div>
                                        <div className="table-row-status-container">
                                            <p className={item?.status == "Online" ? "table-row-status-green" : "table-row-status-white"}>{item.status}</p>
                                        </div>
                                        <div className="table-row-date-container">
                                            <p className="table-row-date">{item.date} </p>
                                        </div>


                                    </div>
                                    <div className="table-heading-line"></div>
                                </>
                            )
                        })}
                    </div>

                </div>

                <div className="project-table-container">
                    <p className='table-main-heading'>Projects</p>
                    <div className='project-sub-heading'>
                        <FaCheckCircle color='#01B574' size={20} />
                        <p className="sub-text">30 done this month</p>
                    </div>
                    <div className="project-table-header">

                        {projectTableHeader.map((item) => {
                            return (
                                <div key={item.id} className="table-heading">
                                    {item.name.toUpperCase()}
                                </div>
                            )
                        })}

                    </div>
                    <div className="table-heading-line"></div>
                    <div className="authors-table-body">
                        {projectTable.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="table-row">
                                        <div className="table-row-item">
                                            <img src={item.icon} alt="pic" className='table-row-pic' />
                                            <div className="table-row-pic-overlay">
                                                <p className='table-row-name'>{item.company}</p>
                                            </div>
                                        </div>
                                        <div className="table-row-role-container">
                                            <p className="table-row-role">{item.budget}</p>

                                        </div>
                                        <div className="table-row-status-container">
                                            <p className="table-row-role">{item.status}</p>
                                        </div>
                                        <div className="table-row-percentage-container">
                                            <p className="table-row-percentage">{item.percentage+"%"} </p>
                                            <div className='prgress-container'>
                                            <ProgressBar
                                                completed={item.percentage}
                                                height={5}
                                                labelSize={0}
                                                width={100}
                                                bgColor="#0075FF"
                                            />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="table-heading-line"></div>
                                </>
                            )
                        })}
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Table