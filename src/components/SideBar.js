import React from 'react'
import '../sidebar.css'

const SideBar = () => {
  return (
    <div className='sidebarContainer'>
        <div className='pagesLinks'>
            <img src={'/images/metrics.svg'} alt='dashboard icon' width='50px' height='50px'></img>
            <div className='title'>Dashboard</div>
        </div>
        <div className='pagesLinks'>
            <img src={'/images/analytics.svg'} alt='analytics icon'></img>
            <div className='title'>Analytics</div>
        </div>
        <div className='pagesLinks'>
            <img src={'/images/currency-exchange-2.svg'} alt='tradingicon'></img>
            <div className='title'>Trading</div>
        </div>
        <div className='pagesLinks'>
            <img src={'/images/sound-wave.svg'} alt='notifications icon'></img>
            <div className='title'>Notifications</div>
        </div>
        <div className='logout'>
            <img src={'/images/logout.svg'} alt='logout icon'></img>
            <div className='logoutTitle'>Logout</div>
        </div>
    </div>
  )
}

export default SideBar