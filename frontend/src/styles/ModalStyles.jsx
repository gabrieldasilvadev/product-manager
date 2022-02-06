import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';

export const ContainerModal = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  position: absolute;
  left: 25%;
  right: 25%;

  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseModal = styled(Close)`
  width: 30px;
  cursor: pointer;

  &:hover {
    color: #f00;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 0;
`;

export const ButtonSaveModal = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  background-color: var(--primary-color);
  color: #fff;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const ButtonCancelModal = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 10px;
  cursor: pointer;

  background-color: #e20000;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;
