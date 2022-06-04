import React from 'react'

function HomeCategory(props) {
  const {image, title, description} = props;

  return (
    <div className="col-6">
        <img 
            className='w-100 mb-2'
            src={image} 
            alt='' />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default HomeCategory