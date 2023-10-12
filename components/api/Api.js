export const getRecipe= async () => {
        try {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=c9b3e24fe9384dc9b347acbc35534820");
            const json = await response.json();
            console.log(json)
            return json;
        } catch (error) {
            console.error(error);
        }
    }
