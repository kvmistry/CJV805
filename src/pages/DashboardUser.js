import UserDashboard from "../components/UserDashboard.js"
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BestSellerList from '../components/BestSellerList';

const DashboardUser = () => {
    const [data, setData] = useState("")
    return (
        <div>
            <Header setData={setData} />
            <UserDashboard /><br/><br/><br/>
            <BestSellerList />
            <Footer />
        </div>
    )
}

export default DashboardUser;