import React from 'react';

import content from '../../content.json';

import ColorBar from '../ColorBar/ColorBar';
import InfoCard from '../InfoCard/InfoCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { activeColor: 'beige', type: 'main' };
  }

  onClick = id => {
    this.setState({ activeColor: id });
  }

  renderColorBars = () => {
    const { state: { activeColor } } = this;

    return content.colors.map((color, id) => {
      return (
        <ColorBar
          key={ id }
          activeColor={ activeColor }
          color={ color }
          onClick={ this.onClick }
        />
      );
    });
  }

  render = () => {
    const { state: { activeColor } } = this;
    let type;

    switch (activeColor) {
      case 'beige':
        type = 'main';
        break;
      case 'blue':
        type = 'hello';
        break;
      case 'green':
        type = 'resume';
        break;
      default:
        type = '';
    }

    return (
      <div id='wrapper'>
        <div id='banner'>
          { this.renderColorBars() }
        </div>
        <div className={ activeColor } id='main'>
          <InfoCard content={ content } type={ type } />
        </div>
      </div>
    );
  }
}

export default App;
