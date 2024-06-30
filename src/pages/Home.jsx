import React from 'react'
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}} className='heading'>Welcome to the Redux toolkit store</h2>
      <section>
        <h1>Products</h1>
        <Products/>
      </section>
    </div>
  );
}

export default Home;