
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormRegistration from './component/registration';
import 'semantic-ui-css/semantic.min.css'
import Home from './component/home'
import FormLogin from './component/login';
import Pokemondata from './component/pokemondata';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <nav>
        <ul>
        <li>
      <Link to='/'>Home</Link></li><br/>
      <li><Link to='/registration'>Registration</Link></li><br/>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/pokemondata'>PokemonData</Link></li>
        </ul>

        </nav>
        
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path ='/login' element={<FormLogin/>}/>
        <Route path='/registration' element={<FormRegistration/>}/>
    <Route path='/pokemondata' element={<Pokemondata/>}/>
       </Routes>
       </Router>
        
      </header>
    </div>
  );
}

export default App;
