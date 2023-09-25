import { useEffect, useRef } from 'react';
import BonnieMessageComponent from '../BonnieMessageComponent';
import UserMessageComponent from '../UserMessageComponent';
import './messages.css';
import {useSelector} from 'react-redux';
const Messsages = () => {
    
  const messages = useSelector(state => state.messages);
  const messageEnd= useRef(null);
        
  useEffect(()=>{
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' });
  },[messageEnd, messages]);
  return (
    <>
    {
        messages.map((message, index) => message.user_type === "bonnie" ? <BonnieMessageComponent key={index}  {...message} /> : <UserMessageComponent key={index} {...message} />)
    }
    <div ref={messageEnd}></div>
    </>
  )
  }

export default Messsages;