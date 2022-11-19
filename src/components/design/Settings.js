import React from 'react'
const urlImgBase = '/';

const Settings = ({color,upperText,lowerText,uploadImage, textSize, textColor}) => {
  return (
    <div className='card bg-light container'>
        <h3 className='text-center'>Settings</h3>
        <h4>Change T-shirt color</h4>
        <div className='tshirt-color'>
            <img onClick={color} src={`${urlImgBase}black.png`} alt='black-tshirt' id='black' />
            <img onClick={color} src={`${urlImgBase}white.png`} alt='white-tshirt' id='white' />
            <img onClick={color} src={`${urlImgBase}grey.png`} alt='grey-tshirt' id='grey' />
            <img onClick={color} src={`${urlImgBase}blue.png`} alt='blue-tshirt' id='blue' />
            <img onClick={color} src={`${urlImgBase}red.png`} alt='red-tshirt' id='red'/>
        </div>
        <hr/>
        <h4>Write Text</h4>
        <input onChange={upperText} type="text" className='form-control form-control sm mb-2' 
                placeholder='Upper Text' />
        <input onChange={lowerText} type="text" className='form-control form-control sm mb-2' 
                placeholder='Lower Text' />
        <hr />
        <h4>Upload Image</h4>
        <div className='form-group'>
            <input onChange={uploadImage} type='file' className='form-control-file mb-2' />
        </div>
        <hr />
        <h4>Text Size</h4>
        <input onChange={textSize} type='range' min='24' max='44'/>
        <hr />
        <h4>Text Color</h4>
        <select onChange={textColor} className='form-control form-control sm mb-2'>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
        </select>
        <hr />
        <button className="btn btn-primary btn-sm mb-2">Save</button>
    </div>
  )
}

export default Settings