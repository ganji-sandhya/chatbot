import "./message.input.css";

import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../store";
import utils from "../../utils/messageUtils";
import { useRef } from "react";
const MessageInputBox = (props) => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const messages = useSelector((state) => state.messages);
  const onKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value.trim().length > 0) {
      e.stopPropagation();
      e.preventDefault();
      dispatch(
        messageActions.addMessage({
          user_type: "user",
          message_summary: e.target.value.trim(),
        })
      );
      inputEl.current.val= "";
      let bonnieMessage = utils.addBonnieResponse(messages);
      bonnieMessage && setTimeout(()=> {dispatch(messageActions.addMessage(bonnieMessage))}, 1000);
    }
  };
  return (
    <div className="message-input-container">
      <textarea ref={inputEl}
        className="message-input"
        name="user-message"
        placeholder="Message Bonnie"
        onKeyDown={onKeyDown}
      />
      <button className="send">
        <span className="icon send-button"></span>
      </button>
    </div>
  );
};

export default MessageInputBox;
