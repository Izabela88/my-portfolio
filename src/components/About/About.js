import React, { useEffect, useState } from 'react';
import classes from './About.module.css';
import imgbg from '../../assets/images/me.png';
import Fade from 'react-reveal/Fade';

import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import file from '../../assets/images/cv-izabela-krupinska.pdf';

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='author']{
      bio,  
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <main className={classes.About} id='about'>
      <section className={classes.Container}>
        <div className={classes.AboutImg}>
          <Fade right duration={3000} delay={2000}>
            <img src={imgbg} alt='' />
          </Fade>
        </div>
        <Fade duration={8000}>
          <div className={classes.AboutHeader}>
            <h1>about me.</h1>
          </div>
        </Fade>
        <div className={classes.BoxText}>
          <Fade left duration={2000}>
            <h1 className={classes.BoxHeader}>Few words about myself...</h1>
            <BlockContent blocks={author.bio} />
          </Fade>
        </div>
        <div className={classes.DownloadLink}>
          <a href={file} download>
            Download my CV
          </a>
          <div className={classes.Line}>
            <hr />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
