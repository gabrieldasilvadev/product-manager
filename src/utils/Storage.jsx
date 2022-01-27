import User from '../model/User';

function saveToken(token) {
  localStorage.setItem('token', token);
}

function getToken() {
  localStorage.getItem('token');
}

function removeAuthendication() {
  localStorage.removeItem('token');
}

function saveUser(usuario) {
  let json = JSON.stringify(usuario);
  localStorage.setItem('usuario', json);
}

function removeUser() {
  localStorage.removeItem('usuario');
}

function getUser() {
  let json = localStorage.getItem('user');
  return new User(JSON.parse(json));
}

export default {
  saveToken,
  getToken,
  removeAuthendication,
  saveUser,
  getUser,
  removeUser,
};
