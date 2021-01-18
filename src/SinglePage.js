import React from "react";
import ArticleContent from "./ArticleContent";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-12 p-3 p-md-5">
          <div className="shadow rounded p-3 p-md-5">
            <h1>
              <strong>{article.title}</strong>
            </h1>
            <h3>{article.desc}</h3>
            {article.content.map((paragraph, key) => (
              <p class="lead" key={key}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
