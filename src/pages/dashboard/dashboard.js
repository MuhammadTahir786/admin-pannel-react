import React from 'react'; // Adjust path if needed
import Sidebar from '../../components/sideBar/sidebar';
import { Background_Image, Jelly_Fish } from '../../assets/images';
import './dashboard.css'; // Adjust path if needed
import { IoWalletSharp } from "react-icons/io5";
import { TbUsersPlus } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import SemiCircleProgressBar from "react-progressbar-semicircle";


const Dashboard = () => {

    const data = [
        { id: 1, title: "Today's Money", value: "$53,000", percentage: "+55%", icon: <IoWalletSharp size={20} color="#fff" /> },
        { id: 2, title: "Today's User", value: "2300", percentage: "+5%", icon: <TbUsersPlus size={20} color="#fff" /> },
        { id: 3, title: "New Clients", value: "+3,052", percentage: "-14%", icon: <LuNotepadText size={20} color="#fff" /> },
        { id: 4, title: "Sales", value: "$173000", percentage: "+8%", icon: <FaShoppingCart size={20} color="#fff" /> },
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

                <h1 className='dashboard-heading'>Dashboard</h1>
                <div className="dashboard-card-container">

                    {data.map((item, index) => {
                        return (
                            <div key={index} className="dashboard-card">
                                <div className="card-content">
                                    <p className="card-title">{item.title}</p>
                                    <div className="card-value-container">
                                        <p className="card-value">{item.value}</p>
                                        <p className="card-percentage">{item.percentage}</p>
                                    </div>
                                </div>
                                <div className="card-icon">
                                    {item.icon}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="dashboard-details-container">
                    <div className="dashboard-user-main-container">
                        <div className="dashboard-user-container">
                            <div className='dshboard-user-details'>
                                <p className="dashboard-user-welcome">Welcome back,</p>
                                <p className='dashboard-user-name'>Mark Johnson</p>
                                <p className='dashboard-user-subtitle'>Glad to see you again!</p>
                                <p className='dashboard-user-question'>Ask me anything.</p>
                            </div>
                            <p className='dashboard-user-btn'>Tap to record</p>
                        </div>
                        {/* <img src={Jelly_Fish} alt="Jelly Fish" className="dashboard-card-image" /> */}

                    </div>
                    <div className='dashbord-satisfaction-container'>
                        <p className='dashboard-main-heading'>Satisfaction</p>
                        <p className='dashboard-sub-heading'>From all projects</p>

                        <div className='dashboard-satisfaction-progress'>

                        <SemiCircleProgressBar stroke={"#0075FF"} diameter={240} background={"#22234b"} percentage={80} showPercentValue />
                        </div>

                        <div className='rating-section-container'>
                            <p className='percentage-value'>0%</p>
                            <div className='rating-section-percentage'>
                                <p className='percentage-actual-value'>95%</p>
                                <p className='percentage-actual-value-text'>Based on likes</p>
                            </div>
                            <p className='percentage-value-2'>100%</p>

                        </div>

                    </div>

                    <div className="dashboard-user-main-container">
                        <div className="dashboard-user-container">
                            <div className='dshboard-user-details'>
                                <p className="dashboard-user-welcome">Welcome back,</p>
                                <p className='dashboard-user-name'>Mark Johnson</p>
                                <p className='dashboard-user-subtitle'>Glad to see you again!</p>
                                <p className='dashboard-user-question'>Ask me anything.</p>
                            </div>
                            <p className='dashboard-user-btn'>Tap to record</p>
                        </div>
                        {/* <img src={Jelly_Fish} alt="Jelly Fish" className="dashboard-card-image" /> */}

                    </div>


                </div>


            </div>
        </div>
    );
};

export default Dashboard;