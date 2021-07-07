import { Switch, Route } from 'react-router-dom'
import './App.css';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <Switch>
      <Route exact path="/PokeDex/" render={(props) => <Pokedex {...props} />} />
      <Route exact path="/PokeDex/:pokemonId" render={(props) => <Pokemon {...props} />} />
    </Switch>

  )
}

export default App;
