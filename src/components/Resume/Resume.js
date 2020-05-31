import React from 'react';

import resume from '../../assets/resume.png';

export default function Resume() {
    return (
      <div className='info-card'>
        <img className='resume-thumbnail' src={ resume } alt='Jill Moore resume' />
        <div className='resume-options'>
          <button className='resume-button'>DOWNLOAD</button>
          <button className='resume-button'>ZOOM</button>
        </div>
      </div>
    );
};
