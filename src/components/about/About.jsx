import "./about.css"
import ImageMe from "../../assets/my-pics/my-pic2.jpg"
import { LuMessageCircle } from "react-icons/lu"
// Icons
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About(){
    return (
        <section className="about" id="about" data-aos="fade-right">
            <div className="top_section">
                <h5>Get to know</h5>
                <h2>ABOUT ME</h2>
            </div>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={ImageMe} alt="my_pic" />
                    </div>
                </div>
            <div className="about_content">
                <div className="about_cards">
                    <div className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>Junior FrontEnd Dev</small>
                    </div>
                    <div className="about_card">
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>In Progress...</small>
                    </div>
                    <div className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projects</h5>
                        <small>+5 completed</small>
                    </div>
                </div>
                <p>I am a Junior Front-End Developer with a solid understanding of HTML, CSS, JavaScript, React Framework in addition to many libraries. I enjoy building responsive and user-friendly 
                    web interfaces. <br/> Recently graduated and passionate about turning ideas and designs into functional web experiences.
                    Skilled in modern UI frameworks such as Bootstrap and Tailwind CSS to create clean and visually appealing layouts.<br/>
                    Familiar with Git and GitHub for version control, collaboration, and code management.
                    Comfortable working with APIs and integrating external data into front-end applications.<br/>
                    Always eager to learn new technologies and improve my skills.
                    Enjoy exploring new tools, libraries, and modern trends in the front-end ecosystem.<br/>
                    Always seeking opportunities to improve my skills through hands-on projects and learning modern frameworks.</p>
                <a href="#contact" className="btn btn_primary"><LuMessageCircle/> Let's Talk</a>
            </div>
            </div>

        </section>
    )
}