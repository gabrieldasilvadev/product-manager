import React from 'react';
import { Button, InputText } from '../../styles/FormStyles';
import { CustomDiv } from '../../styles/GeralStyles';
import './index.css';

const Login = () => {
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

      <label htmlFor="email">Email</label>
      <InputText id="email" placeholder="exemplo@exemplo.com"></InputText>

      <label htmlFor="senha">Senha</label>
      <InputText id="senha" placeholder="Digite sua senha"></InputText>

      <Button>Entrar</Button>

      <div className='reset-password'>
        <a href="#">Esqueci minha senha</a>
      </div>
    </CustomDiv>
  );
};

export default Login;
