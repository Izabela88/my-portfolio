import React, { useEffect, useState } from 'react';
import classes from './Projects.module.css';
import sanityClient from '../../client.js';
import Fade from 'react-reveal/Fade';

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
          <Fade duration={4000}>
            <h1>my projects.</h1>
          </Fade>
        </div>

        <section className={classes.Items}>
          {projectData &&
            projectData.map((project, index) => (
              <div key={index} className={classes.Item}>
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
                    <p>{project.description}</p>
                    <a
                      className={classes.LinkStyle}
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
