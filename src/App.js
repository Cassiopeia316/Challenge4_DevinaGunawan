import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from './GlobalStyle';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import Rentcar from "./components/RentCar";
import CarProvider from "./Context";
import DetailCar from "./components/DetailCar";

const App = () => (
  <>
    <Router>
      <CarProvider>
        <Routes>
          <Route path='/rent' element={<Rentcar/>} />
          <Route path='/detail/:id' element={<DetailCar/>} />
        </Routes>
      </CarProvider>
    </Router>
    <GlobalStyle />
  </>
)
export default App;