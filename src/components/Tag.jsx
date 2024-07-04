import React from 'react'

const Tag = ({text, className}) => {
  return (
    <div className="flex justify-center">
      <div className={className}>
        {text}
      </div>
    </div>
  )
}

export default Tag
