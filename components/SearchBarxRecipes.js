import React from "react";
import { useState } from "react";
import { useRecipeFunctions } from "../context/recipeContext";

const SearchBarxRecipes = () => {
    const recipeFunctions = useRecipeFunctions();
    let [search, setSearch] = useState("");
    const handleSearch = (e) =>{
        setSearch(e.target.value)
        console.log(search)
    }
    
    return (
        <>
            <div>
                <input type="search" value={search} onChange={handleSearch} id="site-search" name="q"  /><button type="submit" value={search} onClick={recipeFunctions.SearchRecipe}>Buscar</button>
            </div>
        </>
    )
}
export default SearchBarxRecipes;