import React from 'react';
import './imageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ImageLinkForm">
      <div className='form-container flex-center'>
        <p>Detect Face in a Image</p>
        <div className='form'>
          <input type="text" onChange={onInputChange} />
          <button className='btn-style-1' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm