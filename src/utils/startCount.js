import React from 'react';
import emptyStar from '../assets/images/empty-star.png';
import star from '../assets/images/star.png';

const starCount = (count) => {
  if (Math.floor(Number((count))) === 1) {
    return (
      <React.Fragment>
        <img src={star} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (Math.floor(Number((count))) === 2) {
    return (
      <React.Fragment>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (Math.floor(Number((count))) === 3) {
    return (
      <React.Fragment>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (Math.floor(Number((count))) === 4) {
    return (
      <React.Fragment>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (Math.floor(Number((count))) === 5) {
    return (
      <React.Fragment>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </React.Fragment>
    );
  }
  return (
      <React.Fragment>
       <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
  );
};

export default starCount;
