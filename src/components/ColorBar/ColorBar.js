import React from 'react';

import logo from '../../assets/logo.svg';

class ColorBar extends React.Component {
  handleClick = e => {
    this.props.onClick(e.target.id);
  }

  render = () => {
    const { props: { activeColor, color, id, text } } = this;
    let className, image;

    if (color === 'beige') {
      className = 'color-bar-main';
      image = <img id='logo' src={ logo } alt="Jill Michelle Moore logo" />;
    } else if (color === activeColor) {
      className = `color-bar active ${color}`;
    } else {
      className = `color-bar ${color}`
    }

    return <div 
      className={ className }
      key={ id }
      id={ color }
      onClick={ this.handleClick }
    >
      { text }
      { image }
    </div>
  }
}

export default ColorBar;
