import { formatBirthday } from '../../../../functions/formatBirthday.js';
import css from './PetInfo.module.css';

const PetInfo = ({ pet }) => {
  const { name, birthday, sex, species } = pet;
  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formattedDate },
    { label: 'Sex', value: sex },
    { label: 'Species', value: species },
  ];

  return (
    <>
      <ul className={css.petInfoList}>
        {details.map(({ label, value }) => (
          <li className={css.petInfoItem} key={label}>
            <p>
              {label} <span>{value}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PetInfo;
