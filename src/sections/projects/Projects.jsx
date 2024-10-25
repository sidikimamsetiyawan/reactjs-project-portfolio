import React from "react";
import styles from './ProjectsStyles.module.css'
import GoIMG from '../../assets/Go.png'
import LearnReactJS from '../../assets/react-js.png';
import NodeJSIMG from '../../assets/node-js.png';
import FitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
    return <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
                src={GoIMG} 
                link="https://github.com/sidikimamsetiyawan/go-basic"
                h3="Go"
                p="Go Fundamental"
            />
            <ProjectCard
                src={LearnReactJS} 
                link="https://github.com/sidikimamsetiyawan/go-basic"
                h3="React JS"
                p="React JS Fundamental"
            />
            <ProjectCard
                src={NodeJSIMG} 
                link="https://github.com/sidikimamsetiyawan/nodejs-upload-image-rest-api"
                h3="Node JS"
                p="Upload Image"
            />
            <ProjectCard
                src={GoIMG} 
                link="https://github.com/sidikimamsetiyawan/go-project-personal-blog"
                h3="Go"
                p="Personal Blog"
            />
        </div>
    </section>;
}

export default Projects;