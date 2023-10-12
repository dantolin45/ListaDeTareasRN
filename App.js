import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React,{useState, useEffect} from "react";
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import Recipes from './pages/Recipes.js';
import Navbar from './components/navbar/NavBar';
import Main from './components/todolist/Main'


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

