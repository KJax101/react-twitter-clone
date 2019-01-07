import React from 'react';
import "./MyModal.css"

const MyModal = props => {
  if (props.open === false) {
    return null;
  }

  return (
    <div className='modal-overlay' onClick={props.onClose}>
      <div className='modal' onClick={(e) => {
        e.stopPropagation()
      }}>
        {props.children}
      </div>
    </div>
  )
}

export default MyModal

