import "./skills.css"
import CSS from "../../assets/skills/css3.svg"
import JavaScript from "../../assets/skills/javascript.svg"
import ReactJS from "../../assets/skills/react.svg"
import Tailwind from "../../assets/skills/tailwindcss.svg"
import Github from "../../assets/skills/github.svg"
import MaterialUI from "../../assets/skills/material-ui.svg"
import Redux from "../../assets/skills/redux-logo.svg"
import HTML from "../../assets/skills/HTML5.svg"


const SkillsData = [
    {
        id:1,
        image:HTML,
        title:"HTML",
        disc:"Markup Language"
    },
    {
        id:2,
        image:CSS,
        title:"CSS",
        disc:"User Interface"
    },
    {
        id:3,
        image:JavaScript,
        title:"JavaScript",
        disc:"Interaction"
    },
    {
        id:4,
        image:ReactJS,
        title:"ReactJS",
        disc:"Framework"
    },
    {
        id:5,
        image:Tailwind,
        title:"TailwindCSS",
        disc:"User Interface"
    },
    {
        id:6,
        image:Github,
        title:"Git & Github",
        disc:"Code hosting"
    },
    {
        id:7,
        image:MaterialUI,
        title:"Material UI",
        disc:"React component library"
    },
    {
        id:8,
        image:Redux,
        title:"Redux",
        disc:"React State Management"
    },
]

export default function Skills(){
    return (
        <section className="skills" id="skills" data-aos="fade-left">
            <div className="top_section">
                <h5>What skills do i have</h5>
                <h2>MY EXPERIENCE</h2>
            </div>

            <div className="container container_skills">
                {SkillsData.map(skill => {
                    
                    return <article className="card_skill" key={skill.id}>
                    <div className="icon">
                        <img src={skill.image} alt="skill image" />
                    </div>
                    <div className="content">
                        <h4>{skill.title}</h4>
                        <p className="text_light">{skill.disc}</p>
                    </div>
                </article>
                })}
            </div>
        </section>
    )
}