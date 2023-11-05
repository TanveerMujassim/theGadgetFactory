// const Home = () => {
//     return ( 
//         <div classname="home">
//             <h2>HomePage</h2>
//         </div>
//     );
// }
 
// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './products.json';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
