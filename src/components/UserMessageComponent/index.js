import UserProfileIcon from "../UserProfileIcon";
import "./user.message.css";

const UserMessageComponent = (props) => {
    return (
        <div className="user-message" >
            <div className="message-header">
                <UserProfileIcon type={props.user_type} />
                <div className="Message-summary"><p>{props.message_summary}</p></div>
            </div>
        </div>
    )
};

export default UserMessageComponent;