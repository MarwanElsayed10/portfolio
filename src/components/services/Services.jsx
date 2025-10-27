import "./services.css"

// Icons
import {MdDesignServices} from "react-icons/md"
import {IoIosRocket} from "react-icons/io"
import {FaCode} from "react-icons/fa"

export default function Services(){
    return (
        <section id="services" data-aos="fade-up">
            <div className="top_section">
                <h5>What I Offer</h5>
                <h2>SERVICES</h2>
            </div>

            <div className="container container_services">
                <article className="card">
                    <MdDesignServices className="icon"/>
                    <h3>Web Design</h3>
                    <p className="text-light">I have a strong passion for web design and enjoy creating clean, modern, and user-friendly interfaces.</p>
                </article>
                <article className="card">
                    <IoIosRocket className="icon"/>
                    <h3>Fast Performance</h3>
                    <p className="text-light">I focus on improving performance by minimizing resources, reducing render blocking and using efficient techniques.</p>
                </article>
                <article className="card">
                    <FaCode className="icon"/>
                    <h3>Clean Code</h3>
                    <p className="text-light">I avoid unnecessary complexity and keep my code simple, readable, clear structure, and easy to maintain.</p>
                </article>
            </div>
        </section>
    )
}