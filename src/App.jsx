import React from 'react'
import MainPage from './component/MainPage'
import { Route, Routes } from 'react-router-dom'
import MealInfo from './component/MealInfo'
import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>

      <Route path='/:mealid' element={<MealInfo />} />
    </Routes>
  )
}

export default App
