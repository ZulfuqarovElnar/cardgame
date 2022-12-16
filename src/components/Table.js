
import React from 'react';
import  Card  from './Card';
import './TableStyles.css';



class Table extends React.Component{
  constructor(props) {
    super(props);
    this.numbers = this.shuffle(this.array())
    
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
  
  
  const result = this.numbers.map( number => {
    return (
      <div className='blok col-4'><Card number={number}/></div>
    )
  })
  return (
    <div className='row'>
          {result}
    </div>
  )
}

}

export default Table