import React from 'react'

const DescriptionDisplay = ({value}) => {

  const normalizeDescription = (description) => {
    if (!description) return ''
    return description.replace(/,/g, ' ')
  }

  return (
    <>
      {normalizeDescription(value)}
    </>
  )
}

export default DescriptionDisplay;
