import React from 'react'

const Image = ({ href, src, title, desc}) => (
  <article class="thumb">
    <a href="images/fulls/01.jpg" className="image"><img src="images/thumbs/01.jpg" alt="" /></a>
    <h2>Magna feugiat lorem</h2>
    <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
  </article>
)

export default Image
