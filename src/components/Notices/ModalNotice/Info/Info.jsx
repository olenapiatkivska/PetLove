import { formatBirthday } from '../../../../functions/formatBirthday.js';
import css from './Info.module.css';

const Info = ({ notice }) => {
  const { name, birthday, sex, species } = notice;
  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formattedDate },
    { label: 'Sex', value: sex },
    { label: 'Species', value: species },
  ];

  return (
    <>
      <ul className={css.infoDetailsList}>
        {details.map(({ label, value }) => (
          <li className={css.infoDetailsItem} key={label}>
            <p>{label}</p>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Info;
