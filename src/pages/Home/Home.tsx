import React, { useEffect, useState } from 'react';
import ProductsList from 'components/ProductList/ProductList';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const urlProds = 'http://localhost:3001/api/products/';

    const fetchData = async () => {
      try {
        const prods = await fetch(urlProds);
        const products = await prods.json();
        setProducts(products);

        //console.log(products);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  const sortByPrice = () => {
    if (sortBy === '' || sortBy === 'category') {
      setSortBy('price');
    }

    if (sortOrder === '' || sortOrder === 'desc') {
      let byPrice = products.slice(0);
      byPrice.sort(function (a, b) {
        return a['price'] - b['price'];
      });
      setSortOrder('asc');
      //console.log(byPrice);
      setProducts(byPrice);
    } else {
      let byPrice = products.slice(0);
      byPrice.sort(function (a, b) {
        return b['price'] - a['price'];
      });
      setSortOrder('desc');
      //console.log(byPrice);
      setProducts(byPrice);
    }
  };

  const sortByCategory = () => {
    if (sortBy === '' || sortBy === 'price') {
      setSortBy('category');
    }

    if (sortOrder === '' || sortOrder === 'desc') {
      let byCat = products.slice(0);
      byCat.sort(function (a, b) {
        var x = a['category']['id'];
        var y = b['category']['id'];
        var res = x < y ? -1 : 1;
        return res;
      });
      setSortOrder('asc');
      //console.log(byCat);
      setProducts(byCat);
    } else {
      let byCat = products.slice(0);
      byCat.sort(function (a, b) {
        var x = a['category']['id'];
        var y = b['category']['id'];
        var res = x > y ? -1 : 1;
        return res;
      });
      setSortOrder('desc');
      //console.log(byCat);
      setProducts(byCat);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">List of products</h1>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th className="sortable button" onClick={() => sortByCategory()}>
                Category {sortBy === 'category' && (sortOrder === 'asc' ? 'asc' : 'desc')}
              </th>
              <th>Name</th>
              <th className="sortable button" onClick={() => sortByPrice()}>
                Price {sortBy === 'price' && (sortOrder === 'asc' ? 'asc' : 'desc')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <ProductsList key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
