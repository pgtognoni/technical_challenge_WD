import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOnePhone } from '../apiCalls'
import BounceLoader from 'react-spinners/BounceLoader'

function OnePhone() {
    const id = useParams().id
    const [ phone, setPhone ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const callAPI = async () => {
            const response = await getOnePhone(id)
            setPhone(response.data)
        }

        callAPI()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [phone])

  return (
    <>
        {isLoading 
        ? <div className='loading'><BounceLoader /></div>
        : <> 
            {phone.map(phone => {
                return(
                <div className="card phone container mb-3"  key={phone.name}>
                    <div className='row one-phone g-0'>
                        <div className='col-md-6 col'>
                            <img  src={`../images/${phone.imageFileName}`} className="img-fluid rounded-start" alt={phone.name} />
                        </div>
                        <div className='col-md-6 col pb-3'>
                            <div className="card-body">
                                <h1>{phone.manufacturer}</h1>
                                <h3 className="card-title">{phone.name}</h3>
                                <p className="card-text-one">{phone.description}</p>
                                <div className='row'>
                                    <p className="card-text-one">Color: {phone.color}</p>
                                    <p className="card-text-one">Screen size: {phone.screen}</p>
                                    <p className="card-text-one">Processor: {phone.processor}</p>
                                </div>
                                <h1 className="card-price">$ {phone.price}</h1>
                            </div>
                            <Link to='/phones' className="btn btn-secondary">Go Back</Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </>}
    </>
  )
}

export default OnePhone