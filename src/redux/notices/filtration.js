import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (params, thukAPI) => {
    const {
      keyword,
      category,
      species,
      locationId,
      radioSearch,
      page = 1,
      sex,
    } = params;

    const queryParams = {
      keyword,
      category,
      species,
      location: locationId,
      page,
      sex,
      limit: 6,

      byPrice:
        radioSearch === 'Cheap'
          ? true
          : radioSearch === 'Expensive'
          ? false
          : undefined,
      byPopularity:
        radioSearch === 'Popular'
          ? false
          : radioSearch === 'Unpopular'
          ? true
          : undefined,
    };

    try {
      const response = await axios.get('/notices', { params: queryParams });
      return response.data;
    } catch (error) {
      return thukAPI.rejectWithValue(error.message);
    }
  },
);
