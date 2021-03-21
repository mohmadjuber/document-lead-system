import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import AppRoutes from './Components/AppRoutes';

function App() {
  return (
    <Router>
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
    </Router>
  );
}

export default App;
