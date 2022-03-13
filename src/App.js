import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PropertyListing from './pages/PropertyListing';
import PropertyDescriptionPage from './pages/PropertyDescriptionPage';
import PropertyTypePage from './pages/PropertyTypePage';
import New from './pages/New';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LogIn />} />
        <Route path='signup' element={<New />} />
        <Route path="property-sorting" element={<PropertyListing />} />
        <Route path="propertydescription/:name" element={<PropertyDescriptionPage />} />
        <Route path="property-sorting/:variable" element={<PropertyListing />} />
        <Route path="propertytypepage" element={<PropertyTypePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
