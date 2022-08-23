import Navbar from '../src/components/navbar/Navbar';
import Footer from '../src/components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routers />
      <Footer />
    </BrowserRouter>
  )
}

export default App