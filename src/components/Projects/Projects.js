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
        <div className={classes.MainHeader}>
          <h1>my projects.</h1>
        </div>

        <section className={classes.Items}>
          {projectData &&
            projectData.map((project, index) => (
              <div className={classes.Item}>
                <div className={classes.ItemImage}>
                  <img
                    className={classes.BoxImg}
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                </div>

                <div className={classes.ItemText}>
                  <div className={classes.TextWrap}>
                    <h3 className={classes.TextTitle}>
                      <p>{project.title}</p>
                    </h3>
                    {/* <p>
                      <strong>Finished on:</strong>{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </p> */}
                    {/* <p>
                      <strong>Company</strong>: {project.place}
                    </p> */}
                    {/* <p>
                      <strong>Type:</strong> {project.projectType}
                    </p> */}
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View The Project
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
