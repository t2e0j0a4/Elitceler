import React from 'react'
import styles from "./Projects.module.css";
import { projects } from '../../Constant';

const Projects = () => {

  const { app__projects, projects__center, projects__head, projects__e, e__content, e__box, e__img, e__details, projects__i, i__content, i__box, i__img, i__details } = styles;

  let {externalProjects, internalProjects} = projects;

  return (
    <div className={app__projects}>

      <div className={projects__center}>

        {/* Heading */}
        <div className={projects__head}>
          <h3>Our Projects</h3>
          <p>The <span>SASS</span> that’s always there for <span>YOU</span></p>
        </div>

        {/* External Projects */}
        <div className={projects__e}>
          {/* Head */}
          <h2>External Projects</h2>
          {/* Projects */}
          <div className={e__content}>
            {
              externalProjects.map((item) => {
                return (
                  <div key={item.id} className={e__box}>
                    
                    <div className={e__img}>
                      <img src={item.projectImage} alt={item.projectName} />
                    </div>

                    <div className={e__details}>
                      <h4>{item.projectName}</h4>
                      <a href={item.projectRedirect} target="_blank" rel="noopener noreferrer">Checkout <ion-icon name="enter-outline"></ion-icon></a>
                      <p>{item.projectDesc}</p>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Internal Projects */}
        <div className={projects__i}>

          {/* Head */}
          <h2>Internal Projects</h2>
          {/* Projects */}
          <div className={i__content}>
            {
              internalProjects.map((item) => {
                return (
                  <div key={item.id} className={i__box}>
                    <div className={i__img}>
                      <img src={item.projectImage} alt={item.projectName} />
                    </div>
                    <div className={i__details}>
                      <h4>{item.projectName}</h4>
                      <p>{item.projectDesc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>

    </div>
  )
}

export default Projects