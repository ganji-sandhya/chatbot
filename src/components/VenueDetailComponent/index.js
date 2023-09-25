// App.js
import Modal from '../Modal';
import React from 'react';
import "./venue.detail.css";
import VenueSidebar from './Sidebar';
import VenueHeader from './Header';
import VenueContent from './Content';
const VenueDetailComponent = (props) => {
       
        return (
          <Modal>
            <div className='venue-details'>
                <VenueSidebar {...props.venueDetails.images} />
                <div className='Venue-content-container'>
                     <VenueHeader  {...props.venueDetails.details} closePopover={props.closePopover} /> 
                    <VenueContent  {...props.venueDetails.details} closePopover={props.closePopover} />
                </div> 
            </div>
          </Modal>
  );
}

export default VenueDetailComponent;
