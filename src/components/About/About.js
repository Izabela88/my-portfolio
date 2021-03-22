import React, { useEffect, useState } from 'react';
import classes from './About.module.css';
import imgbg from '../../assets/images/me.png';
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';

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
          <img src={imgbg} alt='' />
        </div>
        <div className={classes.AboutHeader}>
          <h1>about me.</h1>
        </div>
        <div className={classes.BoxText}>
          <h1 className={classes.BoxHeader}>Few words about myself...</h1>
          <BlockContent
            blocks={author.bio}
            projectId='qntdc3lc'
            dataset='production'
          />
        </div>
        <div className={classes.DownloadLink}>
          <a href='/'>Download my CV</a>
          <div className={classes.Line}>
            <hr />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
