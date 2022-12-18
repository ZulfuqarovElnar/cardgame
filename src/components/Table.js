
import React from 'react';
import  Card  from './Card';
import './TableStyles.css';




class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {gameState:<h3>Oyuna Davam</h3>}
    this.numbers =  this.shuffle(this.array())
    this.hadleGameState = this.hadleGameState.bind(this);
    this.onReset = this.onReset.bind(this);
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
              this.setState(prevState => ({gameState:<h3>Təbriklər, Qalibsiniz!</h3>})) //Qalib gelmek
              :
              this.setState(prevState => ({gameState:<h3>Təəssüflər, Uduzdunuz.</h3>}))  //Meglub olmaq

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
  onReset() {
    window.location.reload() 
}
  
render () {
  
  const result = this.numbers.map( (number,index) => {
    return (
      <div key={index.toString()} onClickCapture={this.hadleGameState}  className='blok col-4'><Card number={number} /> 
      </div>
    
    )})
    

  const annoucement = <div className='annoucement'>
    { this.state.gameState }
  </div>

  const reset = <button type="button"className='btn' onClick={ this.onReset }>
                  <span><h3>Təkrar başla</h3></span>
                </button>

  return (
    <div className='row'>
          {result} 

          {annoucement}


          {reset}
    </div>
   
  )
}

}

export default Table