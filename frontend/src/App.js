import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import Form from './pages/form';
import ResultPage from './pages/result';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/faq' element={<FAQ/>}></Route>
    <Route path='/apply' element={<Form/>}></Route>
    <Route path='/result' element={<ResultPage/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
