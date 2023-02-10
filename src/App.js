import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Tests from './components/Tests';
import Questionnaire from './components/Form';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path='/tests' element={<Tests/>}></Route>
          <Route path='/questionnaire' element={<Questionnaire/>}></Route>
          <Route path='/1' element={<Tests/>}></Route>
          <Route path='/2' element={<Tests/>}></Route>
          <Route path='/3' element={<Tests/>}></Route>
          <Route path='/create_form' element={<CreateForm/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
