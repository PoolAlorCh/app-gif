import { useState } from "react"

export const FormGif = ({addCategoryProps}) => {

const[inputValue, setInputValue]= useState("")


const onInputChange = (event)=> {
    setInputValue(event.target.value)
}

const onSubmitGif=(event) => {
    event.preventDefault()
    addCategoryProps(inputValue)
    setInputValue("")
}

    return(
        <form onSubmit={onSubmitGif}>
                <input value={inputValue} onChange={onInputChange}type="text" placeholder="Buscar Gif" />
                <button>BUSCAR</button>
        </form>
        
    )
}