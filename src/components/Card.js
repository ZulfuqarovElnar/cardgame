import React from 'react'
import './CardStyles.css'

class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? <img src="assets/card.jpg" alt="" /> : <img src="assets/200.jpg" alt="" />}
        </button>
      );
    }
  }

export default Card