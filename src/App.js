import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Supplier from './component/Supplier/Supplier';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={Supplier}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
