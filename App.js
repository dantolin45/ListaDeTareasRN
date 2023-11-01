import { View } from 'react-native';
import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/NavBar.js';
import Main from './pages/MainRecipes.js'
import { getRecipe } from './components/api/Api.js';
import './App.css'
import ToDoList from './components/todolist/ToDoList.js';
import RecipeDetail from './pages/RecipesDetail.js';
import LogIn from './pages/LogIn.js';
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
            {recipesApi.map((recipesURL) =>{
              return( <Route path={`/recipeDetail/${recipesURL.title}`} element={<RecipeDetail recipe={recipesURL}/>} />)
            })

            }
            <Route path="/" element={<ToDoList/>} />
            <Route path="/recetas" element={<Recipes/>} />
            <Route path="/listatareas" element={<Main />} />
            <Route path="/userlogin" element={<LogIn />} />
          </Routes>

        </BrowserRouter>
      
    </View>

  );
}

