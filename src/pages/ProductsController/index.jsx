import React, { useState, useEffect } from 'react';
import './index.css';
import ProductService from '../../service/ProductService';
import Product from '../../model/Product';

const ProductsController = () => {
  const [products, setProducts] = useState(new Product());
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    ProductService.getAll()
      .then((response) => {
        let productsArr = response.data.map((product) => new Product(product));
        setProductsArr(productsArr);
        console.log(productsArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>Controle de Produtos</h1>
      </div>

      <div className="actions"></div>

      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade em Estoque</th>
              <th>Data de cadastro</th>
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
                  <button className="btn-link">Editar</button>
                  <button className="btn-link">Excluir</button>
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
