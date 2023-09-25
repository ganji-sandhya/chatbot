const MessageDetailWithCheckboxes = (props) => {

    
    return (
        <div className="bonnie-message-detail">
            <ul className="bonnie-suggestions">
            {
                props.list_with_checkboxes && props.message_detail_list.map((item, index) => <li className="checkbox-item" key={index}>
                    
                    
                    <input type="checkbox" 
                    id={props.message_detail_type+""+index}
                     defaultChecked={item.checked} name={item.label} />
                     <label htmlFor={props.message_detail_type+""+index}>{item.label}</label></li>)
            }
            {
                props.list_with_images_checkbox &&
                props.message_detail_list.map((item, index) => <li className="venue-item" key={index}>
                    <span className="img-container"><img src={item.url}  alt={item.label} /></span>
                    <span className="checkbox-container"><input type="checkbox" className="venue-checkbox"
                    id={props.message_detail_type+""+index}
                     defaultChecked={item.checked} name={item.label} />
                     <label htmlFor={props.message_detail_type+""+index} >{item.label}</label></span></li>)
            }
            
            </ul>
            {props.end_message_note && <span className="end-message-note">{props.end_message_note}</span>}
        </div>
    );

};

export default MessageDetailWithCheckboxes;