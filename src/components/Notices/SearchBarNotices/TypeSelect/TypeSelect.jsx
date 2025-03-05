import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { selectSpecies } from '../../../../redux/notices/noticesSelectors.js';
import { useEffect } from 'react';
import { fetchSpecies } from '../../../../redux/notices/operations.js';

const TypeSelect = ({ setTypeQuery, typeQuery, setCurrentPage }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
  const desktop = useMediaQuery({ minWidth: 1280 });
  const dispatch = useDispatch();

  const species = useSelector(selectSpecies);

  useEffect(() => {
    if (!species || species.length === 0) {
      dispatch(fetchSpecies());
    }
  }, [dispatch, species]);

  const speciesData = [
    { value: '', label: 'Show all' },
    ...(species || []).map(item => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleCancelType = selectedOption => {
    setTypeQuery(selectedOption?.value);
    setCurrentPage(1);
  };

  const selectValue =
    typeQuery === null
      ? null
      : speciesData.find(option => option.value === typeQuery);

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
      width: tablet && tabletEnd ? '170px' : desktop ? '200px' : '100%',
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
          onChange={handleCancelType}
          options={speciesData}
          placeholder={'By type'}
          maxMenuHeight={216}
          isClearable={true}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default TypeSelect;
