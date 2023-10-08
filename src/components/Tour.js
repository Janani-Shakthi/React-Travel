import "./TripStyles.css";
import TripData from "./TripData";
import Trip4 from "../assets/9.jpg";
import Trip5 from "../assets/10.jpg";
import Trip6 from "../assets/11.jpg";
import Trip7 from "../assets/12.jpg";
import Trip8 from "../assets/img.jpg";
import Trip9 from "../assets/night.jpg";

function Tour(){
    return(
        <div className="trip">
            <h1>Popular Destinations</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip4}
                    heading="Trip to Udanda"
                    text="Uganda, officially the Republic of Uganda, is a landlocked country in East Africa. The country is bordered to the east by Kenya, to the north by South Sudan, to the west by the Democratic Republic of the Congo, to the south-west by Rwanda, and to the south by Tanzania"
                />
                <TripData
                    image={Trip5}
                    heading="Trip to Thailand"
                    text="Thailand, officially the Kingdom of Thailand and historically known as Siam, is a country in Southeast Asia on the Indochinese Peninsula. With a population of almost 70 million, it spans 513,120 square kilometres."
                />
                <TripData
                    image={Trip6}
                    heading="Trip to Italy"
                    text="Its location has played an important role throughout its history. The sea surrounds Italy, and mountains crisscross the interior, dividing the land into regions. The Alps cut across the top of the country and are streaked with long, thin glacial lakes."
                />
                
                <TripData
                    image={Trip7}
                    heading="Trip to Mexico"
                    text="Mexico is bounded to the west and south by the Pacific Ocean, to the east by the Gulf of Mexico and the Caribbean Sea, and to the southeast by Guatemala and Belize. Mexico also administers such islands and archipelagoes as its treasure."
                />
                <TripData
                    image={Trip8}
                    heading="Trip to Philippines"
                    text="Philippines, island country of Southeast Asia in the western Pacific Ocean. It is an archipelago consisting of more than 7,000 islands and islets lying about 500 miles From bustling cities to stunning beaches and mountains, the Philippines has a lot to offer adventurous explorers."
                />
                <TripData
                    image={Trip9}
                    heading="Trip to China"
                    text="China has been drawing increasing amounts of Western visitors eager to explore its beauty and culture. Most travelers find the country easy to navigate and well worth effort. Beijing, Shanghai, Guilin, Xi'an, and Hong Kong are the five best-known tourist cities."
                />
                
            </div>
        </div>
    );
}

export default Tour;