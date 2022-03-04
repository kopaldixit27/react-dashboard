import React from 'react'
import '../members.css'

const Members = ({mem}) => {
  return (
    <div className='member d-flex mb-4 justify-content-between align-items-center shadow-sm p-1'>
        <div className='d-flex justify-content-center align-items-center'>
        <img src={mem.picture} width='40px' height='40px' className='pic'></img>
        <div className='ms-2'>{mem.name}</div>
        </div>
        <div className={`position${mem.backgroundBlue ? 'Odd' : 'Even'}`}>{mem.position}</div>
    </div>
  )
}

export default Members