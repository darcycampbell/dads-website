import React from 'react'

const ServiceCard = ({id, name, description}) => {
    return (
        <div id={id} className='service-card container'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard