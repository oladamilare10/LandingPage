import React from 'react'

const TopTag = ({ title, className }) => {
  return (
    <div className={`${className}`}>
      {title}
    </div>
  )
}

export default TopTag
