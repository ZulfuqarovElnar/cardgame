
import React from 'react';
import  Card  from './Card';
import './TableStyles.css';

const Table = () => {
  return (
    <div className='row'>
        <div className='blok col-4'><Card /></div>
        <div className='blok col-4'><Card /></div>
        <div className='blok col-4'><Card /></div>
        <div className='blok col-4'><Card /></div>
        <div className='blok col-4'><Card /></div>
    </div>
  )
}

export default Table