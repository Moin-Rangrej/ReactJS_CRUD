import { Route, Routes } from 'react-router-dom';
import './App.css';
import Createpost from './components/Createpost';
import View from './components/View';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<View />} />
    <Route path='/createpost' element={<Createpost />}/>
    </Routes>
    </div>
  );
}

export default App;
