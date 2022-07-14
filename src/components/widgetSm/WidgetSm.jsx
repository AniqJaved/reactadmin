import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSm.scss'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm