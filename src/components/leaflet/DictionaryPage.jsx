import React from 'react';
import './DictionaryPage.css';

const leafNames = [
  'Balayong',
  'Bayabas',
  'Betis',
  'Dao',
  'Dita',
  'Guyabano',
  'Ilang-ilang',
];

const DictionaryPage = () => {
  return (
    <div>
      <div className='header'>
        <p>Leaflet</p>
        <p>Scan</p>
        <p>Dictionary</p>
        <p>About</p>
      </div>

      <h1 className='dictionary'>DICTIONARY</h1>

      <div className='leaflet'>
        <h2>Leaflet</h2>
        <p>1. a printed sheet of paper, sometimes folded, containing information or 
           advertising and usually distributed free.</p>
        <p>2. Each of the leaflike structures that together make up a compound leaf.</p>
      </div>

      <div className='sengar'>
        <h2>Serenity Garden</h2>
        <p>Found just behind the College Promenade and Mater et Magistra's blessed gaze, 
          the zen-inspired Serenity Garden which can be visited by students and staffs alike 
          to encourage contemplation and reflection to those experience its peacefulness. 
          Integrating FAITH Colleges' belief that students learn in three ways, that of which: 
          through classroom lessons; through integration of values in various subjects; and most 
          importantly, through the environment. The Serenity Garden exudes a strong sense of order, 
          suggesting that everything has a natural order and a natural rule.</p>
      </div>

      <div className='leaves'>
        <h2>Leaves</h2>
        <p><i>Click the image to know more.</i></p>

        <div className='circon'>
          {leafNames.map((leafName, index) => (
            <div key={index} className='circle-container'>
              <div className='circle'></div>
              <p>{leafName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;