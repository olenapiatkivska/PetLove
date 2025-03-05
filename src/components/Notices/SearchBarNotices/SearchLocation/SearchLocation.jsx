import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectCities } from '../../../../redux/notices/noticesSelectors.js';
import { DropdownIndicator } from './DropdownIndicator.jsx';
import { fetchCities } from '../../../../redux/notices/operations.js';

const SearchLocation = ({
  setLocationQuery,
  locationQuery,
  setCurrentPage,
}) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const [inputValue, setInputValue] = useState('');
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue.length >= 3) {
      dispatch(fetchCities(inputValue));
    }
  }, [dispatch, inputValue]);

  //   console.log('Cities from Redux:', cities);

  //   const selectedCity = cities.find(city => city._id === locationQuery);

  //   if (!selectedCity) {
  //     console.error(
  //       '❌ Помилка: Місто з таким ID не знайдено в Redux!',
  //       locationQuery,
  //     );
  //   } else {
  //     console.log('✅ Місто знайдено в Redux:', selectedCity);
  //   }

  const filteredCities =
    inputValue?.length >= 3
      ? cities?.filter(city =>
          city?.cityEn.toLowerCase().startsWith(inputValue?.toLowerCase()),
        )
      : [];

  const uniqueCities = new Set();
  const options = filteredCities
    ?.filter(city => {
      if (!uniqueCities.has(city.cityEn)) {
        uniqueCities.add(city.cityEn);
        return true;
      }
      return false;
    })
    .map(city => ({
      value: city._id,
      label: `${city.cityEn}, ${city.stateEn}`,
    }));

  console.log('Available options:', options);

  const handleByCity = value => {
    setTimeout(() => setInputValue(value), 600);
  };

  const handleChangeLocation = selectedOption => {
    setLocationQuery(selectedOption ? selectedOption.value : null);
    setCurrentPage(1);
  };

  const selectValue =
    locationQuery === null
      ? null
      : options?.find(option => option.value === locationQuery);

  const customStyles = {
    control: (baseStyles, { isFocused, hasValue }) => ({
      ...baseStyles,
      border: `1px solid ${
        isFocused
          ? 'var(--accent-color)'
          : hasValue
          ? 'var(--accent-color)'
          : 'transparent'
      }`,
      width: tablet ? '227px' : '100%',
      height: tablet ? '48px' : '42px',
      background: 'var(--white-color)',
      borderRadius: '30px',
      boxShadow: 'none',
      fontSize: tablet ? '16px' : '14px',
      fontWeight: '500',
      lineHeight: tablet ? '1.25' : '1.29',
      letterSpacing: '-0.03em',
      color: 'var(--dark-color)',
      fontFamily: 'Manrope, sans-serif !important',
      cursor: 'pointer',
      paddingLeft: '12px',
      outline: 'none',
      transition: 'border-color 0.2s ease-in-out',
      '&:hover': {
        borderColor: 'var(--accent-color)',
      },
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      padding: '0px',
    }),
    placeholder: baseStyles => ({
      ...baseStyles,
      color: 'var(--dark-color)',
      fontSize: tablet ? '16px' : '14px',
      fontWeight: '500',
      fontFamily: 'Manrope, sans-serif !important',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      border: 'none',
      outline: 'none',
      borderRadius: '15px',
      fontFamily: 'Manrope, sans-serif !important',
    }),
    option: (baseStyles, { isFocused, isSelected }) => ({
      ...baseStyles,
      border: 'none',
      fontSize: tablet ? '16px' : '14px',
      fontWeight: '500',
      fontFamily: 'Manrope, sans-serif !important',
      background: 'transparent',
      cursor: 'pointer',
      color: isSelected ? 'var(--accent-color)' : 'var(--placeholder-color)',
      transition: 'color 0.2s ease-in-out',
      ...(isFocused && {
        color: 'var(--accent-color)',
      }),
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: 'var(--dark-color)',
      paddingRight: '12px',
    }),
  };

  return (
    <>
      <div>
        <Select
          value={selectValue}
          onInputChange={handleByCity}
          onChange={handleChangeLocation}
          options={options}
          placeholder={'Location'}
          maxMenuHeight={216}
          isClearable={true}
          components={{
            DropdownIndicator,
          }}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default SearchLocation;
