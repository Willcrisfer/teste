import React from "react";
import CardProjects from "../../components/cardProjects/CardProjects";
import { useProfile } from "../../context/ProfileContext";
import background from "../../assets/homePage/profile.png";


const Projects = () => {

    const {profile} = useProfile()

    if (!profile) {
        return <div> <p>Erro ao Obter Projetos</p></div>
    }

    return (
        <section id="projects" className="projects max-width">
            <img src={background} className="projects__background" alt=""/>
            
            <div className="projects__content">
                <h2 className="secondary-title">{profile?.projectsTitle || "Projetos"}</h2>
                <p>{profile?.projectsSubtitle || "Sem projetos no Momento"}</p>
            </div>

           <CardProjects />
           
        </section>
        
    );
  };

  export  default Projects;