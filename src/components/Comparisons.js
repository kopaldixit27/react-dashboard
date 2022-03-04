import React from 'react'
import { useState } from 'react'
import '../comparisons.css'
import Compare from './Compare'

const Comparisons = () => {
    const [progress,setProgress]=useState(
        [
            {
                id:1,
                flag:"/images/usa.svg",
                country:"United States",
                value:93
            },
            {
                id:2,
                flag:"/images/italy.svg",
                country:"Italy",
                value:73
            },
            {
                id:3,
                flag:"/images/spain.svg",
                country:"Spain",
                value:13
            }
        ]
    )

  return (
    <div className='comparisons'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='heading'>Comparisons</div>
            <a href='#' className='text-primary'>View All</a>
        </div>
        <div className='ctryProgress shadow-sm p-3'>
            {progress.map(pro => 
                <Compare key={pro.id} pro={pro} />
            )}
        </div>
    </div>
  )
}

export default Comparisons