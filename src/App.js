import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import Cards from './components/Cards';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <ItemListContainer greetings = 'Welcome'></ItemListContainer> 
    <Cards></Cards>
    </div>
  );
}

export default App;
