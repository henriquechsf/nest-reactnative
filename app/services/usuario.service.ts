import axios from 'axios';

class UsuarioService {
  async cadastrar(data: any) {
    return axios({
      url: 'http://192.168.1.106:3000/usuarios',
      method: 'POST',
      timeout: 5000,
      data: data,
      headers: {
        Accept: 'application/json',
      },
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
      url: 'http://192.168.1.106:3000/usuarios/login',
      method: 'POST',
      timeout: 5000,
      data: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}

const usuarioService = new UsuarioService();
export default usuarioService;
