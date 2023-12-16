import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Header_two from './components/header-two/Header_two';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Header_two isOpen={() => setOpenModal(true)} />
      <Footer/>
    </div>
  );
}

export default App;
