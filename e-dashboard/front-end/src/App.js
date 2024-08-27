import './App.css';
import Footer from './Components/Footer.js';
import Nav from './Components/Nav.js';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Register from './Components/Register';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import  AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     < Nav />
        <Routes>

          <Route  element ={<PrivateComponent />} >
            <Route path ="/" element ={<ProductList/>} />
            <Route path ="/add" element ={<AddProduct />} />
            <Route path ="/update/:id" element ={<UpdateProduct />} />
            <Route path ="/logout" element ={<h1>logout</h1>} />
            <Route path ="/profile" element ={<h1>Profile</h1>} />
            </Route>
            <Route path ="/register" element ={<Register />} />
            <Route path ="/login" element ={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;