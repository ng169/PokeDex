import { Switch, Route } from 'react-router-dom'
import './App.css';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <Switch>
      <Route exact path="/PokeDex/" render={(props) => <Pokedex {...props} />} />
      <Route exact path="/PokeDex/:pokemonId" render={(props) => <Pokemon {...props} />} />
    </Switch>

  )
}

export default App;
