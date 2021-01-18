import React from "react";
import { Link } from "react-router-dom";
const ArticleList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link
        class="btn btn-outline-info rounded border border-white p-3 p-md-5 col-12 col-md-4"
        key={key}
        to={`/article/${article.name}`}
      >
        <h3>
          <strong>{article.title}</strong>
        </h3>
        <p>
          {article.content[0].substring(0, 100)}
          <br />
          More info →
        </p>
      </Link>
    ))}
  </>
);

export default ArticleList;
