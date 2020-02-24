import React from "react"

export default ({ clients, category }) => {
  return (
    <div className="w-1/3 my-4 mr-4">
      <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
        {category}
      </h2>
      <ul className="mt-4">
        {clients.map((client, index) => (
          <li key={index} className="font-semibold text-xs py-1">
            {client}
          </li>
        ))}
      </ul>
    </div>
  )
}
