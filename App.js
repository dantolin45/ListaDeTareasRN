import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from "react";
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import RecipesList from './components/recipes/RecipesList';
import Navbar from './components/navbar/NavBar';
import Main from './components/todolist/Main'


export default function App() {
  return (
    <View >
          <BrowserRouter>
            {/* <Navbar/> */}
              <Routes>  
                <Route path="/" element={""}/>
                <Route path="/recetas" element={<RecipesList/>}/>
                <Route path="/listatareas" element={<Main/>}/>
              </Routes> 
          </BrowserRouter>
    </View>
  );
}

