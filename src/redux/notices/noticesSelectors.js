export const selectNotices = state => state.notices.list;

export const selectCategories = state => state.notices.categories;
export const selectGender = state => state.notices.genders;
export const selectSpecies = state => state.notices.species;
export const selectCities = state => state.notices.citis;

export const selectIsLoading = state => state.notices.isLoading;
export const selectIsError = state => state.notices.isError;
export const selectTotalPagesNotices = state => state.notices.totalPages;
