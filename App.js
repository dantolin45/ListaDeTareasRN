import { View } from 'react-native';
import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/NavBar.js';
import Main from './pages/MainRecipes.js'
import { RecipeContext } from './context/recipeContext.js';
import './App.css'
import ToDoList from './components/todolist/ToDoList.js';


export default function App() {

  const [recipesApi, setRecipesApi] = useState([]);

    useEffect(() => {

        getRecipe().then((data) => {
            setRecipesApi(data.results);

        })
        console.log(recipesApi)
    }, []);

  return (
    <View >
      
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route path="/" element={<ToDoList/>} />
            <Route path="/recetas" element={<Recipes/>} />
            <Route path="/listatareas" element={<Main />} />

          </Routes>

        </BrowserRouter>
      
    </View>

  );
}

