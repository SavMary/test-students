import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import { TableHeadComponent } from './components/TableHeadComponent/TableHeadComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
