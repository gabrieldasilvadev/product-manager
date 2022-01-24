import React from 'react';
import InputText from '../../components/InputText';
import { Button, Input } from '../../styles/FormStyles';
import { CustomDiv } from '../../styles/GeralStyles';
import UserService from '../../service/UserService';

import './index.css';

const Login = () => {
  const login = () => {
    alert('tentar logar no sistema!');
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
      ></InputText>

      <InputText
        id="senha"
        placeholder="Escreva a sua senha"
        text="Senha"
      ></InputText>

      <Button onClick={login}>Entrar</Button>

      <div className="reset-password">
        <a href="#">Esqueci minha senha</a>
      </div>
    </CustomDiv>
  );
};

export default Login;
