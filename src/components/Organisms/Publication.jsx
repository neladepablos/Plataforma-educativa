import React from 'react'

const Publication = ({ title, author, fecha, content }) => {
  return (
    <article className='publication l-block card'>
      <div className="publication__container">
        <h2 className='publication__title t3 s-center'>{title}</h2>
        <span><b>{author}</b> a las {fecha}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication
