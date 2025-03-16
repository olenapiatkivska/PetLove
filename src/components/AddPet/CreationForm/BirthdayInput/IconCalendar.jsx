import { IconButton } from '@mui/material';
import sprite from '../../../../assets/icons/icons.svg';
import css from './BirthdayInput.jsx';

const IconCalendar = props => {
  return (
    <IconButton
      {...props}
      sx={{
        padding: 0,
        minWidth: 'auto',
        fill: 'none',
        stroke: 'var(--dark-color)',
      }}
    >
      <svg className={css.iconCalendar} width={18} height={18}>
        <use href={`${sprite}#icon-calendar`} />
      </svg>
    </IconButton>
  );
};

export default IconCalendar;
