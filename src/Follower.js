import React from 'react'

const Follower = ({ avatar_url: image, login: name, html_url: url }) => {

  return <article className='card'>
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <a className='btn' href={url}>View Profile</a>
  </article>
}

export default Follower
