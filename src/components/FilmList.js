import React from 'react'
import PropTypes from 'prop-types'

import Film from './Film'

const FilmList = ({ list }) => (
  <div>
    {list.map((film, idx) => {
      const { title, openingCrawl } = film
      return <Film
        title={title}
        crawl={openingCrawl}
        key={idx}
      />
    })}
  </div>
)

FilmList.propTypes = {
  list: PropTypes.array
}

export default FilmList
