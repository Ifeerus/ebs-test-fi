import React from 'react';
import { useGlobalContext } from 'CartContext';
import AddedProducts from 'components/AddedProducts/AddedProducts';
import './Cart.css';

const Cart = () => {
  const { copy } = useGlobalContext();

  return (
    <div>
      <div className="container">
        <h1 className="title">List of added products</h1>
      </div>
      {copy.length === 0 && (
        <div className="container">
          <h2 className="warning">Oops! You didn't add any products!</h2>
        </div>
      )}

      {copy.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th> Category </th>
                <th> Name </th>
                <th> Quantity </th>
                <th> Price </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {copy.map((product: any) => (
                <AddedProducts key={product.id} {...product} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
