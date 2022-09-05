import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <div>
    <NavBar></NavBar>
    <ItemListContainer greetings = 'Welcome'></ItemListContainer> 
    <ItemCount></ItemCount>
    </div>
  );
}

export default App;
