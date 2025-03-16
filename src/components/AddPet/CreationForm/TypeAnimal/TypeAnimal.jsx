import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectSpecies } from '../../../../redux/notices/noticesSelectors.js';
import Select from 'react-select';

const TypeAnimal = ({ petType, setPetType }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const species = useSelector(selectSpecies);

  const speciesData = Array.isArray(species)
    ? species?.map(item => ({
        value: item,
        label: item?.charAt(0).toUpperCase() + item?.slice(1),
      }))
    : [];
  const handleByType = event => setPetType(event?.value);

  const selectValue =
    petType === null
      ? null
      : speciesData.find(option => option.value === petType);

  const customStyles = {
    control: (baseStyles, { isFocused, hasValue }) => ({
      ...baseStyles,
      border: `1px solid ${
        isFocused
          ? 'var(--accent-color)'
          : hasValue
          ? 'var(--accent-color)'
          : 'var(--link-gray)'
      }`,
      width: tablet ? '210px' : '143px',
      height: tablet ? '52px' : '40px',
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
      paddingLeft: tablet ? '16px' : '12px',
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
      color: 'rgba(38, 38, 38, 0.50);',
      fontSize: tablet ? '16px' : '14px',
      fontWeight: '500',
      fontFamily: 'Manrope, sans-serif !important',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      border: 'none',
      outline: 'none',
      borderRadius: '15px',
      width: tablet ? '210px' : '143px',
      fontFamily: 'Manrope, sans-serif !important',
    }),
    option: (baseStyles, { isFocused, isSelected }) => ({
      ...baseStyles,
      border: 'none',
      fontSize: tablet ? '16px' : '14px',
      fontWeight: '500',
      fontFamily: 'Manrope, sans-serif !important',
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
      paddingRight: tablet ? '16px' : '12px',
    }),
  };

  return (
    <>
      <Select
        value={selectValue}
        onChange={handleByType}
        options={speciesData}
        placeholder={'Type of pet'}
        maxMenuHeight={tablet ? 142 : 78}
        isClearable={true}
        styles={customStyles}
      />
    </>
  );
};

export default TypeAnimal;
