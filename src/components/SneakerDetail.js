
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SneakerDetail.css';

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

const SneakerDetail = () => {
  const { id } = useParams();
  const sneaker = TopSneakers.find((s) => s.id === parseInt(id));

  if (!sneaker) {
    return <div>Кроссовки не найдены</div>;
  }

  return (
    <div className="sneaker-detail">
      <h2>{sneaker.title}</h2>
      <img src={sneaker.image} alt={sneaker.title} />
      <p>{sneaker.description}</p>
      <p>{sneaker.content}</p>
      <Link to="/" className="back-button">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default SneakerDetail;