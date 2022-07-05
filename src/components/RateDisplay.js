import React from 'react'

const RateDisplay = ({value}) => {
  return (
    <span className='rate-badge'>
      {value.rate}
    </span>
  )
}

export default RateDisplay
