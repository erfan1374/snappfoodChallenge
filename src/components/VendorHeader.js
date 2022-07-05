import React from 'react'
const VendorHeader = ({count}) => {
  return (
    <header className='header-vendors'>
      <h3 className='vendor-count'>
        {count} فروشنده باز
      </h3>
    </header>
  )
}


export default VendorHeader
