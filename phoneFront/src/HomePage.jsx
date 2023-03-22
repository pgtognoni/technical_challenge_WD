import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BounceLoader from 'react-spinners/BounceLoader'



function HomePage() {
    const [ isLoading, setIsLoading ] = useState(true)
    
    setTimeout(() => {
        setIsLoading(false)
    }, 1500)

  return (
    <div>
        {isLoading 
        ? <div className='loading'><BounceLoader /></div>
        : <div className='container-fluid home-page'>
            <div className='row'>
                <div className='col-6'>
                    <img className='img-fluid' src='./images/IPhone_7.png' alt='iphone' />
                </div>
                <div className='col-6 row'>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='img-fluid' src='./images/Galaxy_S7.png' alt='iphone' />
                        </div>
                        <div className='col-6'>
                            <img className='img-fluid' src='./images/Honor_10.png' alt='iphone' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img className='img-fluid' src='./images/Moto_G6.png' alt='iphone' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <img className='img-fluid' src='./images/Nokia_7.1.jpg' alt='iphone' />
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src='./images/P10_Lite.jpg' alt='iphone' />
                </div>
                </div>
            <div className='row'>
                <div className='col-6'>
                    <img className='img-fluid' src='./images/Xiaomi_MI_A2.jpeg' alt='iphone' />
                </div>
                <div className='col-6'>
                    <img className='img-fluid' src='./images/ZenPhone_5.jpg' alt='iphone' />
                </div>
            </div>
            <div className='loading phones-home'>
                <Link to='/phones' className="all-phones nav-link btn">Check Our Phones</Link>
            </div>
        </div>
        }
    </div>
  )
}

export default HomePage