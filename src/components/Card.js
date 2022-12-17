
import React from 'react'
import './CardStyles.css'

class Card extends React.Component {
      constructor(props) {
        super(props);
      this.state = {isToggleOn: true};
      this.image = `assets/card${props.number}.jpg`
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn:false // !prevState.isToggleOn
      }
      ));

      

    }
    
    

    render() {
      return (
        <button className='card-holder' onClick ={this.handleClick}>
          {this.state.isToggleOn ? <img className='back' src="assets/card.jpg" alt="" /> : <img className = "front"  data-number={this.props.number} src={this.image} alt="" />  }
        </button>
      );
    }
  }

export default Card