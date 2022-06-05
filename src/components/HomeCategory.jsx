import React from 'react'
import { Link } from 'react-router-dom';

function HomeCategory(props) {
  const {image, title, description} = props;

  return (
    <div className="col-6">
      <Link to='/category'>
        <img 
              className='w-100 mb-2'
              src={image} 
              alt='' />
          <h2>{title}</h2>
          <p>{description}</p>
      </Link>
    </div>
  )
}

export default HomeCategory