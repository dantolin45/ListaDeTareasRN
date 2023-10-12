
const apikey = "?apiKey=c9b3e24fe9384dc9b347acbc35534820"
export const getRecipe = async () => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch${apikey}`);
        const data = await response.json();
        console.log(data)
        return data;
        
    } catch (error) {
        console.error(error);
    }
}


export const getTasteByIdRecipe = async (id) => {
    try {
        console.log(id)
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json${apikey}`)
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}
