
import React from 'react';
import  Card  from './Card';
import './TableStyles.css';




class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {gameState:"Oyuna Davam"}
    this.numbers =  this.shuffle(this.array())
    this.hadleGameState = this.hadleGameState.bind(this);
    this.timeout = false;
  }
  
  hadleGameState(){
    
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.timeout = setTimeout(
      ()=>{
        // start
        const openCards = document.querySelectorAll('.front')
    
          if (openCards.length === 2) {
            const [firstCard, secondCard] = openCards
          
            firstCard.dataset.number === secondCard.dataset.number ?
              this.setState(prevState => ({gameState:"Qalibsiniz"})) //Qalib gelmek
              :
              this.setState(prevState => ({gameState:"Meglubsunuz"}))  //Meglub olmaq

            // Butun kartlari ac!
            const cards = document.querySelectorAll('.card-holder');
            cards.forEach((card, i) => {
              card.click()
            })

          }
        // end
      }, 200
    )
  }

  array = function array(){
    const number1 =Math.floor(Math.random()*10)+1
    const number2 =Math.floor(Math.random()*10)+1
    const number3 = Math.floor(Math.random()*10)+1
    const number4 = Math.floor(Math.random()*10)+1
    

    return [number1,number2,number3,number4,number1];
  }  
      
  shuffle = function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
render () {
  
  const result = this.numbers.map( (number,index) => {
    return (
      <div key={index.toString()} onClickCapture={this.hadleGameState}  className='blok col-4'><Card number={number} />
      </div>
    
    )})

  const annoucement = <div className='blok col-4'>
    { this.state.gameState }
  </div>
  return (
    <div className='row'>
          {result}

          {annoucement}
    </div>
  )
}

}

export default Table