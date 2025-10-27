import "./Home.css"
import Me from "../../assets/my-pics/my-pic.png"
import CV from "../../assets/CV/cv.pdf"
import SocialIcons from "./SocialIcons"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// Icons
import { FaDownload } from "react-icons/fa6"
import { LuMessageCircle } from "react-icons/lu"

export default function Home(){
  const [text] = useTypewriter({
    words: ['Front-End Developer',"JavaScript Developer", 'React Developer', 'ًWeb Developer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
    return (
        <div className="home" data-aos="fade-down">
            <div className="container home_container">
                <h4>Hello I'm</h4>
                <h1>Marwan Elsayed</h1>
                <h4 className="text-light">
                    {text}<Cursor cursorColor="var(--color-primary)" cursorBlinking={true}/>
                </h4>

                <div className="btns">
                    <a href={CV} download className="btn"><FaDownload/> Download CV</a>
                    <a href="#contact" className="btn btn-primary"><LuMessageCircle/> Let's Talk</a>
                </div>

                <div className="me">
                    <img src={Me} alt="my-pic" />
                </div>
                <SocialIcons/>
                
                <Tooltip title="Start Navigating The Portfolio" placement="top" arrow slots={{transition: Zoom }}>
                    <a href="#about" className="scroll_down">Scroll Down</a>
                </Tooltip>
            </div>
        </div>
    )
}