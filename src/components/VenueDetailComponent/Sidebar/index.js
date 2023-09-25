import "./sidebar.css";
const VenueSidebar = (props) => {
    console.log(props);
    return (
        <div className="venue-sidebar">
             <div className="img-lg-col"><img src={props.imgLarge} alt="nobu hotel large"></img></div>
            <div className="imgs-sm-col">{props.imgs.map((url,index) => <img src={url} key={index} alt={"nobu hotel"+index}/> )}</div>
        </div>
    )
}

export default VenueSidebar;