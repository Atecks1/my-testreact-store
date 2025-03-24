import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const TopSneakers = [
  {
    id: 1,
    title: 'Nike Air Mag',
    image: 'https://images.unsplash.com/photo-1636718282214-0b4162a154f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fE5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Легендарные кроссовки из фильма "Назад в будущее".',
    content: 'Подробная информация о Nike Air Mag...',
  },
  {
    id: 2,
    title: 'Nike Dunk SB Low Staple NYC Pigeon',
    image: 'https://images.unsplash.com/photo-1595909337002-3cdc3a590160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxOaWtlJTIwc25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    description: 'Культовые кроссовки, созданные в сотрудничестве с Jeff Staple.',
    content: 'Подробная информация о Nike Dunk SB Low Staple NYC Pigeon...',
  },
  {
    id: 3,
    title: 'Adidas Human Race NMD Pharrell x Chanel',
    image: 'https://images.unsplash.com/photo-1515564242578-bbea07d21cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxOaWtlJTIwc25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    description: 'Коллаборация Pharrell Williams и Chanel.',
    content: 'Подробная информация о Adidas Human Race NMD Pharrell x Chanel...',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Добро пожаловать в мир кроссовок!</h1>
        <p>Здесь вы найдете самые эксклюзивные и топовые модели.</p>
      </header>

      <section className="featured-sneakers">
        <h2>Топ-3 кроссовок этой недели</h2>
        <div className="sneaker-grid">
          {TopSneakers.map((sneaker) => (
            <div className="sneaker-card" key={sneaker.id}>
              <Link to={`/sneakers/${sneaker.id}`}>
                <img src={sneaker.image} alt={sneaker.title} />
                <h3>{sneaker.title}</h3>
                <p>{sneaker.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2>Готовы к покупке?</h2>
        <p>Посмотрите нашу коллекцию самых дорогих и красивых кроссовок!</p>
        <a href="/products" className="cta-button">
          Перейти в магазин
        </a>
      </section>
    </div>
  );
};

export default Home;