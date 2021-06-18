import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{ backgroundColor: "#181818", color: "gray" }}
      >
        <div className="content has-text-centered">
          <p>
            <strong style={{ color: "white" }}>Rick and Morty </strong> by{" "}
            <a href="https://pavelmelnik.ru">Pavel Melnik</a>. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Cupiditate, delectus nostrum
            iusto perferendis nesciunt fugit vero ducimus distinctio asperiores
            quo perspiciatis sequi, tempore maiores nam reprehenderit accusamus
            quia harum numquam.
          </p>
        </div>
      </footer>
    </div>
  );
}
