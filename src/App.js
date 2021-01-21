import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Header from './components/Header';
import Products from './components/Products';


const App = () => {
  return (
    <>
    <Header />
    <Banner title="Olá, o que você está buscando?" subtitle="Criar ou migrar seu e-commerce?" />
    <Products />
    <Footer />
    </>
  );
}

export default App;
