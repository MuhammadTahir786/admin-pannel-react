import React from 'react'; // Adjust path if needed
import Sidebar from '../../components/sideBar/sidebar';
import { Background_Image, Jelly_Fish } from '../../assets/images';
import './dashboard.css'; // Adjust path if needed
import { IoWalletSharp } from "react-icons/io5";
import { TbUsersPlus } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import HalfCircularProgress from '../../components/halfCirculrProgress/halfCircularProgress';
import { FaRegSmile } from "react-icons/fa";
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import CircularProgressBar from '../../components/circularProgress/circularProgress';
import Chart from 'react-apexcharts'
import ProgressBar from "@ramonak/react-progress-bar";


const Dashboard = () => {

    const data = [
        { id: 1, title: "Today's Money", value: "$53,000", percentage: "+55%", icon: <IoWalletSharp size={20} color="#fff" /> },
        { id: 2, title: "Today's User", value: "2300", percentage: "+5%", icon: <TbUsersPlus size={20} color="#fff" /> },
        { id: 3, title: "New Clients", value: "+3,052", percentage: "-14%", icon: <LuNotepadText size={20} color="#fff" /> },
        { id: 4, title: "Sales", value: "$173000", percentage: "+8%", icon: <FaShoppingCart size={20} color="#fff" /> },
    ]

    const activeUsersData = [
        { id: 1, name: "Users", value: "32,984", percentage: "60", icon: <TbUsersPlus size={15} color="#fff" /> },
        { id: 2, name: "Clicks", value: "2,42m", percentage: "90", icon: <LuNotepadText size={15} color="#fff" /> },
        { id: 3, name: "Sales", value: "2,400$", percentage: "30", icon: <FaShoppingCart size={15} color="#fff" /> },
        { id: 4, name: "Items", value: "320", percentage: "50", icon: <IoWalletSharp size={15} color="#fff" /> },
    ]

    const [areaChart, setAreaChart] = React.useState({
        series: [{
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 60, 63, 32, 109, 100, 120, 130]
        }, {
            name: 'Series 2',
            data: [11, 32, 45, 32, 34, 52, 41, 32, 33, 44, 55, 66]
        }],
        options: {
            colors: ['#10b981', '#3b82f6'],

            chart: {
                height: 350,
                type: 'area',
                foreColor: '#ffffff',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'month',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },

        },
        tooltip: {
            theme: 'dark', // Change to 'dark' so text becomes white and background becomes dark
            // OR use custom CSS if needed:
            style: {
                fontSize: '14px',
                color: '#000000'
            },
            onDatasetHover: {
                highlightDataSeries: true
            }
        }


    });


    const [barChart, setBarChart] = React.useState({


        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                foreColor: '#ffffff',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
        },




    })

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
                        <p className='dashboard-main-heading'>Satisfaction Rate</p>
                        <p className='dashboard-sub-heading'>From all projects</p>

                        <div className='dashboard-satisfaction-progress'>
                            <HalfCircularProgress progress={75} size={200} strokeWidth={16} color="#10b981" />
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

                    <section className="dashboard-user-referral-container">

                        <p className='dashboard-main-heading'>Referral Tracking</p>

                        <div className='dashboard-user-referral-card'>
                            <div className='cards-container'>
                                <div className='small-cards-container'>
                                    <p className='small-cards-heading'>Invited</p>
                                    <p className='small-cards-value'>1445 people</p>
                                </div>
                                <div className='small-cards-container'>
                                    <p className='small-cards-heading'>Bonus</p>
                                    <p className='small-cards-value'>1,465</p>
                                </div>
                            </div>
                            <div className="circular-progress-container">
                                <CircularProgressBar />
                            </div>
                        </div>
                    </section>


                </div>

                <div className="dashboard-chart-container">

                    <div className="dashboard-area-chart-container">
                        <Chart options={areaChart.options} series={areaChart.series} type="area" height={350} />
                    </div>

                    <div className="dashboard-bar-chart-container">
                        <div className='bar-chart-container'>
                            <Chart options={barChart.options} series={barChart.series} type="bar" height={180} />
                        </div>
                        <p className='dashboard-main-heading'>Active Users</p>
                        <div className='user-sub-heading'>
                            <p className='user-sub-heading-value'>(+23)</p>
                            <p className='user-sub-heading-text'>than last week</p>
                        </div>
                        <div className='dashboard-active-users-card-container'>
                            {activeUsersData.map((item, index) => {
                                return (
                                    <div key={index} className='dashboard-active-users-card'>
                                        <div className='active-users-card-icon-container'>
                                            <div className='active-users-card-icon'>
                                                {item.icon}
                                            </div>
                                            <p className='active-users-card-name'>{item.name}</p>
                                        </div>

                                        <div className='active-users-card-details'>

                                            <p className='active-users-card-value'>{item.value}</p>
                                            <ProgressBar
                                                completed={item.percentage}
                                                height={5}
                                                labelSize={0}
                                                bgColor="#10b981"
                                            />
                                            {/* <p className='active-users-card-percentage'>{item.percentage}</p> */}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Dashboard;