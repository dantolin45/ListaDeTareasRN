import { View } from 'react-native';
import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/NavBar.js';
import Main from './pages/MainRecipes.js'
import './App.css'

export default function App() {

  return (
    <View >
          <BrowserRouter>
            <Navbar/> 
              
              <Routes>  
                <Route path="/" element={""}/>
                <Route path="/recetas" element={<Recipes/>}/>
                <Route path="/listatareas" element={<Main/>}/>
              </Routes> 
          </BrowserRouter>
    </View>
  );
}

