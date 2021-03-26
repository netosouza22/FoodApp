import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Champions from './Components/Champions';
import infoChamp from './Components/infoChamp';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Champions} exact/>
          <Route path="/:id" component={infoChamp} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
