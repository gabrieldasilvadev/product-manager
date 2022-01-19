import React from 'react';
import { Input } from '../../styles/FormStyles';

const InputText = () => {
  return (
    <div>
      <label htmlFor="senha">Senha</label>
      <Input id="senha" placeholder="Digite sua senha"></Input>
    </div>
  );
};

export default InputText;
