import { Route, Routes } from 'react-router-dom';
import './App.css';
import Createpost from './components/Createpost';
import Error from './components/Error';
import Header from './components/Header';
import PostExample from './components/PostExample';
import View from './components/View';

function App() {
  return (
    <div className="App">
    <Header />
    <PostExample />
    {/* <Routes>
    <Route path='/' element={<View />} />
    <Route path='/createpost' element={<Createpost />}/>
    <Route path='/*' element={<Error />}/>
    </Routes> */}
    </div>
  );
}

export default App;
