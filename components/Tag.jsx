import React from 'react'

const Tag = ({ name }) => {
  return (
    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{name}</span>
  )
}

export default Tag