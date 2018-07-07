import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const ImageList = ({ list }) => (
  <div>
    {list.map((image, idx) => {
      const { href, src, title, description } = image
      return <Image
        description={description}
        href={href}
        src={src}
        title={title}
        key={idx}
      />
    })}
  </div>
)

ImageList.propTypes = {
  list: PropTypes.array
}

export default ImageList
