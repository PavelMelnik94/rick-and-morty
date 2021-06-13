import React from 'react'


export default function BlogPosts({header, text}) {


    return (
        <>
            
        <div className=" box blog-posts">
      <h1 className='is-size-4'>{header}</h1>
      <p>{text}</p>
      </div>

        </>
    )
}
