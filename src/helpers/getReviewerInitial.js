export const getReviewerInitial = (data = 'Anonymous') => {
  if (typeof data === 'string' && data.trim().length > 0) {
    return data.trim().charAt(0).toUpperCase();
  }

  return 'A';
};
