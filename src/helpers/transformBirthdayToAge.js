export const calculateAge = birthdayString => {
  if (!birthdayString) return '';

  const birthDate = new Date(birthdayString);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age;
};
