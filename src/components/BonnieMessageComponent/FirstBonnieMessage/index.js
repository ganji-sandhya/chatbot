const FirstBonnieMessageDetail = (props) => {

    
        return (
            <div className="bonnie-message-detail">
                <ul className="bonnie-suggestions-list">
                <li className="suggestion"><span className="icon icon-pen"></span><span>Designing an Event</span></li>
                <li className="suggestion"><span className="icon icon-calender"></span><span>Booking a Venue</span></li>
                <li className="suggestion"><span className="icon icon-person"></span><span>Managing guests</span></li>
                <li className="suggestion"><span className="icon icon-suitcase"></span><span>Finding leads</span></li>
                <li className="suggestion"><span className="icon icon-graph"></span><span>Tracking ROI</span></li>
                </ul>
                <span className="end-message-note">{props.end_message_note}</span>
            </div>
        );
    
};

export default FirstBonnieMessageDetail;