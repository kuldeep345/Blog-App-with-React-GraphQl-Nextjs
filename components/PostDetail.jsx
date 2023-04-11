import moment from 'moment'
import React from 'react'
import { BiCalendarWeek } from 'react-icons/bi'
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlock , monoBlue, ocean , shadesOfPurple , tomorrowNightBlue} from "react-code-blocks";

const PostDetail = ({ post }) => {
  console.log(post)
// 

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top w-full h-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className='align-middle rounded-full'
              src={post.author.photo.url}
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-gray-700 flex items-center justify-center gap-3'>
            <BiCalendarWeek className='text-2xl text-pink-500' />
            <span>
              {moment(post.createdAt).format("MM DD , YYYY")}
            </span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((item, i) => {
      
          return <div className='my-4'>
            {item.type === "paragraph" && <p>{item.children[0].text}</p>}
            {item.type === "code-block" && <div className=' ml-4 mb-6 -mt-2 text-sm'>
              <CodeBlock
                text={item.children[0].text}
                language='javascript'
                showLineNumbers={true}
                theme={tomorrowNightBlue}
              />
            </div>
            }
          </div>
        })}
      </div>
    </div>
  )
}

export default PostDetail