import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Tour from "../components/Tour";

function Service(){
    return(
        <>
          <Navbar />
          <Hero
            cName="hero-mid"
            heroImg={AboutImg} 
            title="Service"
            
            btnClass="hide"
          />
          <Trip/>
          <Tour/>
          <Footer/>
        </>
    )
}

export default Service;