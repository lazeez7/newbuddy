import React, { useEffect, useState } from "react";
import "./header_two.css";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { AXIOS } from "../../utils";

import ProductModal from '../modal/Modal'

const Header_two = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [categories, setCategories] = useState([]);
  const [modalState, setModalState] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.className = "locked";
    } else {
      document.body.removeAttribute("class");
    }
  }, [isOpen]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const target = document.getElementById("novinki");
      if (window.scrollY >= target.offsetTop) {
        document.querySelector(".header-main").classList.add("shadow");
      } else {
        document.querySelector(".header-main").classList.remove("shadow");
      }
    });
  }, []);

  useEffect(() => {
    AXIOS.get("/categories/").then(({ data }) => setCategories(data));
  }, []);

  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="wrap_two">
            <div className="flex nav_two">
              {categories?.map((cat) => (
                <a href={`#${cat.name_en}`} key={cat.id}>
                  {cat.name_ru}
                </a>
              ))}
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla"
              size={400}
              lockBackgroundScroll
            >
              <div className="modal_block">
              <div onClick={toggleDrawer} className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
                <img
                  src="https://apexpizza.uz/static/media/pitsapart.d7047adf9bd1a887cbd4.png"
                  alt=""
                />
                <div className="modal-text">
                  <h4>Пока нет товаров</h4>
                  <h5>
                    Ваша корзина пуста, откройте «Меню» и выберите понравившийся
                    товар.
                  </h5>
                </div>
                <div onClick={toggleDrawer} className="modal-btn">
                  <a href="#novinki">
                    <button>Меню</button>
                  </a>
                </div>
              </div>
            </Drawer>
            <div className="korzinka flex">
              <button onClick={toggleDrawer}>
                <img
                  src="https://apexpizza.uz/static/media/korzinka-yellow-icon.336092f5a231762b5d5ff5360b1146e0.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="novinki">
        {categories?.map((cat) => (
          <section key={cat.id} id={cat.name_en}>
            <h1>{cat.name_ru}</h1>
            <div className="wrapper">
              {cat.burgers.map((burger) => (
                <div className="main-card">
                  <div className="cards_img">
                    <img src={burger.image} alt="" />
                  </div>
                  <div className="cards_detalis">
                    <h5>{burger.name_ru}</h5>
                    <div className="box">
                      <button
                        onClick={() =>
                          setModalState({
                            open: true,
                            data: burger,
                          })
                        }
                      >
                        <img
                          src="https://apexpizza.uz/static/media/aIcon.b1db301914d6a331f19e40c04820688f.svg"
                          alt=""
                        />
                      </button>
                      <h6 className="price">
                        от {burger.price.toLocaleString()} сум
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ProductModal state={modalState} setState={setModalState} />
    </>
  );
};

export default Header_two;
