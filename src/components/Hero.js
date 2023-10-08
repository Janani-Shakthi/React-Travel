import "./HeroStyles.css";
import Wave from"../assets/wave.png";


function Hero(props) {
    return(
        <>
          <div className={props.cName}>
             <img src={props.heroImg} />
             <div className="wave "> </div>

            <div className="hero-text">
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
            
          </div>
        </>
    )
}

export default Hero;