import "./event.item.css";

const EventItem = (props) => {

    return (
        <div className="event">
            <span className="icon calender-icon"></span>
            <span className="event-name"><label>{props.event_name}</label></span>
            {props.isfavorite && <span className="icon favorite-icon"></span>}
        </div>
    )
}

export default EventItem;