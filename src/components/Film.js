import React from 'react'

const Film = ({ href, src, title, crawl }) => (
  <article className='thumb'>
    <h2>{title}</h2>
    <p>{crawl}</p>
  </article>
)

export default Film
