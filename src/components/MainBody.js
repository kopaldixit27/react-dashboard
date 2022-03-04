import React from 'react'
import '../mainbody.css'
import '../styles/custom.scss'
import Comparisons from './Comparisons'
import TeamMembers from './TeamMembers'

const MainBody = () => {
  return (
    <div className='mainbodyContainer'>
        <div className='header'>
            <div className='headings'>
                <h1 className='display-6 fw-bold'>Dashboard</h1>
                <div className='fw-light'>Welcome back, Andrew</div>
            </div>
            <div className='headerSide'>
            <div className='button'>
                <img src={'/images/e-add.svg'} alt='add icon'></img>
                <div className='ms-1'>Add Unit</div>
            </div>
            <div className='profile'>
                <img src={'/images/profile-pic.jfif'} width='50px' height='50px'></img>
                <div className='fw-light'>Andrew Johnstons</div>
            </div>
            </div>
        </div>

        <div className='container-md mt-5 mb-3'>
            <div className='row'>
                <div className='col border-secondary border-end text-center'>
                    <div className='description mb-3'>BALANCE</div>
                    <div className='prices'>$5900.00</div>
                </div>
                <div className='col border-secondary border-end text-center'>
                    <div className='description mb-3'>PROFITs</div>
                    <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='prices'>$950.00</div>
                    <img src='/images/Polygon 1.svg'></img>
                    <span className='text-success'>+56%</span>
                    </div>
                </div>
                <div className='col border-secondary border-end text-center'>
                    <div className='description mb-3'>LOSSES</div>
                    <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='prices'>$450.00</div>
                    <img src='/images/Polygon 2.svg'></img>
                    <span className='text-danger'>+56%</span>
                    </div>
                </div>
                <div className='col text-center'>
                    <div className='description mb-3'>CURRENCIES</div>
                    <div className='currencies'>
                    <div className='justify-content-center align-items-center ms-3'>
                        <img src={'/images/currency-dollar.svg'} className='me-4' ></img>
                        <img src={'/images/currency-euro.svg'} className='me-4'></img>
                        <img src={'/images/currency-yen.svg'} className='me-4'></img>
                        <img src={'/images/bitcoin-2.svg'}></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container d-flex justify-content-evenly align-items-center mt-5 p-3 shadow-lg'>
            <div className='country'>
                <div className='ctryName'>Italy</div>
                <div className='d-flex'>
                    <div className='prices me-2'>475</div>
                    <img src='/images/Polygon 1.svg'></img>
                </div>
                <img src='/images/Vector 1.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
            <div className='country'>
                <div className='ctryName'>United States</div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='prices me-2'>431</div>
                    <img src='/images/Polygon 1.svg'></img>
                </div>
                <img src='/images/Vector 3.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
            <div className='country'>
                <div className='ctryName'>Canada</div>
                <div className='d-flex'>
                    <div className='prices me-2'>174</div>
                    <img src='/images/Polygon 2.svg'></img>
                </div>
                <img src='/images/Vector 4.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
            <div className='country'>
                <div className='ctryName'>Spain</div>
                <div className='d-flex'>
                    <div className='prices me-2'>475</div>
                    <img src='/images/Polygon 1.svg'></img>
                </div>
                <img src='/images/Vector 1.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
            <div className='country'>
                <div className='ctryName'>Japan</div>
                <div className='d-flex'>
                    <div className='prices me-2'>134</div>
                    <img src='/images/Polygon 1.svg'></img>
                </div>
                <img src='/images/Vector 3.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
            <div className='country'>
                <div className='ctryName'>South Africa</div>
                <div className='d-flex'>
                    <div className='prices me-2'>471</div>
                    <img src='/images/Polygon 2.svg'></img>
                </div>
                <img src='/images/Vector 4.svg' alt="graph curve" width='90px' className='mt-2'></img>
            </div>
        </div>

        <div className='data row'>
            <div className='teamMembers mt-5 col'>
                <TeamMembers />
            </div>
            <div className='comparison mt-5 col'>
                <Comparisons />
            </div>
        </div>
    </div>
  )
}

export default MainBody