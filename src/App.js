
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path ="/home">
              <h1>Welcome</h1>
            </Route>
            <Route exact path ="/:input">
              <Input></Input>
            </Route>
            <Route exact path ="/:input/:color1/:color2">
              <Input></Input>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
