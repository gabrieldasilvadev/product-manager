import React from 'react';

import {
  ContainerModal,
  FooterModal,
  ButtonSaveModal,
  ButtonCancelModal,
  HeaderModal,
  CloseModal,
} from '../../styles/ModalStyles';

const Modal = ({ closeModal }) => {
  return (
    <ContainerModal>
      <HeaderModal>
        <h3>Adicionar item</h3>
        <CloseModal onClick={() => closeModal(false)} />
      </HeaderModal>
      <hr />
      <div className="body-modal">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Quantidade</label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="value">Valor</label>
          <input id="value" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date-register">Data de cadastro</label>
          <input id="date-register" type="date" className="form-control" />
        </div>
      </div>

      <FooterModal>
        <ButtonSaveModal>Salvar</ButtonSaveModal>
        <ButtonCancelModal onClick={() => closeModal(false)}>
          Cancelar
        </ButtonCancelModal>
      </FooterModal>
      <hr />
    </ContainerModal>
  );
};

export default Modal;
