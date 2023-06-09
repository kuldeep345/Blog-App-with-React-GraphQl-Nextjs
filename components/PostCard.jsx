import moment from 'moment/moment'
import Link from 'next/link'
import React from 'react'
import { BiCalendarWeek } from 'react-icons/bi'

const PostCard = ({post : {node}}) => {

 
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img 
            src={node.featuredImage.url}
            alt={node.title}
            className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          />
        </div>  
        <h1 className='transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
          <Link href={`/post/${node.slug}`}>
              {node.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img 
                 alt={node.author.name}
                 height="30px"
                 width="30px"
                 className='align-middle rounded-full'
                 src={node.author.photo.url}
                />
                <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                  {node.author.name}
                </p>
            </div>
            <div className='font-medium text-gray-700 flex items-center justify-center gap-3'> 
                <BiCalendarWeek className='text-2xl text-pink-500'/>
                <span>
                  {moment(node.createdAt).format("MM DD , YYYY")}
                </span>
            </div>
        </div>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-0 mb-8'>
          {node.excerpt}
        </p>
          <div className='text-center'>
              <Link href={`/post/${node.slug}`}>
                  <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'> 
                    Continue Reading
                  </span>
              </Link>
          </div>
    </div>
  )
}

export default PostCard