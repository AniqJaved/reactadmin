import React from 'react'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import './topbar.scss'

const Topbar = () => {
  return (
    <>
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    lamadmin
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Null" className='topAvatar' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Topbar