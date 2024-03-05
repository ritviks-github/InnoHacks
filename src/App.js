import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {Route,Routes} from 'react-router-dom';
import AboutUS from './AboutUS';
import EventDtls from './EventDtls';
import ContactUS from './ContactUS';
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/eventDetails" element={<EventDtls />} />
        <Route path = "/contactus" element={<ContactUS />} />
      </Routes>
    </>
  );
}

export default App;
