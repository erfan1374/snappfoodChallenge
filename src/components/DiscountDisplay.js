import React from 'react'

const DiscountDisplay = ({value}) => {
  return (
    <span className='discount-badge more-small-font'>
      {value + '%'}
    </span>
  )
}

export default DiscountDisplay
