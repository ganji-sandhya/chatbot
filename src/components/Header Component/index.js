import { useState } from "react";
import React from 'react';
import "./header.css";
import VenueDetailComponent from "../VenueDetailComponent";

const HeaderComponent = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <div className="header">
            <div className="header-title">{props.title}</div>
            <div className="button-container">
                <button className="btn btn-primary">Chat</button>
                <button className="btn" onClick={openModal}>Book</button>
                <button className="btn">Guests</button>
            </div>
            {isModalOpen && <VenueDetailComponent venueDetails={props.venueDetails} closePopover={closeModal} />}
       </div>
    )

}

export default HeaderComponent;