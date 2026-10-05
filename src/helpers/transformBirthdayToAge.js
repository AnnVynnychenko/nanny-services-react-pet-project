export const calculateAge = birthdayString => {
  if (!birthdayString) return null;

  const birthDate = new Date(birthdayString);
  if (isNaN(birthDate.getTime())) return null;

  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age < 0 ? 0 : age;
};
