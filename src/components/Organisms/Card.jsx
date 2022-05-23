import React from 'react'

const Card = ({ picture, name, cardId, path }) => {
  return (
    <article className='card s-border'>
      <div className="imag-container s-ratio-16-9">
        <a href={`/${path}/${cardId}`}>
          <img src={picture} alt={name} />
        </a>
       
      </div>
      <div className="card__data s-pxy-2">
        <h3 className='t4 center'>{name}</h3>
      </div>
    </article>
  )
}

export default Card
