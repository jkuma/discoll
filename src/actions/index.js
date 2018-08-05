import axios from 'axios';

const API_KEY = 'sQYKfTaoHqyGtuBvAcldPcqXfrQspFKhYtlVkrFE';
const ROOT_URL = 'https://api.discogs.com';

export const FETCH_USER_COLLECTION = 'fetch_user_collection';
export const FETCH_COLLECTION_NEXT_PAGE = 'fetch_collection_next_page';
export const UPDATE_COVER_SIZE = 'update_cover_size';

export function fetchUserCollection(username, items = 50) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}&per_page=${items}`;
  const request = axios.get(url);

  return {
    type: FETCH_USER_COLLECTION,
    payload: request,
  };
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
