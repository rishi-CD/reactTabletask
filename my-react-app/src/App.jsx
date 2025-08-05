import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import  Form from './components/Form';
import NewTable from './components/NewTable'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<NewTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;   