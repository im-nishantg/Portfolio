import NavC from "../Navbar/NavC";
import "./Home.css";
import pic from "./title-img.png";

export default function Title() {
    return (

        <section id="Home">
            <NavC />
            <div className="title-main">

                <div className="title-text" data-aos="fade-up" data-aos-duration="1200">
                    <h1 className="heading">Hi ! I'm Nishant.</h1>
                    <p className="sub-heading"> A Student and a Web Developer.</p>
                </div>

                <img src={pic} alt="animated-pic" data-aos="fade-left" data-aos-duration="1300" ></img>


            </div>
        </section>
    )
}