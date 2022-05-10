import NavC from "../Navbar/NavC";
import "./Home.css";
import pic from "./title-img.png";

export default function Title() {
    return (

        <section id="Home">
            <NavC />
            <div className="title-main">
                
                <div className="title-text">
                    <h1 className="heading">Hi ! I'm Nishant.</h1>
                    <p className="sub-heading"> A Student and a Web Developer.</p>
                </div>
                
                <img src={pic}></img>


            </div>
        </section>
    )
}