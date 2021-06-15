import React, {useState} from "react";
import BlogPosts from "./BlogPosts";
import { v4 as randomID } from "uuid";

const posts = [
    {
      id: 1,
      header: 'Новая серия не заставит себя ждать',
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab commodi itaque voluptate sequi nemo, natus laudantium ullam facilis perspiciatis saepe eius voluptatibus, minima quaerat aspernatur nesciunt. Error minima aperiam, totam facilis, assumenda illo saepe accusamus maiores voluptatibus, similique minus consequuntur voluptate tenetur molestias eius sit dicta ratione sapiente accusantium voluptas obcaecati laudantium? Placeat esse optio iure quae id ratione blanditiis ea aliquid quas voluptatibus! Delectus in labore ut illo deserunt incidunt temporibus repellendus aspernatur voluptas ratione ipsa vitae voluptates, consequuntur blanditiis eum iusto libero error voluptatem sit amet reiciendis fugiat iure ab ea. Vel laudantium, sapiente deserunt pariatur, fugiat aut minima corporis, dolorem maiores debitis vitae similique. Voluptatum quam alias a voluptate incidunt expedita modi, iste saepe dignissimos quo officia debitis tempore, id at esse asperiores maiores autem deleniti odio consectetur velit reprehenderit veniam adipisci sapiente? Iste, expedita doloribus? Aspernatur, natus. Saepe beatae reiciendis et nobis, voluptatum labore nihil velit!",
    },
    {
      id: 2,
      header: 'Озвучка серии "Mortynight Run"',
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab commodi itaque voluptate sequi nemo, natus laudantium ullam facilis perspiciatis saepe eius voluptatibus, minima quaerat aspernatur nesciunt. Error minima aperiam, totam facilis, assumenda illo saepe accusamus maiores voluptatibus, similique minus consequuntur voluptate tenetur molestias eius sit dicta ratione sapiente accusantium voluptas obcaecati laudantium? Placeat esse optio iure quae id ratione blanditiis ea aliquid quas voluptatibus! ",
    },
   
  ];

export default function Blog() {



const [valueText, setValueText] = useState("");
const [valueHeader, setValueHeader] = useState("");


const handleChangeHeader = (e) => {
    setValueHeader(e.target.value);
  };

  const handleChangeText = (e) => {
    setValueText(e.target.value);
  };
  



  const handlePress = (event) => {
    if (valueText.trim() !== "") {
      if (event.keyCode === 13) {
        posts.unshift({ id: randomID(), header: valueHeader, text: valueText });
        setValueText(" ");
        setValueHeader(" ");
      }
    }
  };

  const handleButtonPress = () => {
    if (valueText.trim() !== '' || valueHeader.trim() !== '') {
        posts.unshift({ id: randomID(), header: valueHeader, text: valueText });
        setValueHeader(" ");
        setValueText(" ");

    }
    
  };


  return (
    <div id="blog-content" className="blog-content box p-2">
      <div className="blog-add-post box">
        <textarea
          className="new-post"
          value={valueHeader}
          name="text"
          id="1"
          cols="160"
          rows="1"
          placeholder="текст заголовка.."
          onChange={handleChangeHeader}
          onKeyDown={handlePress}
        />

        <textarea
          className="new-post"
          value={valueText}
          name="text"
          id="2"
          cols="160"
          rows="3"
          placeholder="текст записи.."
          onChange={handleChangeText}
          onKeyDown={handlePress}
        />

        <button className="button is-dark" onClick={handleButtonPress}>
          {" "}
          опубликовать
        </button>
      </div>

      <h1 className="is-size-2 pl-4">новое в блоге:</h1>
      <div className="content">
        <BlogPosts header={valueHeader} post={posts} />
      </div>
    </div>
  );
}
