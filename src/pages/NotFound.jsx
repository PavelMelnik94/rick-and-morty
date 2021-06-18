import React from "react";

export default function NotFound() {
  const url =
    "https://cdn11.bigcommerce.com/s-0sib4xr/images/stencil/500x659/products/6026/29328/rick-morty-portal-gun-toy-gun-replica__43869.1499479420.jpg?c=2";

  return (
    <div className="level p-1">
      <h1 className="is-size-3 p-5">Страница с таким адресом не найдена</h1>
      <img src={url} alt="404" />
    </div>
  );
}
