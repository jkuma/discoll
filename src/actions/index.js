import axios from "axios";

const API_KEY = "sQYKfTaoHqyGtuBvAcldPcqXfrQspFKhYtlVkrFE";
const ROOT_URL = "https://api.discogs.com";

export const FETCH_USER_RELEASES = 'fetch_user_releases';

export function fetchUserReleases (username) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}`;
  const request = axios.get(url, {user: username});

  return {
    type: FETCH_USER_RELEASES,
    payload: request
  }
}
