import axios from 'axios';
import { API_BASE_URL } from '../helpers/constants';

const OPTIONS = {
  headers: {
    Authorization: 'Basic bGVvLmZjeC5hbHNpZUBnbWFpbC5jb206YWxzaWU='
  }
};

export default class Projects {
  /**
   * Sets Token header
   *
   * @param token
   */
  static setToken(token) {
    OPTIONS.headers.Token = token;
  }

  /**
   * Gets all projects
   *
   * @return {Promise<AxiosResponse<T>>}
   */
  static get() {
    return axios
      .get(`${API_BASE_URL}/projects.json`, OPTIONS)
      .then(response => response.data)
      .catch(error => {
        console.error('Cannot get projects');
      });
  }

  /**
   * Creates new project.
   *
   * @param data
   * @return {Promise<AxiosResponse<T>>}
   */
  static create(data) {
    return axios
      .post(`${API_BASE_URL}/projects.json`, data, OPTIONS)
      .then(response => response.data)
      .catch(error => {
        console.error('Cannot create project');
      });
  }
}
