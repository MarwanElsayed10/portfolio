import "./projects.css"
import Img1 from "../../assets/projects/weatherApp.png"
import Img2 from "../../assets/projects/todoapp.png"
import Img3 from "../../assets/projects/forkifyApp.png"
import Img4 from "../../assets/projects/guessMyNumber.png"
import Img5 from "../../assets/projects/diceGame.png"
import Img6 from "../../assets/projects/todoApp2.png"
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
const portfolioProjects  = [
    {
        id:1,
        image:Img1,
        title:"Weather Application",
        desc:"This weather application is built using React and integrates with a third-party weather API to provide real-time temperature, humidity, and wind data for any city worldwide. The UI is clean and responsive, ensuring a smooth experience across all devices.",
        github:"https://github.com/MarwanElsayed10/Weather-app",
        demo:"https://weather-app150.netlify.app/"
    },
    {
        id:2,
        image:Img2,
        title:"ToDo Application",
        desc:"This is a responsive To-Do application built using React, designed to help users manage tasks efficiently on any device. The clean and modern UI adapts seamlessly to mobile, tablet, and desktop screens.",
        github:"https://github.com/MarwanElsayed10/todo-app105",
        demo:"https://todoapp105.netlify.app/"
    },{
        id:3,
        image:Img3,
        title:"Forkify App",
        desc:"This project is a recipe search application built with vanilla JavaScript, allowing users to search for thousands of recipes using a public API. It provides detailed cooking instructions, ingredient lists, and preparation steps based on the user’s search.",
        github:"https://github.com/MarwanElsayed10/Forkify-App",
        demo:"https://forkify-restaurant-app.netlify.app/"
    },{
        id:4,
        image:Img4,
        title:"Guess My Number Game",
        desc:"This is a simple number-guessing game built using JavaScript, where the user tries to guess a randomly generated secret number within a limited range. The app provides instant feedback, showing whether the guess is too high or too low, and updates the score.",
        github:"https://github.com/MarwanElsayed10/Guess-My-Number",
        demo:"https://guess-my-number7.netlify.app/"
    },{
        id:5,
        image:Img5,
        title:"Dice Game",
        desc:"This dice game is built using vanilla JavaScript, allowing two players to compete by rolling a virtual dice and accumulating points. The game features turn switching, score tracking, and winning conditions based on reaching a specific score.",
        github:"https://github.com/MarwanElsayed10/Dice-game",
        demo:"https://dice-game10.netlify.app/"
    },{
        id:6,
        image:Img6,
        title:"ToDo Application",
        desc:"This is a simple task management application built with vanilla JavaScript, allowing users to add, complete, and delete daily tasks. The interface dynamically updates based on user actions through DOM manipulation and event handling.",
        github:"https://github.com/MarwanElsayed10/ToDo-App",
        demo:"https://todoapp106.netlify.app/"
    },
]

export default function Projects(){
    return (
        <section className="projects" id="projects" data-aos="zoom-in-up">
            <div className="top_section">
                <h5>My Recent Work</h5>
                <h2>PORTFOLIO</h2>
            </div>
            <div className="container projects_container">
                {portfolioProjects.map(project => {
                return <article className="portfolio_item" key={project.id}>
                    <div className="portfolio_item_img">
                        <img src={project.image} alt="" />
                    </div>
                    <h3>
                        {project.title}
                    </h3>
                    <h5>
                        {project.desc}
                    </h5>
                    <div className="portfolio_item_btns">
                        <Tooltip title="View Github Code" arrow slots={{transition: Zoom }}>
                            <a href={project.github} target="_blank" className="btn">Github</a>
                        </Tooltip>
                        <Tooltip title="View App" arrow slots={{transition: Zoom }}>
                            <a href={project.demo} target="_blank" className="btn btn_primary">Live Demo</a>
                        </Tooltip>
                    </div>
                </article>
                })}
            </div>
        </section>
    )
}