import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Become the tended active',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  }
]

const Features = () => {
  return (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>                                                {/* what is key in react why it must be unique  https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905 */}
      {featuresData.map((feature,index) => <Feature title={feature.title} text={feature.text} key={feature.title + index}/> )} 
    </div>
  </div>
  )
};

export default Features;