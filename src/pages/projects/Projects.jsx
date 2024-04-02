import React from "react";
import "./projects.css";
import CardProjects from "../../components/cardProjects/CardProjects";
import { useProfile } from "../../context/ProfileContext";
import imagem from "../../assets/projectsPage/sticks.png";


const Projects = () => {

    const {profile} = useProfile()

    return (
        <section id="projects" className="projects max-width">
            
            <div className="projects__content">
                <h2 className="secondary-title">{profile?.projectsTitle}</h2>
                <p>{profile?.projectsSubtitle}</p>
            </div>
    
           <div>
            <img src={imagem} className="projects__background" alt="" />
           </div>
        </section>

    );
  };

  export  default Projects;