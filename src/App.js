import { Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import StudentUpdate from "./Components/StudentUpdate/StudentUpdate.js"
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={Welcome} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/update/:id" exact component={StudentUpdate} />
      
    </div>
  );
}

export default App;
