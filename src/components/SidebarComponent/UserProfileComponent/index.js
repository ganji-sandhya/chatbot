import UserProfileIcon from "../../UserProfileIcon";
import "./userprofile.css";

const UserProfile = (props) => {
  
    return (
        <div className="user-profile">
           <UserProfileIcon url={props.url} />
            <div className="user-profile-details"><span className="user-name"> {props.user_name}</span><span className="user-organization"> {props.organization}</span></div>
        </div>
    )
};

export default UserProfile;