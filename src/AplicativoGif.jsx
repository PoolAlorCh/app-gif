import { useState } from "react"
import { FormGif, GifCards } from "./components"

export const AplicativoGif = () => {
    
    const [categories, setCategories]= useState (["goku"])

    const addCategory = (newCategory)=> {
        setCategories([newCategory, ...categories])
    }

    return(
        <div>
            <h1>APLICATIVO GIF CERTUS</h1>   
            <h2>Busquedad</h2>
            {
                categories.map((categori)=>(
                    <div>                     
                        <p>{categori}</p>
                    </div>
                ))
            }        
            <FormGif addCategoryProps={addCategory}/> 
            {/**mostrar las api */}

            {
                categories.map((categori)=>(
                    <GifCards key={categori} categori={categori}/>
                ))
            }
           
        </div>
    )
}
