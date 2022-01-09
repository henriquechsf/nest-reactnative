import axios from 'axios';
import Config from '../util/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UsuarioService {
  async cadastrar(data: any) {
    return axios({
      url: Config.API_URL + 'usuarios',
      method: 'POST',
      timeout: Config.TIMEOUT_REQUEST,
      data: data,
      headers: Config.HEADER_REQUEST,
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  async login(data: any) {
    return axios({
      url: Config.API_URL + 'usuarios/login',
      method: 'POST',
      timeout: Config.TIMEOUT_REQUEST,
      data: data,
      headers: Config.HEADER_REQUEST,
    })
      .then(response => {
        AsyncStorage.setItem('TOKEN', response.data.access_token);
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  async loginComToken(data: any) {
    return axios({
      url: Config.API_URL + 'usuarios/login-token',
      method: 'POST',
      timeout: Config.TIMEOUT_REQUEST,
      data: data,
      headers: Config.HEADER_REQUEST,
    })
      .then(response => {
        if (response.data.access_token) {
          AsyncStorage.setItem('TOKEN', response.data.access_token);
          return Promise.resolve(response);
        } else {
          return Promise.reject(response);
        }
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}

const usuarioService = new UsuarioService();
export default usuarioService;
