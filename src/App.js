import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
    <NavBar />
    
    <ItemListContainer />

    {/* Este componente ItemDetailContainer recibe por prop el id de un producto
    Encuentra ese producto entre el array de productos y muestra el detalle del
    producto pasándolo al componente ItemDetail */}
    <ItemDetailContainer id={3} />
  </>
  );
}

export default App;
