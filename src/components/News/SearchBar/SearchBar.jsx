import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchNews } from '../../../redux/news/operations.js';
import sprite from '../../../assets/icons/icons.svg';
import css from './SearchBar.module.css';

const SearchBar = ({ setSearchValue, setCurrentPage, searchValue }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setSearchValue(inputValue);
      setCurrentPage(1);
    } else {
      toast.warning("You can't put empty field");
    }
  };

  const handleInputChange = event => setInputValue(event.target.value);

  const handleCancelSearch = async () => {
    setInputValue('');
    setSearchValue('');
    setCurrentPage(1);
    await dispatch(fetchNews({ page: 1, searchQuery: null }));
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          disabled={searchValue !== ''}
        />

        {inputValue !== '' && (
          <button
            className={css.cancelBtn}
            type="button"
            onClick={handleCancelSearch}
          >
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </button>
        )}

        <button className={css.submitBtn} type="submit">
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-search`} />
          </svg>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
