import './App.css';
import Homepage from './components/homepage/homepage';
import { Route } from 'react-router-dom';
import Projects from './components/projects/projects';
import Contact from './components/contacts/contact';

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={Homepage}/>
      <Route exact path ='/projects' component={Projects}/>
      <Route exact path ='/contact' component={Contact}/>
    </div>
  );
}

export default App;
