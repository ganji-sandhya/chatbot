import "./content.css";
import {useState} from 'react';

const VenueContent = (props) => {
const [isOpen, setIsOpen] = useState(false);

  const togglePseudoElement = () => {
    setIsOpen(!isOpen);
  };

    return(
        <div className="venue-content">
            <div className={`venue-description ${isOpen ? 'open' : ''}`}><p onClick={togglePseudoElement}>{props.description}</p><a href="javascript:void(0)" onClick={togglePseudoElement}>Close</a></div>
            <hr />
            <div className="venue-button-container">
                <button className="btn"><span className="icon icon-video"></span>Video tour</button>
                <button className="btn"><span className="icon icon-menu"></span>Latest menu</button>
                <button className="btn"><span className="icon icon-floorplan"></span>Floor plans</button>
            </div>
            <hr />
            <div className="venue-features">
                <ul className="feature-list">
                    {props.feature_list.map((feature,index) =><li className="feature-item" key={index} ><span className="feature">{feature}</span></li>)}
                </ul>
            </div>
            <hr />
            <div className="event-spaces">
                <ul className="event-spaces-list">
                    {props.event_spaces.map((space,index) =><li className="event-space-item" key={index} ><span className="event-space-name">{space}</span></li>)}
                </ul>
            </div>
            <hr />
            <div className="footer-button-contaier">
                <button className="btn customize-with-bonnie" onClick={props.closePopover}>Customize with Bonnie</button>
                <button className="btn btn-primary book-now">Book now</button>
            </div>
        </div>
    )
};

export default VenueContent;