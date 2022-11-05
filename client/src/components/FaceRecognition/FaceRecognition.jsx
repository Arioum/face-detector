import React from 'react'
import './faceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='image-container flex-center'>
            <img id='inputimage' src={imageUrl} width="500" height="auto" alt="" />
            <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        </div>
    )
}

export default FaceRecognition