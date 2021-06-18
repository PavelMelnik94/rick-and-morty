import React from "react";

export default function Preloader() {
  const url =
    "https://gifimage.net/wp-content/uploads/2018/11/gif-rick-et-morty-png-9.gif";
  return (
    <div>
      <img className="preloader-img" src={url} alt="preloader" />
    </div>
  );
}
