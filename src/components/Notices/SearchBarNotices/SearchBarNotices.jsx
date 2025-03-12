import { useEffect, useState } from 'react';
import SearchField from './SearchField/SearchField.jsx';
import { useDispatch } from 'react-redux';
import css from './SearchBarNotices.module.css';
import { fetchNotices } from '../../../redux/notices/filtration.js';
import CategorySelect from './CategorySelect/CategorySelect.jsx';
import GenderSelect from './GenderSelect/GenderSelect.jsx';
import TypeSelect from './TypeSelect/TypeSelect.jsx';
import SearchLocation from './SearchLocation/SearchLocation.jsx';
import RadioSection from './RadioSection/RadioSection.jsx';

const SearchBarNotices = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [textQuery, setTextQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState(null);
  const [genderQuery, setGenderQuery] = useState(null);
  const [typeQuery, setTypeQuery] = useState(null);
  const [locationQuery, setLocationQuery] = useState('');
  const [radioSearch, setRadioSearch] = useState(null);

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        keyword: textQuery,
        category: categoryQuery,
        sex: genderQuery,
        species: typeQuery,
        locationId: locationQuery,
        radioSearch: radioSearch,
      }),
    );
  }, [
    dispatch,
    currentPage,
    textQuery,
    categoryQuery,
    genderQuery,
    typeQuery,
    locationQuery,
    radioSearch,
  ]);

  console.log('Поточне значення locationQuery:', locationQuery);

  const handleResetSearch = () => {
    setInputValue('');
    setTextQuery('');
    setCategoryQuery(null);
    setGenderQuery(null);
    setTypeQuery(null);
    setLocationQuery('');
    setRadioSearch(null);
    setCurrentPage(1);
  };

  // console.log('Відправляємо запит з параметрами:', {
  //   locationId: locationQuery,
  // });

  return (
    <>
      <div className={css.searchBarNoticeWrapp}>
        <SearchField
          setInputValue={setInputValue}
          inputValue={inputValue}
          setTextQuery={setTextQuery}
          textQuery={textQuery}
          setCurrentPage={setCurrentPage}
        />

        <div className={css.categoryGenderWrapp}>
          <CategorySelect
            setCategoryQuery={setCategoryQuery}
            categoryQuery={categoryQuery}
            setCurrentPage={setCurrentPage}
          />
          <GenderSelect
            setGenderQuery={setGenderQuery}
            genderQuery={genderQuery}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <TypeSelect
          setTypeQuery={setTypeQuery}
          typeQuery={typeQuery}
          setCurrentPage={setCurrentPage}
        />

        <SearchLocation
          setLocationQuery={setLocationQuery}
          locationQuery={locationQuery}
          setCurrentPage={setCurrentPage}
        />

        <RadioSection
          setRadioSearch={setRadioSearch}
          radioSearch={radioSearch}
          setCurrentPage={setCurrentPage}
        />

        {(radioSearch ||
          typeQuery ||
          categoryQuery ||
          genderQuery ||
          textQuery !== '') && (
          <button
            className={css.searchBarNoticesReset}
            type="button"
            onClick={handleResetSearch}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBarNotices;
