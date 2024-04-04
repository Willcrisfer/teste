import React from "react";
import CardProjects from "../../components/cardProjects/CardProjects";
import { useProfile } from "../../context/ProfileContext";
import backgroundDesktop from "../../assets/projectsPage/background_desktop.mp4";
import backgroundMobile from "../../assets/projectsPage/background_mobile.mp4";


const Projects = () => {

    const {profile} = useProfile()

    if (!profile) {
        return <div> <p>Erro ao Obter Projetos</p></div>
    }

    return (
        <section id="projects" className="projects max-width">
            
            <video src={backgroundDesktop} autoPlay loop muted className="projects__background"></video>
            <video src={backgroundMobile} autoPlay loop muted className="projects__background2"></video>
           
            
            <div className="projects__content">
                <h2 className="secondary-title">{profile?.projectsTitle || "Projetos"}</h2>
                <p>{profile?.projectsSubtitle || "Sem projetos no Momento"}</p>
            </div>

           <CardProjects />
           
        </section>
        
    );
  };

  export  default Projects;