import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>О нас</h1>
        <p>Мы - команда энтузиастов, увлеченных миром кроссовок.</p>
      </header>

      <section className="about-mission">
        <h2>Наша миссия</h2>
        <p>Предоставлять вам доступ к самым редким, дорогим и красивым кроссовкам со всего мира. Мы стремимся предложить вам уникальный опыт покупки, где каждый найдет что-то особенное для себя.</p>
      </section>

      <section className="about-team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="" alt="Иван" />
            <h3>Иван</h3>
            <p>Основатель и главный энтузиаст</p>
          </div>
          <div className="team-member">
            <img src="" alt="Мария" />
            <h3>Мария</h3>
            <p>Эксперт по стилю и подбору кроссовок</p>
          </div>
          <div className="team-member">
            <img src="" alt="Алексей" />
            <h3>Алексей</h3>
            <p>Менеджер по работе с клиентами</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;