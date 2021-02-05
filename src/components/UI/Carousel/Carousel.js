import React from 'react';
import classes from './Carousel.module.css';
import icon1 from '../../../assets/images/html5.svg';
import icon2 from '../../../assets/images/css31.svg';
import icon3 from '../../../assets/images/javascript.svg';
import icon4 from '../../../assets/images/react1.svg';
import icon5 from '../../../assets/images/sass1.svg';

console.clear();

const slides = [
  {
    title: 'HTML5',
    subtitle: '99,9%',
    description: 'The basics achieved !',
    image: icon1,
  },
  {
    title: 'CSS3',
    subtitle: '70%',
    description: 'Almost got it... :)',
    image: icon2,
  },
  {
    title: 'JavaScript',
    subtitle: '70%',
    description: '... my little nightmare... ;D',
    image: icon3,
  },
  {
    title: 'Sass',
    subtitle: '70%',
    description: 'I think it is OK :D',
    image: icon5,
  },
  {
    title: 'React.js',
    subtitle: '40%',
    description: "I'm just getting started... xD",
    image: icon4,
  },
];

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
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
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
      {/* <div
        className={classes.SlideBackground}
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      /> */}
      <div
        className={classes.SlideContent}
        style={{
          backgroundImage: `url('${slide.image}')`,
          width: '310px',
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

  return (
    <div className={classes.Slides}>
      <button
        className={classes.CarouselBtn}
        onClick={() => dispatch({ type: 'NEXT' })}
      >
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
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
