import React, { useEffect, useState } from 'react';
import classes from './Projects.module.css';
import sanityClient from '../../client.js';

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        date,
        place,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className={classes.MainProjects} id='projects'>
      <section className={classes.SectionProjects}>
        <h1 className={classes.MainHeader}>My Projects</h1>
        <h2 className={classes.SecondHeader}>Welcome to my projects page!</h2>

        <section className={classes.BoxProject}>
          {projectData &&
            projectData.map((project, index) => (
              <div className={classes.BoxArticle}>
                <div className={classes.BoxItem}>
                  <img
                    className={classes.PageImg}
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                  <h3>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div>
                    <span>
                      <strong>Finished on</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong>Company</strong>: {project.place}
                    </span>
                    <span>
                      <strong>Type</strong>: {project.projectType}
                    </span>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Viev The Project <span>GO!</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
