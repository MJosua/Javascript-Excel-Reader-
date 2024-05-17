import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from './Page/Homepage';

import { ChakraProvider } from '@chakra-ui/react'
import Login from './Page/Login';

function App() {
  const cors = require("cors");
  return (
    <ChakraProvider>
      <Router>
        <RoutingBasedOnRole />
      </Router>
    </ChakraProvider>

  );
}

function RoutingBasedOnRole() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}
export default App;
