
import './App.css';
import { PlayerProfile } from './components/PlayerProfile';
import { SearchBar } from './components/SearchBar';
import playerData from "./data.json"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <SearchBar data={playerData} />
          </Route>
          <Route  path="/playerprofile/:Name/:id">
          <PlayerProfile />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
