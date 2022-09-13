import { type } from "@testing-library/user-event/dist/type";
import React, { createElement, useState } from "react";
import './todo.css'

function Todo(){
    
    // MUDANÇA DE ELEMENTOS COM BASE NO ESTADOS DOS ELEMENTOS
    
    const [text, setText] = useState("");
    const [add, setAdd] = useState([]);
    
    // FUNCTION'S RECEBENDO A MUDANÇA DE ESTADO 
    
    function handleChange(event){
        let texto = event.target.value;
        setText(texto)
    }
    
    function addItem(event){
        event.preventDefault();
        if (text){
            setAdd([...add, text])
            setText("");
        }
    }
    function List(props){
        return(
            <ul>
                {add.map(add => <li>{add}</li>)}
            </ul>
        )
    }
    
    return(
        <div className="container">
            <h1>To do</h1>
            <form>
                <input type="text" onChange={handleChange} value={text}/>
                <button onClick={addItem}>Adicionar item</button>
            </form>

            <ul>
                {add.map(add => <li>{add}</li>)}
            </ul>
        </div>
    );
}


export default Todo;