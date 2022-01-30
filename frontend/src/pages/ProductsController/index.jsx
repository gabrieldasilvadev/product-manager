import React, { useState, useEffect } from 'react';
import './index.css';
import ProductService from '../../service/ProductService';
import Product from '../../model/Product';

const ProductsController = () => {
  const [products, setProducts] = useState(new Product());
  const [productsArr, setProductsArr] = useState([]);

  const editProduct = (product) => {
    console.log('editar', product);
    alert('Cliquei no editar');
  };
  const deleteProduct = (product) => {
    console.log('excluir', product);
    alert('Cliquei no editar');
  };

  const getAllProducts = () => {
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
    getAllProducts();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Controle de Produtos</h2>
      </div>

      <div className="actions"></div>
      <div className="product-table">
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade em Estoque</th>
              <th>Data de cadastro</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {productsArr.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.valor}</td>
                <td>{product.quantidadeEstoque}</td>
                <td>{product.dataCadastro}</td>
                <td>
                  <button className="btn" onClick={editProduct}>
                    Editar
                  </button>
                  <button className="btn" onClick={deleteProduct}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <center>
        <button className="btn">Adicionar</button>
      </center>
    </div>
  );
};
export default ProductsController;
