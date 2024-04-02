import React, { useEffect, useState } from 'react'; // Importação única do React
import { useProfile } from '../../context/ProfileContext';

async function CardProjects() {
    const { profile } = useProfile();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Quando os dados do perfil forem carregados, definimos loading como false
        setLoading(false);
    }, [profile]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile?.projects || profile.projects.length === 0) {
        return <div> <p>Nenhum Projeto no Momento.</p></div>;
    }

    return (
        <div className='projects__info'>
            {profile.projects.map(project => (
                <ul className='projects__list' key={project.id}>
                    <li className='projects__item'>
                        <div className='projects__description'>
                            <h3 className="tertiary-title">{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={`See More about ${project.title}`}
                            >
                                See More &rarr;
                            </a>
                        </div>
                        <div className="image">
                            <img src={project.img} alt={`Project: ${project.title}`} />
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default CardProjects;
