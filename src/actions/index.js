import axios from 'axios';

const API_KEY = 'sQYKfTaoHqyGtuBvAcldPcqXfrQspFKhYtlVkrFE';
const ROOT_URL = 'https://api.discogs.com';

export const FETCH_USER_COLLECTION = 'fetch_user_collection';
export const FETCH_COLLECTION_NEXT_PAGE = 'fetch_collection_next_page';
export const RESET_USER_COLLECTION = 'reset_user_collection';
export const UPDATE_COVER_SIZE = 'update_cover_size';
export const ERROR = 'error';
export const RESET_ERROR = 'reset_error';

export function resetError() {
  return { type: RESET_ERROR };
}

export function resetUserCollection() {
  return { type: RESET_USER_COLLECTION };
}

export function fetchUserCollection(username, items = 50) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}&per_page=${items}`;

  return axios.get(url).then(
      response => ({
        type: FETCH_USER_COLLECTION,
        payload: response,
      }),
  ).catch(
      error => ({
        type: ERROR,
        message: error.response.data.message,
      }),
  );
}

export function fetchCollectionNextPage(url) {
  const request = axios.get(url);

  return {
    type: FETCH_COLLECTION_NEXT_PAGE,
    payload: request,
  };
}

export function updateCoverSize(size) {
  return {
    type: UPDATE_COVER_SIZE,
    size: size,
  };
}
