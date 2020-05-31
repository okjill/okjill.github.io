import React from 'react';

import mainImg from '../../assets/jill.png'
import Resume from '../../components/Resume/Resume';

class InfoCard extends React.Component {  
  render = () => {
    const { content, type } = this.props;

    if (type === 'main') {
      return (
        <div className='info-card'>
          <img className='info-card-img' src={mainImg} alt='Jill Moore image' />
        </div>
      );
    } else if (type === 'resume') {
      return <Resume />;
    }else {
      return <div className='info-card'></div>;
    }
  }
}

export default InfoCard;
