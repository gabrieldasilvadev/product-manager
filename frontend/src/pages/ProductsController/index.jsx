import React, { useState, useEffect } from 'react';
import './index.css';
import ProductService from '../../service/ProductService';
import Product from '../../model/Product';
import MaskDateUtils from '../../utils/MaskDate';
import MaskToRealUtils from '../../utils/MaskMoney';
import Modal from '../../components/Modal';

const ProductsController = () => {
  const [products, setProducts] = useState(new Product());
  const [productsArr, setProductsArr] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const AddProduct = () => {
    console.log('adicionas', products);
    alert('Adicionado com sucesso');
  };

  const EditProduct = (product) => {
    console.log('editar', product);
    alert('Cliquei no editar');
  };
  const DeleteProduct = (product) => {
    console.log('excluir', product);
    alert('Cliquei no editar');
  };

  const GetAllProduct = () => {
    ProductService.getAll()
      .then((response) => {
        let productsArr = response.data.map((product) => new Product(product));
        setProductsArr(productsArr);
        console.log(productsArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Controle de Produtos</h2>
      </div>

      {openModal && <Modal closeModal={setOpenModal}/>}

      <div className="actions"></div>
      <div className="product-table">
        <button
          className="btn btn-add"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Adicionar
        </button>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Quantidade em Estoque</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {productsArr.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.quantidadeEstoque}</td>
                <td>{MaskToRealUtils.MaskToRealWithPrefix(product.valor)}</td>
                <td>
                  {MaskDateUtils.FormatDateHourDateIso(product.dataCadastro)}
                </td>
                <td>
                  <button className="btn" onClick={EditProduct}>
                    Editar
                  </button>
                  <button className="btn" onClick={DeleteProduct}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductsController;
