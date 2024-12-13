import React from 'react'

const ServiceCard = ({id, name, description}) => {
    return (
        <div id={id}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard