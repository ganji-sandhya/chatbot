
import second from "../bonnieResponses/2.json";
import third from "../bonnieResponses/3.json";
import fourth from "../bonnieResponses/4.json";
import fivth from "../bonnieResponses/5.json";
import sixth from "../bonnieResponses/6.json";
import seventh from "../bonnieResponses/7.json";
import eighth from "../bonnieResponses/8.json";
import nineth from "../bonnieResponses/9.json";

const utils =  {
    addBonnieResponse(messages) {
        const bonnieMessages = messages.filter(
            (message) => message.user_type === "bonnie"
          );
          const nextMessageCounter =
        bonnieMessages[bonnieMessages.length - 1].message_detail_type + 1;
        let bonnieMessage;
      switch (nextMessageCounter) {
        case 2:
          bonnieMessage = second;
          break;
        case 3:
          bonnieMessage = third;
          break;
        case 4:
          bonnieMessage = fourth;
          break;
        case 5:
          bonnieMessage = fivth;
          break;
        case 6: 
          bonnieMessage = sixth;
          break;
        case 7: 
          bonnieMessage = seventh;
          break;
        case 8: 
         bonnieMessage = eighth;
         break;
         case 9: 
          bonnieMessage = nineth;
          break;
         default: 
         //nothing
      }
      return bonnieMessage;
    }
    
}

export default utils;