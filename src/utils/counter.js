import React from 'react';

const counter = (count) => {
  if (Math.floor(Number((count))) <= 999) {
    return (
      count
    );
  }
  if (Math.floor(Number((count))) >= 1000
  || Math.floor(Number((count))) <= 1999) {
    return (
      <span>1k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 2000
  || Math.floor(Number((count))) <= 2999) {
    return (
      <span>2k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 3000
  || Math.floor(Number((count))) <= 3999) {
    return (
      <span>3k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 4000
  || Math.floor(Number((count))) <= 4999) {
    return (
      <span>4k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 5000
  || Math.floor(Number((count))) <= 5999) {
    return (
      <span>5k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 6000
  || Math.floor(Number((count))) <= 6999) {
    return (
      <span>6k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 7000
  || Math.floor(Number((count))) <= 7999) {
    return (
      <span>7k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 8000
  || Math.floor(Number((count))) <= 8999) {
    return (
      <span>8k + </span>
    );
  }
  if (Math.floor(Number((count))) >= 9000
  || Math.floor(Number((count))) <= 9999) {
    return (
      <span>9k + </span>
    );
  }
  return (
    <span>10k + </span>
  );
};

export default counter;
