
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
