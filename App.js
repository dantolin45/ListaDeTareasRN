import { View } from 'react-native';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/NavBar.js';
import Main from './pages/MainRecipes.js'
import recipes from './json/jsonRecipes.js';
import './App.css'
import { UserProvider } from './context/UserContext.js';
import { RecipeContext } from './context/recipeContext.js';
import RecipeDetail from './pages/RecipesDetail.js';
import LogIn from './pages/LogIn.js';
import Home from './pages/Home.js';
import { Search } from 'semantic-ui-react';
export default function App() {

  return (
    <UserProvider>
      <RecipeContext>

        <View >

          <BrowserRouter>

            <Navbar />

            <Routes>
              {recipes.map((recipesURL) => {
                return (<Route path={`/recipeDetail/${recipesURL.title}`} element={<RecipeDetail recipe={recipesURL} />} />)
              })

              }
              <Route path="/" element={<Home />} />
              <Route path="/recetas" element={<Recipes />} />
              <Route path="/listatareas" element={<Main />} />
              <Route path="/userlogin" element={<LogIn />} />
              <Route path={`/search?=`} element={<Search />} />
            </Routes>

          </BrowserRouter>

        </View>

      </RecipeContext>
    </UserProvider>
  );
}

