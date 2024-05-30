import { useState } from "react";
import { AddCotegory } from "./components/AddCotegory";
import { GifGrid } from "./components/GifGrid";
//jADI3krU2492J09qZYeYA49upOOa8T7s
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Vegeta']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCotegory 
        onNewCategory = {(value) => onAddCategory(value)}
        />
            {
                categories.map((category) => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))
            }
      
    </>
  )
}
