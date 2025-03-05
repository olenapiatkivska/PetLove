export function formatBirthday(birthdayDate) {
  if (!birthdayDate) return 'Unknown';
  const [year, month, day] = birthdayDate.split('-');
  return `${day}.${month}.${year}`;
}
