import React, { useEffect, useState} from 'react'
import BlogPosts from '../components/blog/BlogPosts'
import { v4 as randomID } from 'uuid';

const posts = [
  {id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  {id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  {id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  {id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  {id: 5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  {id: 6,  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum fuga officiis vitae voluptatem quae.'},
  
]


export default function Blog() {

  const [post, setPost] = useState(posts);
  const [value, setValue] = useState('');



  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const handlePress = (event) => {
    if (event.keyCode === 13) {
      posts.unshift({id: randomID(), text: value})
      console.log(posts)
      setValue('')
      
    }
  }

  const handleButtonPress = (event) => {
    posts.unshift({id: randomID(), text: value})
    setValue('')
  }

    return (<>
        
<div className='blog'>

    <div id='blog-content' className="blog-content box p-2">
      <div className="blog-add-post box">
      <h1 className='is-size-2'> новый пост</h1>
      {/* <textarea name="header" id="1" cols="160" rows="1" placeholder='заголовок'></textarea> */}
      <textarea className='new-post' value={value} name="text" id="2" cols="160" rows="3" placeholder='текст записи..' onChange={handleChange} onKeyDown={handlePress} />


        <button className='button is-dark' onClick={handleButtonPress}> опубликовать</button>
      </div>

      <div className="content">
        <BlogPosts post={posts}/>

      </div>
    </div>

<div id='blog-notes' className=" box blog-notes">
  <div className="blog-note">
  <div class="notification is-warning">
  
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum  efficitur.
</div>
  </div>

<div className="blog-note">

<div class="notification is-danger is-light">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptatibus excepturi officia quo totam iure beatae earum explicabo aspernatur inventore voluptas, adipisci recusandae et, unde veritatis odit quibusdam eligendi alias.
</div>
</div>

</div>

</div>


        
</>

    )
}
