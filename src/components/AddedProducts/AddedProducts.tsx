import React, { useState } from 'react';
import { useGlobalContext } from 'CartContext';

const AddedProducts = ({ id, name, category, price, quantity }: any) => {
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQ, setItemQ] = useState(quantity);
  const { copy, setCopy } = useGlobalContext();

  const handleAddItem = () => {
    var newPrice = Number((price / itemQ).toPrecision(3));

    setItemPrice((previtem: any) => Number((previtem + newPrice).toPrecision(3)));
    setItemQ((prevq: any) => prevq + 1);
    if (copy.find((el: any) => el.id === id) !== undefined) {
      setCopy(
        copy.map((item: any) =>
          item.id === id
            ? { id: id, name: name, category: category, price: itemPrice + newPrice, quantity: itemQ + 1 }
            : item,
        ),
      );
      //console.log('exists, add + 1 quantity');
    }
  };

  const handleSubstractItem = () => {
    var newPrice = Number((price / itemQ).toPrecision(3));

    if (itemQ - 1 >= 0 && itemPrice - newPrice > 0) {
      setItemPrice((previtem: any) => Number((previtem - newPrice).toPrecision(3)));
      setItemQ((prevq: any) => prevq - 1);
      console.log(copy.find((el: any) => el.id === id));
      if (copy.find((el: any) => el.id === id) !== undefined) {
        setCopy(
          copy.map((item: any) =>
            item.id === id
              ? { id: id, name: name, category: category, price: itemPrice - newPrice, quantity: itemQ - 1 }
              : item,
          ),
        );
        //console.log('exists, substract -1 quantity');
      }
    } else {
      handleRemoveItem();
    }
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
        <td>{category}</td>
        <td>{name}</td>
        <td>{itemQ}</td>
        <td>{itemPrice}</td>
        <td className="button">
          <span onClick={() => handleSubstractItem()}>(-)</span>
          <span onClick={() => handleRemoveItem()}> Remove item </span>
          <span onClick={() => handleAddItem()}>(+)</span>
        </td>
      </tr>
    </>
  );
};

export default AddedProducts;
