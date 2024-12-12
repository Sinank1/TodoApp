import NavBar from './components/Navbar.jsx';
import PizzaList from './components/PizzaList.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
    return(
      <>
        <NavBar />
        <div className='container'>
          <PizzaList />
          <Footer />
        </div>
      </>
    )
  }