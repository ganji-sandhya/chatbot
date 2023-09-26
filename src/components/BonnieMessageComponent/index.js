import UserProfileIcon from "../UserProfileIcon"
import FirstBonnieMessageDetail from "./FirstBonnieMessage"
import MessageDetailWithCheckboxes from "./Message_Detail_With_checkboxes";
import { messageActions } from "../../store";
import "./bonnie.message.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import utils from "../../utils/messageUtils";
import { useState } from "react";
const BonnieMessageComponent = (props) => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const [startDate, setStartDate] = useState();
    const onDateChange = (date) => {
        setStartDate(date);
        if(props.message_detail_type === messages[messages.length -1].message_detail_type) {
            addNextBonnieResponse();
        }
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
                {props.message_summary_date && <div className="message-date"><DatePicker selected={startDate} placeholderText={"Select a date"} onChange={onDateChange} /></div>}
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