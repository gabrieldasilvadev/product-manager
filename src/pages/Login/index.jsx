import React, { useState, useEffect } from 'react';
import InputText from '../../components/InputText';
import { Button, Input } from '../../styles/FormStyles';
import { CustomDiv } from '../../styles/GeralStyles';
import UserService from '../../service/UserService';
import Storage from '../../utils/Storage';

import './index.css';
import User from '../../model/User';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    UserService.Login(email, senha)
      .then((response) => {
        console.log(response);
        const {token, usuario} = response;
        Storage.saveToken(token);

        Storage.saveUser(new User(usuario));
        window.open('/', '_self');
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <CustomDiv
      width="400px"
      margin="auto"
      border="1px solid #ddd"
      marginTop="50px"
    >
      <div className="logo">
        <h1>Login</h1>
      </div>

      <InputText
        id="email"
        placeholder="seuemail@email.com"
        text="E-mail"
        callback={(event) => setEmail(event.target.value)}
      ></InputText>

      <InputText
        id="senha"
        placeholder="Escreva a sua senha"
        text="Senha"
        type="password"
        callback={(event) => setSenha(event.target.value)}
      ></InputText>

      <Button onClick={login}>Entrar</Button>

      <div className="reset-password">
        <a href="#">Esqueci minha senha</a>
      </div>
    </CustomDiv>
  );
};

export default Login;
