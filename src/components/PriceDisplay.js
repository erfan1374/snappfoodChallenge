import React from 'react'

const PriceDisplay = ({value}) => {

  const normalizePrice = price => {
    if (!price) return ''
    return price.toLocaleString('en-GB') + ' تومان '
  }
  return (
    <>
      {normalizePrice(value)}
    </>
  )
}
export default PriceDisplay
