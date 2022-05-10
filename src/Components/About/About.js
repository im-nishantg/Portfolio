import "./About.css";
import pic from "./myimg.png";

export default function About()
{
    return(
        <section id="About">
            <h1 className="heading-text"> About </h1>
            <div className="about-container">
                <div className="info">
                    <p>
                        Hey! This is Nishant. I'm a student, currently pursuing B.Tech at Indian Institute of Technology (BHU), Varanasi (2024). I love challenges, it's something that drives me to work hard. Apart from being a proficient and passionate web developer, I'm a good chess player and a music lover. So, that was me! Feel free to reach out to me, if you think I can be helpful to you (I won't bite Lol). Have a great day!   
                    </p>
                    
                </div>

                <div className="my-img">
                        <img src={pic} alt="My pic"></img>
                        <span> Nishant Pundlik Gore</span>
                        <div className="location"> Maharashtra, India</div>
                </div>
                
            </div>
        </section>
    )
}