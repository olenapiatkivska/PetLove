import NewsList from '../../components/News/NewsList/NewsList.jsx';
import SearchBar from '../../components/News/SearchBar/SearchBar.jsx';
import Title from '../../components/Title/Title.jsx';
import Container from '../../components/Container/Container.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/news/operations.js';
import { selectIsLoadingNews } from '../../redux/news/newsSelectors.js';
import LoaderMain from '../../components/LoaderMain/LoaderMain.jsx';
import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!searchValue || searchValue === '') {
      dispatch(fetchNews({ page: currentPage, searchQuery: null }));
    } else {
      dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
    }
  }, [currentPage, searchValue, dispatch]);
  return (
    <>
      <Container>
        <div className={css.newsPageSearch}>
          <Title>News</Title>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setCurrentPage={setCurrentPage}
          />
        </div>
        {isLoading ? (
          <LoaderMain />
        ) : (
          <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
        )}
      </Container>
    </>
  );
};

export default NewsPage;
