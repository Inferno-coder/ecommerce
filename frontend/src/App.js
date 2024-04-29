import './App.css';
import Home from './pages/Home'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ProductDetail } from './pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetail  />}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>  
    </div>
  );
}

export default App;
