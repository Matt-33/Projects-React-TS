import React, { useState, useEffect } from "react";
import { IArticle } from "../utils/types";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await response.json();


      const articlesWithLikes = data.map((article: any) => ({
        ...article,
        liked: false,
      }));

      setArticles(articlesWithLikes);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
    }
  };

  const handleLike = (id: number) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id ? { ...article, liked: !article.liked } : article
      )
    );
  };


  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Liste des articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <button
              onClick={() => handleLike(article.id)}
              className={article.liked ? "liked" : ""}
            >
              {article.liked ? "Unlike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;