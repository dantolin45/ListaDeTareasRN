import react from "react";


export const getJoke = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
    }

export const getCategories = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/categories");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
    }

export const getJokeByCategory = async (category) => {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
    }

export const searchJoke = async (query) => {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
    }

    
