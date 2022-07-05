import React from 'react'

const Label = ({label, children}) => {
  return (
    <span className='small-font'>
      <span className=''>
        {label}
      </span>
      {children}
    </span>
  )
}
export default Label
