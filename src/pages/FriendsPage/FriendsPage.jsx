import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import FriendsList from '../../components/FriendsList/FriendsList.jsx';
import { useEffect } from 'react';
import { fetchFriends } from '../../redux/friends/operations.js';
import { selectIsLoadingFriends } from '../../redux/friends/friendsSelectors.js';
import Title from '../../components/Title/Title.jsx';
import LoaderMain from '../../components/LoaderMain/LoaderMain.jsx';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFriends);
  // const isError = useSelector(selectIsErrorFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>Our friends</Title>
        {isLoading ? <LoaderMain /> : <FriendsList />}
      </Container>
    </>
  );
};

export default FriendsPage;
