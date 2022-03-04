import React from 'react'
import SideBar from './SideBar'
import '../dashboard.css'
import MainBody from './MainBody'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <div className='sideBar'>
            <SideBar />
        </div>
        <div className='mainPage'>
            <MainBody />
        </div>
    </div>
  )
}

export default Dashboard