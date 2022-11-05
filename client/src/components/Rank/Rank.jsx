import React from 'react'
import './rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className='rank-container flex-center'>
      <div className='top-text'>
        {`${name}, your current rank is...`}
      </div>
      <div className="bottom-text">
        {entries}
      </div>
    </div>
  )
}

export default Rank