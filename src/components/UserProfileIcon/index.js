import "./user.profile.icon.css";

const UserProfileIcon = (props) => {
    return (<div className="user-profile-icon"> {props.url && <img src={props.url} alt={"user"} />}</div>);
}

export default UserProfileIcon;