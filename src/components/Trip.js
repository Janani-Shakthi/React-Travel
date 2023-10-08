import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, officially the Republic of Indonesia, a  beautiful country in Southeast Asia and pacific oceans. It consiste of over 17,000 islands, including sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in France"
                    text="France, officially the French Republic, is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans, giving it one of the largest discontiguous exclusive economic zones in the world."
                />
                <TripData
                    image={Trip3}
                    heading="Trip in Germany"
                    text="Germany, officially the Federal Republic of Germany, is a country in the western region of Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union"
                />
                
            </div>
        </div>
    );
}

export default Trip;