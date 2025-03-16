import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMediaQuery } from 'react-responsive';
import IconCalendar from './IconCalendar.jsx';

const BirthdayInput = ({ setBirthDate }) => {
  const tablet = useMediaQuery({ minWidth: 768 });

  const handleDatePicker = newValue => {
    const year = newValue.$y;
    const month = String(+newValue.$M + 1).padStart(2, '0');
    const day = String(+newValue.$D).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setBirthDate(formattedDate);
  };

  const textFieldStyles = {
    size: 'small',
    sx: {
      '.MuiInputBase-root.Mui-focused': {
        border: '1px solid var(--accent-color)',
      },
      '.MuiInputBase-root': {
        width: tablet ? '210px' : '144px',
        height: tablet ? '52px' : '40px',
        fontSize: tablet ? '16px' : '14px',
        lineHeight: tablet ? '1.25' : '1.29',
        letterSpacing: '-0.03em',
        fontWeight: '500',
        transition: 'var(--hover-general)',
        borderRadius: '30px',
        outline: 'none',
        border: '1px solid var(--link-gray)',
        '&:hover': { border: '1px solid var(--accent-color)', outline: 'none' },
      },

      '& .MuiOutlinedInput-root': {
        borderRadius: '30px',
        border: '1px solid var(--link-gray)',
      },

      '& .MuiOutlinedInput-root.Mui-focused': {
        border: '1px solid var(--accent-color) !important',
        outline: 'none !important',
        boxShadow: 'none !important',
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none !important',
      },
    },
  };

  const popperStyles = {
    sx: {
      '.MuiPaper-root': { border: '1px solid var(--accent-color)' },
    },
  };
  return (
    <>
      <DatePicker
        format="DD.MM.YYYY"
        onChange={handleDatePicker}
        views={['day', 'month', 'year']}
        slots={{ openPickerIcon: IconCalendar }}
        slotProps={{ textField: textFieldStyles, popper: popperStyles }}
      />
    </>
  );
};

export default BirthdayInput;
