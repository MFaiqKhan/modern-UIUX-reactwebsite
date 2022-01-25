import React from 'react';
import './blog.css';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
  <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it</h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article blogImgUrl={blog01} date="Jan 25, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
      <div className='gpt3__blog-container_groupB'>
        <Article blogImgUrl={blog02} date="Jan 25, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article blogImgUrl={blog03} date="Jan 25, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article blogImgUrl={blog04} date="Jan 25, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article blogImgUrl={blog05} date="Jan 25, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
    </div>
  </div>
  )
};
export default Blog;