import "./header.css";
const RatingsComponent = (props) => {
    const formattedNumber = props.count.toLocaleString("en-US");
    const renderRatings = () => {
        let i=1, stars=[];

        while(i<props.ratings) {
            stars.push(<span key={i} className="icon icon-star-full"></span>);
            i++;
        }
        if(props.rating-i === 0.5) {
            stars.push(<span  key={i}className="icon icon-star-half"></span>);
            i++;
        }
        while(i < 6) {
            stars.push(<span  key={i} className="icon icon-star-empty"></span>);
            i++;
        }
		return stars;
    }

   return(
    <div className="ratings-container">
      <div className="rating">{renderRatings()}</div> 
      <div className="rating-count">{formattedNumber}</div>
    </div>
   );
};

const VenueHeader = (props) => {
    return (<>
        <div className="venue-header">
           <div className="title-container"><h1 className="venue-title">{props.venue_name}</h1><button className="icon icon-close" onClick={props.closePopover} title={"close"}></button></div>
           <p className="venue-caption">{props.venue_caption}</p>
           <div className="ratings"><RatingsComponent ratings={props.ratings.rating} count={props.ratings.count} /></div>
        </div>
        <hr />
    </>);
}

export default VenueHeader;