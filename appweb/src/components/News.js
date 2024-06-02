import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-06-01&to=2024-06-01&sortBy=popularity&apiKey=d6942e22d3804e2eba2963be2627bb73', {
        params: {
          country: 'us',
          apiKey: 'd6942e22d3804e2eba2963be2627bb73'
        }
      });

      setArticles(response.data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;