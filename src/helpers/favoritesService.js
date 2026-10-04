import toast from 'react-hot-toast';

const getFavoritesKey = userId => {
  return userId ? `favorites_${userId}` : null;
};

export const getFavorites = userId => {
  const key = getFavoritesKey(userId);
  if (!key) return [];

  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed to parse favorites from localStorage:', err);
  }
  return [];
};

export const isFavorite = (id, userId) => {
  if (!id || !userId) return false;
  const favorites = getFavorites(userId);
  return favorites.includes(id);
};

export const toggleFavorite = (data, userId, itemName = 'Nanny') => {
  if (!userId) {
    toast.error('This feature is available only for authorized users.');
    return false;
  }

  if (!data?.id) {
    return false;
  }

  const key = getFavoritesKey(userId);
  const favorites = getFavorites(userId);
  const index = favorites.findIndex(item => item === data.id);

  let isNowFavorite = false;
  let updated = [];

  if (index >= 0) {
    updated = favorites.filter(item => item !== data.id);
    if (updated.length > 0) {
      localStorage.setItem(key, JSON.stringify(updated));
    } else {
      localStorage.removeItem(key);
    }

    isNowFavorite = false;
    toast.success(`${itemName} successfully removed from favorites!`);
  } else {
    updated = [...favorites, data.id];
    localStorage.setItem(key, JSON.stringify(updated));
    isNowFavorite = true;
    toast.success(`${itemName} successfully added to favorites!`);
  }
  window.dispatchEvent(new Event('favoritesUpdated'));
  return isNowFavorite;
};
