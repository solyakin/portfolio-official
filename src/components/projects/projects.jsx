import React, { useState } from 'react';
import allProjects from '../assets/projects.json';
import Menu from '../menu/menu';
import '../projects/project.css';

const Projects = (props) => {
    const projects = allProjects
    const [open, setOpen] = useState('none');

    const openMenu = () => {
        setOpen('block')
    }

    const closeMenu = () => {
        setOpen('none')
    }

    return(
        <div className="projects">
            <div className="wrapper">
                <h1>Solomon Akinlade</h1>
                <div className="button-collection">
                    <button onClick ={ () => props.history.push('/')}>Back Home</button>
                    <button onClick= {openMenu}>MENU</button>
                </div>
                
                <Menu open={open} closeMenu={closeMenu}/>
                <div className="project-list-container">
                    <h1>Projects</h1>
                    <div className="project-item">
                        {
                            projects.map(project => {
                                return <div className="project-wrapper" key={project.id}>
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                    <img src={project.image} alt="project-one"/>
                                    </a>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                </div>
                                
                            })
                        }
                        
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Projects;