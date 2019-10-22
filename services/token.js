import axios from 'axios';
import { API_BASE_URL } from '../helpers/constants';

const OPTIONS = {
  headers: {
    Authorization: 'Basic dG9kby5seS5hbHNpZUBnbWFpbC5jb206dG9kb2x5MTIz'
  }
};

export default class Token {
  /**
   * Gets a new token
   *
   * @return {Promise<AxiosResponse<T>>}
   */
  static get() {
    return axios
      .get(`${API_BASE_URL}/authentication/token.json`, OPTIONS)
      .then(response => response.data.TokenString)
      .catch(error => {
        console.error('Cannot get token');
      });
  }
}
