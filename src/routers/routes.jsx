﻿import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LandingPage} from '../pages/LandingPage'
import { MovieDetails } from '../pages/MovieDetails';

export const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route path='/movieDetail/:movieId' element={<MovieDetails/>} />
        </Routes>
    </Router>
  )
}
