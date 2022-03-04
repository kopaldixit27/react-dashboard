import React from 'react'
import { useState } from 'react'
import Members from './Members'
import '../teamMembers.css'

const TeamMembers = () => {
    const [members,setMembers]=useState(
        [
            {
                id:1,
                picture:"/images/profile-pic.jfif",
                name:"Andrew Johnston",
                position:"Top Trader",
                backgroundBlue:true
            },
            {
                id:2,
                picture:"/images/profile-pic2.jfif",
                name:"Anna Atkinsons",
                position:"Manager",
                backgroundBlue:false
            },
            {
                id:3,
                picture:"/images/profile-pic4.jfif",
                name:"Mark Atkinsons",
                position:"Top Trader",
                backgroundBlue:true
            },
            {
                id:4,
                picture:"/images/profile-pic3.jpeg",
                name:"Johanna Tairons",
                position:"Manager",
                backgroundBlue:false
            }
        ]
    )

  return (
    <div className='team'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='heading'>Team Members</div>
            <a href='#' className='text-primary'>View All</a>
        </div>
        <div className='teamDetails'>
            {members.map((mem)=>
                <Members key={mem.id} mem={mem}/>
            )}
        </div>
    </div>
  )
}

export default TeamMembers