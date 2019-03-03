/* eslint-disable func-names */
import React from 'react';

const counter = function (number) {
  if (typeof number === 'string') {
    number = number.replace(',', '');
  }

  number = parseInt(number, 10);

  if (number < 1000) {
    return (<span>{number}</span>);
  }
  if (number >= 1000 && number < 1000000) {
    const returnValue = number.toString().slice(0, -3);
    return (<span>{returnValue}K</span>);
  }

  if (number >= 1000000 && number < 1000000000) {
    let thousandValue;
    let returnValue;
    const millionValue = number.toString().slice(0, -6);
    thousandValue = number.toString().slice(0, -3);
    thousandValue = thousandValue.substring(thousandValue.length - 3);
    if (parseInt(thousandValue, 10) >= 100) {
      returnValue = `${millionValue}.${thousandValue.slice(0, -2)}M +`;
    } else {
      returnValue = `${millionValue}M +`;
    }
    return (<span>{returnValue}</span>);
  }
  if (number >= 1000000000) {
    return (<span>1B +</span>);
  }
};

export default counter;
