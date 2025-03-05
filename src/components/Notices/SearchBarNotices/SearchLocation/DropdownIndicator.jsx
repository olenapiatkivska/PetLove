import { components } from 'react-select';
import sprite from '../../../../assets/icons/icons.svg';

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width={18}
        height={18}
        style={{
          fill: 'var(--white-color)',
          stroke: 'var(--dark-color)',
          marginRight: '10px',
        }}
      >
        <use href={`${sprite}#icon-search`} />
      </svg>
    </components.DropdownIndicator>
  );
};
