

import React from 'react';
import  Card  from './Card';
import './TableStyles.css';

class Table extends React.Component{
  constructor(props) {
    super(props);
    this.numbers = [1,1,2,4,6]
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