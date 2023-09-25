import { Provider } from "react-redux";
import "./App.css";
import HeaderComponent from "./components/Header Component";
import MessageInputBox from "./components/MessageInputBoxComponent";
import Messsages from "./components/MessagesComponent";
import SidebarComponent from "./components/SidebarComponent";
import store from './store/index';

function App() {
  const userDetails = {
    user_name: "Ron Shah",
    organization: "Bizly, Inc.",
  };
  const Events_dummy = [
    {
      event_name: "SF Customer Event",
      isfavorite: true,
    },
    {
      event_name: "Marin Offiste",
      isfavorite: true,
    },
    {
      event_name: "Okaland HQ Event",
      isfavorite: true,
    },
  ];
  const VenueDetails = {
    images: {
      imgLarge: "http://www.montalbaarchitects.com/images/newsdataimage_4496.jpg",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLM-kygEIkTPNuLea03XC1wqJ9jpB_JBtVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBztrKZtGWU2_FcoEeUFOjjGoJZuj2MOXTw&usqp=CAU",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1000/285866296.jpg?k=8a5af2c70e329eb65faeeb947f3920bddfe09b8610738398336b2e8047e8e19d&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1000/285863996.jpg?k=12cdd4784c88ac6ea5f55044180c5ae1b79c0bdee77c8c98aa19b4adea16a0b9&o="
      ]
      
    },
    details: {
      venue_name: "Nobu Hotel Palo Alto",
      venue_caption: "Garden Zen Package",
      ratings: {
        rating: 4,
        count: 3446
      },
      description: "Located in the heart of downtown Palo Alto, within walking distance of a variety of dining and shopping, the Nobu Hotel Palo Alto has recently unveiled all new guest rooms and suites as well as fully refurbished public spaces.\nThe hotel’s idyllic location in the center of Silicon Valley offers proximity to many VC and tech firms.  The intimate feel of the hotel creates a comfortable work space, gathering venue, or quiet space to relax and recharge. For the leisure guest the access to outdoor activities is abundant; from cycling through the foothills of the Bay Area to sampling wine at the local vineyards.",
      feature_list: ["Room Service", "Spa", "Private beach area","24-hr security","Beach chairs", "Fitness center", "3 restaurants", "Swimming pool" ],
      event_spaces: ["Garden event space", "Garden dining room", "Zen meeting"]
    }
  };
  return (
    <div className="chatbot-app">
      <SidebarComponent events={Events_dummy} user={userDetails} />
      <div className="content">
        <HeaderComponent title={"SF Customer Event"} venueDetails={VenueDetails}/>
        <Provider store={store}>
        <div className="main-content">
          <Messsages />
        </div>
        <div className="content-footer">
          <MessageInputBox />
        </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
