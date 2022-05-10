import "./projects.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import projectsArray from "./projectsArray";

function projectBox(item) {
    return (
        <Card style={{ width: '18rem' }} key={Math.random()}>
            <Card.Img variant="top" src={item.src} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.desc}
                </Card.Text>
                <div className="links">
                    <a href={item.link} target="__blank" ><Button variant="primary">Visit</Button></a>
                    <div className="github-link"><a href={item.code} target="__blank" > Get Code</a> </div>
                </div>

            </Card.Body>
        </Card>
    )
}

export default function Projects() {

    return(

        <section id="Projects">
            <h1 className="heading-text"> Projects </h1>
            <div className="projects-container">
                {projectsArray.map((item) => projectBox(item))}
            </div>

        </section>
    )

}