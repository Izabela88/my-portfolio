import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={classes.modal__overlay} />
          <div
            className={classes.modal__wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            <div className={classes.modal}>
              <div className={classes.modal__header}>
                <button
                  type='button'
                  className={classes.modal__close__button}
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <p>MESSAGE SENT</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
