import React from 'react'
import '../compare.css'

const Compare = ({pro}) => {
  return (
    <div className='compare mb-3 ms-2'>
        <div className='countryProgress'>
            <div className='d-flex mb-3'>
            <img src={pro.flag}></img>
            <div className='ms-2'>{pro.country}</div>
            </div>
            <div className='d-flex justify-content-start align-items-center'>
            <div className='progressBar bg-success me-2' style={{width:`${pro.value}%`,height:"6px"}}></div>
            <div className='text-secondary'>{pro.value}%</div>
            </div>
        </div>
    </div>
  )
}

export default Compare