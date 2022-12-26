import React from 'react'
import { v4 as uuid4 } from 'uuid'

function Form({ input, setInput, todo, setTodo }) {
    const inputHandler = e => {
        setInput(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        setTodo([...todo, { id: uuid4(), title: input }])
        setInput('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="addData">Add Items</label>
                <input type="text" value={input} onChange={inputHandler} />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Form