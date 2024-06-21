import React from 'react';
import './Home.css';
import Product from './Product';
import data from './data';
import Image from 'next/image';


function Home() {
  
  let bestSeller = data.slice(0,3);
  let coffeeBox = data.slice(3,6);
  let coffeeBox2 = data.slice(6,9);
  let coffeeBag = data.slice(9,12);
 

  return (
    <div className="home">
      <div className="home__container">
        <Image
          className="home__image"
          src="/image/oklao-key.jpg"
          width={4000}
          height={500}
          alt="heroimg"
        />

     <div className="product__section1">
        <div className="home__title">
          Best Seller
        </div>

        <div className="home__row_wrapper">
        {bestSeller.map(product => (
          <div key={product.id} className="home__row">
            <Product
              key={product.key}
              id={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </div>
        ))}

        </div>
      </div>

      <div className="product__section2">

      <div className="home__title">Whole Bean </div>

          <div className="home__row_wrapper">
          {coffeeBag.map(product => (
            <div key={product.id} className="home__row">
              <Product
                key={product.key}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </div>
            
          ))}
          </div>
          <br/>
        
      </div>

      <div className="product__section3">

      <div className="home__title">Drip Bag </div>

          <div className="home__row_wrapper">
          {coffeeBox.map(product => (
            <div key={product.id} className="home__row">
              <Product
              key={product.key}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </div>
          ))}
          </div>

          <div className="home__row_wrapper">
          {coffeeBox2.map(product => (
            <div key={product.id} className="home__row">
              <Product
              key={product.key}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </div>
          ))}
          </div>
          <br/>



      </div>
      
      </div>
    </div>
  );
}

export default Home;
