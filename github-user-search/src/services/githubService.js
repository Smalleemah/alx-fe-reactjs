import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch user data from GitHub
 * @param {string} username
 * @returns {object}
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
