import axios from "axios";

const API_KEY = "sQYKfTaoHqyGtuBvAcldPcqXfrQspFKhYtlVkrFE";
const ROOT_URL = "https://api.discogs.com";

export const FETCH_RELEASES = 'fetch_releases';

export function fetchReleases (username) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_RELEASES,
    payload: request,
  }
}
