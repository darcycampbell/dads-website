import React from 'react'

const SlideButton = ({className, updateShow, showSlide, symbol}) => {
    function handleClick() {
      if (className === "prev") {
        updateShow(showSlide - 1)
      } else if (className === "next") {
        updateShow(showSlide + 1)
      }
    }  
  
  return (
        <button
          className={className}
          onClick={handleClick}
        >
          {symbol}
        </button>
      )
}

export default SlideButton