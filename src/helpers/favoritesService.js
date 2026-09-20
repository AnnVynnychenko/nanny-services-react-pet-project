import toast from 'react-hot-toast';

const getFavoritesKey = userId => {
  return userId ? `favorites_${userId}` : null;
};

export const getFavorites = userId => {
  const key = getFavoritesKey(userId);
  if (!key) return [];
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : [];
};

export const isFavorite = (id, userId) => {
  const favorites = getFavorites(userId);
  return favorites.some(favorite => favorite.id === id);
};

export const toggleFavorite = (data, userId, itemName = 'Nanny') => {
  if (!userId) {
    toast.error('This feature is available only for authorized users.');
    return false;
  }

  const key = getFavoritesKey(userId);
  const favorites = getFavorites(userId);
  const index = favorites.findIndex(item => item.id === data.id);

  let isNowFavorite = false;
  let updated = [];

  if (index >= 0) {
    updated = favorites.filter(item => item.id !== data.id);
    updated.length > 0
      ? localStorage.setItem(key, JSON.stringify(updated))
      : localStorage.removeItem(key);

    isNowFavorite = false;
    toast.success(`${itemName} successfully removed from favorites!`);
  } else {
    updated = [...favorites, data];
    localStorage.setItem(key, JSON.stringify(updated));
    isNowFavorite = true;
    toast.success(`${itemName} successfully added to favorites!`);
  }
  window.dispatchEvent(new Event('favoritesUpdated'));
  return isNowFavorite;
};
