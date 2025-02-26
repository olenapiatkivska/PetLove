export function formatBirthday(birthdayDate) {
  const [year, month, day] = birthdayDate.split('-');
  return `${day}.${month}.${year}`;
}
