import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from "./components/Counter";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
