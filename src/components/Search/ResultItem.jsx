import React from "react";
import { Link } from "react-router-dom";

export default function ResultItem({ name, id, category }) {
  return (


<div class="">
    
              
        <Link to={`/${category}/${id}`}>
          <li>{name} </li>
        </Link>
      
            </div>
      

  );
}
