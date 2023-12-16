import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="wrap">
          <div className="card">
            <img
              src="https://apexpizza.uz/static/media/logo22.01543a9b35d44b02aea93a6cd7303393.svg"
              alt=""
            />
            <div>
              <a href="№">apexpizza</a>
              <p>Нет места для теста</p>
            </div>
          </div>
          <div className="card">
            <h3>
              <a href="№">Доставка пиццы за 35 мин.</a>
            </h3>
            <p>Работаем круглосуточно 24/7</p>
          </div>
          <div className="card">
            <img
              src="https://apexpizza.uz/static/media/tel-green.5b00430ad38499833a2fbf303f3a65b3.svg"
              alt=""
            />

            <div>
              <a href="№">(71) 202-20-20</a>
              <p>Звоните сейчас!</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://apexpizza.uz/static/media/sertifikat-xalol.f31879d9808fe10553f5.png"
              alt=""
            />
            <div>
              <a href="№">СЕРТИФИКАТ ХАЛЯЛЪ</a>
              <p>Без свинины</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
