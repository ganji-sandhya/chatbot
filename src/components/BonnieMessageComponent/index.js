import DatePicker from "react-date-picker";
import UserProfileIcon from "../UserProfileIcon"
import FirstBonnieMessageDetail from "./FirstBonnieMessage"
import MessageDetailWithCheckboxes from "./Message_Detail_With_checkboxes";
import { messageActions } from "../../store";
import "./bonnie.message.css";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux";
import utils from "../../utils/messageUtils";
import { useState } from "react";
const BonnieMessageComponent = (props) => {
    const [value, onChange] = useState(new Date());
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const onDateChange = (value) => {
        onChange(value);
        addNextBonnieResponse();
    }
    const addNextBonnieResponse = (message) => {
        if(message) {
            setTimeout(()=> {dispatch(messageActions.addMessage(message))}, 1000);
        } else {

            setTimeout(()=> {dispatch(messageActions.addMessage(utils.addBonnieResponse(messages)))}, 1000);
        }
    }
    return (
        <div className="bonnie-message" >
            <div className="message-header">
                <UserProfileIcon />
                <div className="Message-summary"><p>{props.message_summary}</p></div>
                {props.message_summary_date && <div className="message-date"><DatePicker onChange={onDateChange} value={value} /></div>}
            </div>
            <div className="message-details">
            {props.message_detail_type === 1 && <FirstBonnieMessageDetail {...props}  />}
            {props.message_detail_type !== 1 && <MessageDetailWithCheckboxes {...props} messages={messages}
            nextBonnieResponse={addNextBonnieResponse} />}
            </div>
        </div>
    )
};

export default BonnieMessageComponent;