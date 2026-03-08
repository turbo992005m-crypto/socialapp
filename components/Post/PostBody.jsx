
import React from 'react'

export default function PostBody({ body, image }) {
  return (
    <>
      <h2 className="text-2xl font-medium dark:text-white">
        {body}
      </h2>

      {image && (
        <div className="py-4">
          <div className="flex justify-between gap-1 mb-1">
            <a className="flex" href="#">
              <img className="max-w-full rounded-lg" src={image} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}