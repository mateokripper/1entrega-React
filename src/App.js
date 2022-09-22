import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./routes/AppRouter";
import CartProvider from './context/CartContext';
import './style.css';

function App() {
  return (
	<CartProvider>

	<AppRouter />

  </CartProvider> 
	);
}

export default App;
