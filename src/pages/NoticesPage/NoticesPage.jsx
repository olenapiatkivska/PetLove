import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import NoticesList from '../../components/Notices/NoticesList/NoticesList.jsx';
import Title from '../../components/Title/Title.jsx';
import { useEffect, useState } from 'react';
import {
  fetchCategories,
  fetchCities,
  fetchGenders,
} from '../../redux/notices/operations.js';
import {
  selectIsLoading,
  selectTotalPagesNotices,
} from '../../redux/notices/noticesSelectors.js';
import LoaderMain from '../../components/LoaderMain/LoaderMain.jsx';
import PaginationGeneral from '../../components/Pagination/Pagination.jsx';
import { fetchNotices } from '../../redux/notices/filtration.js';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const isLoadNotices = useSelector(selectIsLoading);
  const totalPagesNotices = useSelector(selectTotalPagesNotices);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchCities());
    dispatch(fetchNotices({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>

        {isLoadNotices ? <LoaderMain /> : <NoticesList />}

        <PaginationGeneral
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPagesNotices}
        />
      </Container>
    </>
  );
};

export default NoticesPage;
