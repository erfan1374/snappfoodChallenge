import React from 'react'
import DescriptionDisplay from "./DescriptionDisplay";
import Label from "./Label";
import PriceDisplay from "./PriceDisplay";
import RateDisplay from "./RateDisplay";
import DiscountDisplay from "./DiscountDisplay";
const VendorItem = ({value}) => {
  return (
    <div className='vendor-item'>
      <div className='vendor-background-wrapper'>
        {value.best_coupon && <div className='best-coupon small-font text-bold'>
          {value.best_coupon}
        </div>}
        <div className='vendor-avatar'>
          <img src={value.defLogo}/>
        </div>
        <img className='vendor-background' src={value.backgroundImage}/>
      </div>
      <div className='vendor-body'>
        <div className='vendor-main-information'>
            <>
              <span className='vendor-name-container text-darked text-bold'>
                <span className='name'>
                  {value.title}
                </span>
                {value.discountValueForView !== 0 && <DiscountDisplay value={value.discountValueForView}/>}
              </span>
              <Label label={`(${value.voteCount})`}>
                <RateDisplay value={value}/>
              </Label>
            </>
        </div>
        <div className='vendor-description'>
          <DescriptionDisplay value={value.description}/>
        </div>
        <div className='vendor-delivery-cost small-font'>
            <Label label='پیک فروشنده : '>
              <PriceDisplay value={value.deliveryFee}/>
            </Label>
        </div>
      </div>
    </div>
  )
}

export default VendorItem
