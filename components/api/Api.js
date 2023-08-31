import react from "react";


export const getRecipe= async () => {
        try {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=c9b3e24fe9384dc9b347acbc35534820");
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

    
