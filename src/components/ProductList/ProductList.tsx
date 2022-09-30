import React, { useState } from 'react';
import './ProductList.css';
import { useGlobalContext } from 'CartContext';

const ProductsList = ({ id, name, category, price }: any) => {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQ, setItemQ] = useState(0);
  const { copy, setCopy } = useGlobalContext();

  const handleAddItem = () => {
    setItemPrice((previtem) => previtem + price);
    setItemQ((prevq) => prevq + 1);
    if (copy.find((el: any) => el.id === id) !== undefined) {
      setCopy(
        copy.map((item: any) =>
          item.id === id
            ? { id: id, name: name, category: category.name, price: itemPrice + price, quantity: itemQ + 1 }
            : item,
        ),
      );
      //console.log('exists, add + 1 quantity');
    } else {
      setCopy([...copy, { id: id, name: name, category: category.name, price: price, quantity: 1 }]);
      //console.log('new element');
    }
    //console.log(copy);
  };

  const handleSubstractItem = () => {
    if (itemQ - 1 >= 0 && itemPrice - price >= 0) {
      setItemPrice((previtem) => previtem - price);
      setItemQ((prevq) => prevq - 1);

      if (copy.find((el: any) => el.id === id) !== undefined) {
        setCopy(
          copy.map((item: any) =>
            item.id === id
              ? { id: id, name: name, category: category.name, price: itemPrice - price, quantity: itemQ - 1 }
              : item,
          ),
        );
        //console.log('exists, substract -1 quantity');
      }
    } else {
      handleRemoveItem();
    }
    //console.log(copy);
  };

  const handleRemoveItem = () => {
    setItemPrice(0);
    setItemQ(0);

    if (copy.find((el: any) => el.id === id) !== undefined) {
      setCopy(copy.filter((item: any) => item.id !== id));

      //console.log(copy);
      //console.log('exists, substract -1 quantity');
    }
  };

  return (
    <>
      <tr>
        <td>{category.name}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td className="button">
          <span className="mini_button" onClick={() => handleSubstractItem()}> (-) </span>
          Select
          <span className="mini_button" onClick={() => handleAddItem()}> (+) </span>
        </td>
      </tr>
      {/*<tr>
         <td></td>
         <td>Quantity:{itemQ} </td>
         <td>Price: {itemPrice}</td>
         <td>Remove item</td>
      </tr>*/}
    </>
  );
};

export default ProductsList;
