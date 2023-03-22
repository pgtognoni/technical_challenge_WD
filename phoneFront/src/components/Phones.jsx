import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getphones } from '../apiCalls'
import BounceLoader from 'react-spinners/BounceLoader'

function Phones(props) {
    
    const [ phones, setPhones ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const callAPI = async () => {
            const response = await getphones()
            setPhones(response.data)
        }

        callAPI()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [phones])

  return (
    <>
        {isLoading 
        ? <div className='loading'><BounceLoader /></div>
        : <> 
        <div className="container">
        <div className='row'>
        {phones.map(phone => {
            return(
                    <div className="card col-4" style={{width: "18rem"}} key={phone.name}>
                        <div className='row'>
                            <img  src={`./images/${phone.imageFileName}`} className="img-fluid" alt={phone.name} />
                        </div>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h2 className="card-text">{phone.manufacturer}</h2>
                            <h3 className="card-title">{phone.name}</h3>
                            <h2 className="card-price">$ {phone.price}</h2>
                            <Link to={`/phones/${phone.id}`} className="btn btn-primary">See Details</Link>
                        </div>
                    </div>
            )
        })}
        </div>
        </div>        
</>}
    </>
  )
}

export default Phones