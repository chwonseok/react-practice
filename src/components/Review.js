import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Review.module.css';

const NewLine = (props) => {
  return <div>This is today what I've learned!</div>;
};

const Review = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<NewLine />, document.getElementById('test-root'))}
      <div className={classes.review}>
        <h1>Let's review that I've learned so far</h1>
      </div>
    </React.Fragment>
  );
};

export default Review;
