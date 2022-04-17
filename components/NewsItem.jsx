import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from './Tag'


const NewsItem = ({id, title, category, image_id, tags}) => {
  return (
      <Link href={`news/${id}`}>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
            <Image
                className="w-1/1 lg:w-1/2 sm:rounded-t-xl xs:rounded-t-xl lg:rounded-l-2xl"
                width="500"
                height="500"
                src={"http://localhost:8055/assets/" + image_id}
            />
            <div class="p-6">
                <h2 class="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
                <p class="text-gray-600"></p>
                <div className="">
                    {tags.map((tag) => <Tag name={tag.tag_id.name} />)}
                </div>
            </div>
        </div>
      </Link>
  )
}

export default NewsItem