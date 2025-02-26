export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFavoritesNotices = state => state.auth.noticesFavorites;
export const selectViewedNotices = state => state.auth.noticesViewed;
export const selectPets = state => state.auth.pets;
