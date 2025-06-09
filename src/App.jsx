import './styles/App.css';
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Services from './Components/Service/Services.jsx';
import Customer from './Components/Customer/Customer.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Services />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
