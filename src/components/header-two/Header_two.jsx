import React, { useEffect, useState } from "react";
import "./header_two.css";
// import component 👇
import Drawer from "react-modern-drawer";
import { GrCart } from "react-icons/gr";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { AXIOS } from "../../utils";
import { useCart } from "react-use-cart";
import ProductModal from "../modal/Modal";
import pizza from "../header-two/pizza.png";
import axios from "axios";

const Header_two = () => {
  const {
    totalItems,
    isEmpty,
    removeItem,
    emptyCart,
    updateItemQuantity,
    items,
    cartTotal,
  } = useCart();
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
  const sendBotFunc = (text) => {
    axios.get(
      `https://api.telegram.org/bot6796361084:AAH_DLJvZ_TRvl-W2vbxLMNfRbljuc_itTw/sendMessage?chat_id=-4058297029&text=${text}`
    );
  };
  
  let total = 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState(0)
  const formattedText = `Имя: ${name} \n Номер: ${phone} \n` + items
    .map((item) => `Название: ${item.name_ru} \n Цена: ${item.price} \n Количество: ${item.quantity} \n`)
    .join(`\n `);
    useEffect(()=> {
      if(isOpen === false){
        setIsModalOpen(false)
      }
    },[isOpen])
    const handleSendFunc = () => {
      if (name === "") {
        alert("Malumotlarni To`ldiring")
      }else if(phone === 0){
        alert("Malumotlarni toldirmagansiz")
      }
      else{
        sendBotFunc(formattedText)
      }
    }
  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="wrap_two">
            <div className="flex nav_two">
              {categories?.map((cat) => (
                <>
                  <a href={`#${cat.name_en}`} key={cat.id}>
                    {cat.name_ru}
                  </a>
                </>
              ))}
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="navbar-mobile"
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
                {isEmpty ? (
                  <>
                    <img src={pizza} alt="" />
                    <div className="modal-text">
                      <h4>Пока нет товаров</h4>
                      <h5>
                        Ваша корзина пуста, откройте «Меню» и выберите
                        понравившийся товар.
                      </h5>
                    </div>
                    <div onClick={toggleDrawer} className="modal-btn">
                      <a href="#novinki">
                        <button>Меню</button>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="use_cart_korzina">
                    <div className="clear-box">
                      <button className="clear" onClick={emptyCart}>
                        Очистить корзину
                      </button>
                    </div>
                    <div className="korzina_products">
                      {items?.map((el) => {
                        const priceCount = el.count * el.price;
                        total += priceCount;
                        if (el.count >= 1) {
                          return (
                            <div className="card-modal">
                              <img src={el.image} alt="" />
                              <span className="sapn">
                                <h3>{el.name_ru}</h3>
                                <p>{el.price}сум</p>
                              </span>
                              <div className="plus">
                                <button
                                  onClick={() =>
                                    updateItemQuantity(el.id,el.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                                <h3>{el.quantity}</h3>
                                <button
                                  onClick={() =>
                                    updateItemQuantity(el.id,el.quantity - 1)
                                  }
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          );
                        } else {
                          removeItem(el.id);
                        }
                      })}
                    </div>
                    <div className="bottom">
                      <h4>Сумма заказа : {total}сум</h4>
                      <button
                        className="order"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Drawer>
            <div className="korzinka flex">
              <button
                className={totalItems > 0 ? "active" : "zero"}
                onClick={toggleDrawer}
              >
                <GrCart size={"25"} />
              </button>
              <sub>{totalItems}</sub>
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
                        className="cart_btn"
                        onClick={() =>
                          setModalState({
                            open: true,
                            data: burger,
                          })
                        }
                      >
                        <GrCart size={"23px"} />
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
      {isModalOpen && (
      <form onSubmit={() => handleSendFunc()} className="form">
        <button onClick={() => setIsModalOpen(false)}>x</button>
        <input type="name" name="" id="" placeholder="имя" onChange={e => setName(e.target.value)} required />
        <input type="tel" name="" id="" placeholder="Номер Телефона" onChange={e => setPhone(e.target.value)} required />
        <button onClick={() => handleSendFunc()} className="btn-submit">Отправить</button>
      </form>
      )}
      <ProductModal state={modalState} setState={setModalState} />
    </>
  );
};

export default Header_two;
