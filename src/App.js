import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/Products', element: <ProductsPage />}
])

function App() {
  return <div></div>;
}

export default App;
