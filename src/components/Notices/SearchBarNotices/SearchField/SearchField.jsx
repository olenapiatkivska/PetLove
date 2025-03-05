import { toast } from 'react-toastify';
import sprite from '../../../../assets/icons/icons.svg';
import css from './SearchField.module.css';

const SearchField = ({
  inputValue,
  setInputValue,
  setTextQuery,
  textQuery,
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTextQuery(inputValue);
    } else {
      toast.warning("You can't put empty field");
    }
  };

  const handleInputChange = event => setInputValue(event.target.value);

  const handleCancelSearch = async () => {
    setInputValue('');
    setTextQuery('');
  };

  return (
    <>
      <form className={css.searchField} onSubmit={handleSubmit}>
        <input
          className={css.searchFieldInput}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          disabled={textQuery === '' ? false : true}
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

export default SearchField;
