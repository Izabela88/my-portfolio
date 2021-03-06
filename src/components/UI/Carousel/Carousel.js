import React from 'react';
import sanityClient from '../../../client';
import classes from './Carousel.module.css';

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
  slides: [],
};

const slidesReducer = (state, event) => {
  if (event.type === 'SET_SLIDES') {
    return {
      ...state,
      slides: event.payload,
    };
  }
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % state.slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className={classes.Slide}
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={classes.SlideContent}
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className={classes.SlideContentInner}>
          <h2 className={classes.SlideTitle}>{slide.title}</h2>
          <h3 className={classes.SlideSubtitle}>{slide.subtitle}</h3>
          <p className={classes.SlideDescription}>{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        subtitle,
        description,
      }`
      )
      .then((skills) => {
        skills.forEach((skill) => {
          const values = skills.map((skill) => {
            return {
              title: skill.title,
              subtitle: skill.subtitle,
              description: skill.description,
              image: skill.mainImage.asset.url,
            };
          });
          dispatch({ type: 'SET_SLIDES', payload: values });
        });
      });
  }, []);

  return (
    <div className={classes.Slides}>
      <button
        className={classes.CarouselBtn}
        onClick={() => dispatch({ type: 'NEXT' })}
      >
        ‹
      </button>

      {[...state.slides, ...state.slides, ...state.slides].map((slide, i) => {
        let offset = state.slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button
        className={classes.CarouselBtn}
        onClick={() => dispatch({ type: 'PREV' })}
      >
        ›
      </button>
    </div>
  );
}

export default Carousel;
