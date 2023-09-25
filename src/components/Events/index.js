import EventItem from "./EventItem"

const Events = (props) => {
    return (
        <>
        { props.events.map((event, index) => <EventItem  key={index} {...event} />)}
        </>
    );
}

export default Events;