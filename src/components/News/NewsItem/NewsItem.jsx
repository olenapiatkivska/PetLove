import { formatDate } from '../../../functions/formatDate.js';
import css from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { imgUrl, text, title, date, url } = item;
  const formattedDate = formatDate(date);
  return (
    <>
      <img
        className={css.newsItemImg}
        src={imgUrl}
        width={335}
        height={190}
        alt={title}
      />
      <h2 className={css.newsItemTitle}>{title}</h2>
      <p className={css.newsItemText}>{text}</p>

      <div className={css.dateReadWrapp}>
        <span>{formattedDate}</span>
        <a href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </>
  );
};

export default NewsItem;
