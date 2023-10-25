import { View } from 'react-native';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/NavBar.js';
import Main from './pages/MainRecipes.js'
import { RecipeContext } from './context/recipeContext.js';
import './App.css'
import ToDoList from './components/todolist/ToDoList.js';


export default function App() {

  return (
    <View >
      <RecipeContext>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ToDoList/>} />
            <Route path="/recetas" element={<Recipes/>} />
            <Route path="/listatareas" element={<Main />} />
          </Routes>

        </BrowserRouter>
      </RecipeContext>
    </View>

  );
}

