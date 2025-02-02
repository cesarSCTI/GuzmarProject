import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import CotizationsList from './Views/Cotizations/CotizationsList';
import CotizationView from './Views/Cotizations/CotizationView';
import CotizationNew from './Views/Cotizations/CotizationNew';
import ProductsList from './Views/Products/ProductsList';
import ProductsNew from './Views/Products/ProductsNew';
import ProductsView from './Views/Products/ProductsView';
import OrderBaseballList from './Views/OrderBaseball/OrderBaseballList';
import OrderBaseballNew from './Views/OrderBaseball/OrderBaseballNew';
import OrderBaseballView from './Views/OrderBaseball/OrderBaseballView';



function App() {
  return (
        <>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cotizaciones' element={<CotizationsList/>} />
            <Route path='/cotizaciones/new' element={<CotizationNew/>} />
            <Route path='/cotizaciones/:id' element={<CotizationView/>} />
            <Route path='/products' element={<ProductsList/> } />
            <Route path='/products/new' element={<ProductsNew />} />
            <Route path='/products/:id' element={<ProductsView /> } />
            <Route path='/baseball' element={<OrderBaseballList />} />
            <Route path='/baseball/new' element={<OrderBaseballNew />} />
            <Route path='/baseball/:id' element={<OrderBaseballView />} />
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
