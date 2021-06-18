import React from "react";
import ResultItem from "./ResultItem";

export default function ResultList({ searchResult, id, category }) {
  return (
    <div className="box mx-2">
      <span
        style={{ display: "inline-block", marginBottom: "1rem", color: "grey" }}
      >
        результаты поиска: {searchResult.length}
      </span>
      {searchResult.map((item) => (
        <ResultItem key={id} {...item} category={category} />
      ))}
    </div>
  );
}
