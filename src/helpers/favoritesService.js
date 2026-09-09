import toast from 'react-hot-toast';

const FAVORITES_KEY = 'favorites';

export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const isFavorite = id => {
  const favorites = getFavorites();
  return favorites.some(favorite => favorite.id === id);
};

export const toggleFavorite = (data, itemName = 'Item') => {
  const favorites = getFavorites();
  const index = favorites.findIndex(item => item.id === data.id);

  let isNowFavorite = false;

  let updated;
  if (index >= 0) {
    updated = favorites.filter(item => item.id !== data.id);
    updated.length > 0
      ? localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
      : localStorage.removeItem(FAVORITES_KEY);

    isNowFavorite = false;
    toast.success(`${itemName} successfully removed from favorites!`);
  } else {
    updated = [...favorites, data];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    isNowFavorite = true;
    toast.success(`${itemName} successfully added to favorites!`);
  }
  window.dispatchEvent(new Event('favoritesUpdated'));
  return isNowFavorite;
};
