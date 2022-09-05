import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Join from './routes/Join';
import Login from './routes/Login';
import Event from './routes/Event';
import Award from './routes/Award';
import Cooking from './routes/Cooking';
import Recipe from './routes/Recipe';
import Counseling from './routes/Counseling';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/counseling' element={<Counseling />} />
      <Route path='/recipe-lab' element={<Recipe />} />
      <Route path='/cooking' element={<Cooking />} />
      <Route path='/award' element={<Award />} />
      <Route path='/event' element={<Event />} />
      <Route path='/join' element={<Join />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Router;