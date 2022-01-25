import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return ( 
  <div className='gpt3__features-container__feature'>
    <div className='gpt3__features-container__feature-title'>
      <div/> {/* for design over h1 (an empty div will be transform into gradient line over h1)*/}
      <h1>{title}</h1>
    </div>
    <div className='gpt3__features-container_feature-text'>
     <p>{text}</p> 
    </div>
  </div>
  )};

export default Feature;