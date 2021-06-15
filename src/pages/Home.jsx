import React, { useState } from "react";
import Blog from "../components/blog/Blog";

import  {Search}  from '../components/Search/Search'



export default function Home() {



  

  return (
    <>
      <div className="blog">
        <Blog 
        />

        <div id="blog-notes" className="  blog-notes">
        
          <div className="blog-note ">
<Search />

          </div>

          
          
        </div>
      </div>
    </>
  );
}
