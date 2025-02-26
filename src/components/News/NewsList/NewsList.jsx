import { useSelector } from 'react-redux';
import {
  selectNews,
  selectTotalPages,
} from '../../../redux/news/newsSelectors.js';
import NewsItem from '../NewsItem/NewsItem.jsx';
import PaginationGeneral from '../../Pagination/Pagination.jsx';
import css from './NewsList.module.css';

const NewsList = ({ setCurrentPage, currentPage }) => {
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  return (
    <>
      {news.length === 0 && (
        <p className={css.newsListText}>
          Sorry, <b>no find</b> any news with these search parameter
        </p>
      )}
      <ul className={css.newsList}>
        {news.map(item => (
          <li className={css.newsItem} key={item._id}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
      <PaginationGeneral
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default NewsList;
