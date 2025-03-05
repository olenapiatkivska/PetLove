import { useSelector } from 'react-redux';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { selectGender } from '../../../../redux/notices/noticesSelectors.js';

const GenderSelect = ({ setGenderQuery, genderQuery, setCurrentPage }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
  const desktop = useMediaQuery({ minWidth: 1280 });
  const genders = useSelector(selectGender);

  const gendersData = [
    { value: '', label: 'Show all' },
    ...(genders || []).map(item => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleCancelGender = selectedOption => {
    setGenderQuery(selectedOption?.value);
    setCurrentPage(1);
  };

  const selectValue =
    genderQuery === null
      ? null
      : gendersData.find(option => option.value === genderQuery);

  const customStyles = {
    control: (baseStyles, { isFocused, hasValue }) => ({
      ...baseStyles,
      border: `1px solid ${
        isFocused
          ? 'var(--accent-color)' // Колір бордера при фокусі
          : hasValue
          ? 'var(--accent-color)' // Колір бордера, якщо є обрана опція
          : 'transparent' // Колір за замовчуванням
      }`,
      width: tablet && tabletEnd ? '170px' : desktop ? '200px' : '143px',
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
      padding: '0px', // Видаляємо внутрішні відступи
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
      width: tablet && tabletEnd ? '170px' : desktop ? '200px' : '143px',
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
          onChange={handleCancelGender}
          options={gendersData}
          placeholder={'By gender'}
          maxMenuHeight={186}
          isClearable={true}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default GenderSelect;
