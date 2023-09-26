import "./message.input.css";

import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../store";
import utils from "../../utils/messageUtils";
import { useRef, useState } from "react";
const MessageInputBox = (props) => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const messages = useSelector((state) => state.messages);
  const handleInputChange=(event) => {
    setInputValue(event.target.value);
  }
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
      setInputValue('');
    }
  };
  return (
    <div className="message-input-container">
      <textarea ref={inputEl}
        className="message-input"
        name="user-message"
        placeholder="Message Bonnie"
        onKeyDown={onKeyDown}
        onChange={handleInputChange}
        value={inputValue}
      />
      <button className="send">
        <span className="icon send-button"></span>
      </button>
    </div>
  );
};

export default MessageInputBox;
