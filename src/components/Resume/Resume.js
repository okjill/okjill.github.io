import React from 'react';

import content from '../../content.json';
import resumePdf from '../../assets/resume.pdf';
import resumePng from '../../assets/resume.png';

class Resume extends React.Component {
  render = () => {
    const actions = ['DOWNLOAD', 'OPEN'];
    const buttons = content.colorsNoBeige.map((color, id) => {
      const action = actions[id];
      let anchorProp, className;

      if (action === 'DOWNLOAD') {
        anchorProp = { 'download': resumePdf };
        className = `resume-button ${color}`;
      } else if (action === 'OPEN') {
        anchorProp = { 'target': '_blank' };
        className = `resume-button ${color}`;
      } else {
        className = `resume-button ${color} no-action`;
      }

      return <a
        key={ id }
        className={ className }
        href={ resumePdf }
        {...anchorProp}
      >
        { action }
      </a>;
    });

    return (
      <div className='info-card'>
        <img className='resume-thumbnail' src={ resumePng } alt='Jill Moore resume' />
        <div className='resume-options'>
          { buttons }
        </div>
      </div>
    );
  }
};

export default Resume;
