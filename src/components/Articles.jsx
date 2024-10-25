import styles from "./Articles.module.css";

const Articles = (data) => {
  let articles = data.articles.map(function (article) {
    return (
      <a href={`/artikelen/${article.slug}`}>
        <article>
          <img
            src={article.visual.url}
            alt={article.title}
            width="300px"
            height="200"
          />
          <h2>{article.title}</h2>
        </article>
      </a>
    );
  });

  return <div className={styles.grid}>{articles}</div>;
};
export default Articles;
