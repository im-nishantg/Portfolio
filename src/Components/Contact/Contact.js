import "./Contact.css";
import { Button } from "react-bootstrap";

export default function Contact() {
    return (
        <section id="Contact">
            <div className="heading-text"> Contact </div>
            <p className="text-center mt-2"> Wanna build beautiful website for your business? Get in touch now!</p>
            <div className="contact-container">

                <div className="form-container">
                    <form action="https://formsubmit.co/eeaa7f124ec314899d4439896f21d4fc" method="POST"  >
                        <input type="text" placeholder="Your Name" name="Name"  required></input>
                        <input type="email" placeholder="Your Email" name="Email"  required></input>
                        <input type="text" placeholder="Subject" name="Subject"  required></input>
                        <textarea rows={1} cols={100} placeholder="Message" name="Message" required></textarea>
                        <button type="submit" target="__blank" className="btn btn-primary">Submit</button> 
                    </form>
                </div>

                <div className="socials">
                   <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nishantgore2000@gmail.com" target="__blank"> <i className="bi bi-envelope-fill"></i></a>
                   <a href="https://www.instagram.com/im_nishantg/"  target="__blank"> <i className="bi bi-instagram"></i></a>
                   <a href="https://www.facebook.com/profile.php?id=100004819177467" target="__blank"> <i className="bi bi-facebook"></i></a>
                   <a href="https://www.linkedin.com/in/nishant-gore-a73133229" target="__blank"><i className="bi bi-linkedin"></i></a>
                   <a href="https://github.com/im-nishantg" target="__blank"> <i className="bi bi-github"></i></a>
                </div>

            </div>

        </section>
    )
}