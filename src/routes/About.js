import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function About(){
    return(
        <>
          <Navbar />
          <Hero
            cName="hero-mid"
            heroImg={AboutImg} 
            title="About Us"
            
            btnClass="hide"
          />
          <Aboutus/>
          <Footer/>
        </>
    )
}

export default About;