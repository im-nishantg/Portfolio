import "./Skills.css";
import reactLogo from "./images/React-icon.png";
import jsLogo from "./images/JS-icon.jpg";
import cppLogo from "./images/cpp-icon.png";
import dsaLogo from "./images/dsa-icon.webp";
import gitLogo from "./images/git-icon.png";
import githubLogo from "./images/github-icon.png";
import mongodbLogo from "./images/mongodb-icon.webp";
import bootstrapLogo from "./images/bootstrap-icon.png";
import cssLogo from "./images/css-icon.png";
import htmlLogo from "./images/html-icon.png";
import nodejsLogo from "./images/nodejs-icon.jpg";
import cLogo from "./images/c-icon.webp";

const arr = [
    {
        src: htmlLogo,
        name: "HTML"
    },
    {
        src: cssLogo,
        name: "CSS"
    }, {
        src: jsLogo,
        name: "JavaScript"
    }, {
        src: reactLogo,
        name: "React"
    }, {
        src: nodejsLogo,
        name: "NodeJS"
    }, {
        src: bootstrapLogo,
        name: "Bootstrap"
    }, {
        src: mongodbLogo,
        name: "MongoDB"
    }, {
        src: cLogo,
        name: "C"
    }, {
        src: cppLogo,
        name: "C++"
    },
    {
        src: dsaLogo,
        name: "Data structure & Algorithms"
    }, {
        src: gitLogo,
        name: "Git"
    }, {
        src: githubLogo,
        name: "Github"
    },

]

function iconBox(item) {
    return (
        <div className="icon-box " key={Math.random()}>
            <div className="icon-div">
                <img src={item.src} alt="react-logo"></img>
            </div>
            <span> {item.name} </span>
        </div>

    )
}



export default function Skills() {
    return (
        <section id="Skills">
            <h1 className="heading-text"> Skills</h1>
            <div className="skills-container">
                {arr.map((item) => iconBox(item))}
            </div>

        </section>
    )
}