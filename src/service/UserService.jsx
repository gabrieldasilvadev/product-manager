import Service from './Service';
const userMock = {
  id: 1,
  nome: 'Gabriel',
  email: 'gabriel@gmail.com',
  perfil: {
    id: 1,
    descricao: 'manager',
  },
};

const authendication = {
  token: 'c2VuaGFmb3J0ZQ==',
  usuario: userMock,
};

function Login(email, senha) {
  return new Promise((resolve, reject) => {
    if (email != 'admin@admin.com' || senha != '123456') {
      return reject('Usuário ou senha inválidos');
    }

    return resolve(authendication);
  });
}

// Metodo real que vai na api tentar logar o usuario
// function Login(email, senha) {
//   return new Promise((resolve, reject) => {
//     return Service.post('/api/login', { email, senha })
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });
// }

function GetAll() {
  return new Promise((resolve, reject) => {
    return Service.get('/api/users')
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default { Login, GetAll };
