import React from 'react';
import emptyStar from '../assets/images/empty-star.png';
import starRating from '../assets/images/star.png';

const starCount = (count) => {
  const number = Number(count);
  if (number === 1) {
    return (
      <React.Fragment>
        <img src={starRating} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (number === 2) {
    return (
      <React.Fragment>
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (number === 3) {
    return (
      <React.Fragment>
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={emptyStar} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (number === 4) {
    return (
      <React.Fragment>
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={emptyStar} alt="" />
      </React.Fragment>
    );
  }
  if (number === 5) {
    return (
      <React.Fragment>
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
        <img src={starRating} alt="" />
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
