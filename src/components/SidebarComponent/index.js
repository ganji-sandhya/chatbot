import { useRef } from 'react';
import Events from '../Events';
import UserProfile from './UserProfileComponent';
import './sidebar.css';

const SidebarComponent = (props) => {

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        debugger;
        console.log(sidebarRef);
    }
    return (<div className="sidebar" ref={sidebarRef}>
        <div className='sidebar-header'>
          <h1>Bonnie</h1>
          <button className='sidebar-toggle' onClick={toggleSidebar}><span className='icon double-left-caret-icon' /></button>
        </div>
        <div className='sidebar-content'>
            <div className='event event-header'>
                <span className='events-header-name'>Events</span>
                <button className='new-event'><span className='icon plus-icon'></span>New Event</button>
            </div>
            <Events events={props.events} />
            <div className='event event-footer'>
                <button className='new-event'><span className='icon plus-round-icon'></span>New Event</button>
            </div>
        </div>
        <div className='sidebar-footer'>
            <UserProfile {...props.user} />
        </div>
      
    </div>);
}

export default SidebarComponent;