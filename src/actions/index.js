import axios from 'axios'

const API_KEY = 'sQYKfTaoHqyGtuBvAcldPcqXfrQspFKhYtlVkrFE'
const ROOT_URL = 'https://api.discogs.com'

export const FETCH_USER_RELEASES = 'fetch_user_releases'
export const UPDATE_COVER_SIZE = 'update_cover_size'

export function fetchUserReleases (username, items = 50) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}&per_page=${items}`
  const request = axios.get(url)

  return {
    type: FETCH_USER_RELEASES,
    payload: request,
  }
}

export function updateCoverSize (size) {
  return {
    type: UPDATE_COVER_SIZE,
    size: size
  }
}

