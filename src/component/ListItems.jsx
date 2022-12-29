import React from 'react'
import { useState } from 'react'

function ListItems({ todo, setTodo }) {
    let checkButton = false
    let editButton = true
    let edit = false
    const [title, setTitle] = useState('')
    const [editId, setEditId] = useState([]);
    const deleteHandler = ({ id }) => {
        console.log('clicked delete and id is', id)
        setTodo(todo.filter(todos => todos.id !== id))
    }
    const editHandler = (e) => {
        setTitle(e.target.value)
        // console.log('title is', title)
        setTitle(e.target.value)
        // editButton = false
        // edit = true

    }
    const checkHandler = ({ id }) => {
        const index = todo.findIndex(todos => todos.id === id)
        console.log('index is', index)
        todo[index].title = todo.title
        setEditId([])
        setTodo(e => {
            e[index].title = title
            return e
        })
    }
    return (
        <div>
            <table className='w-auto'>
                {

                    todo.map(todos => (
                        <li key={todos.id} className='list-none flex justify-between px-32 max-w-screen-lg pl-0 sm:pl-5 md:p-auto lg:max-w-xl'>
                            {
                                // edit ?
                                editId === todos.id ?
                                    (
                                        checkButton = true,
                                        editButton = false,
                                        <tr>
                                            <input type="text" value={title} onChange={editHandler} />
                                        </tr>
                                    ) :
                                    (
                                        checkButton = false,
                                        editButton = true,
                                        <tr>
                                            <h4 > {todos.title}</h4>
                                        </tr>
                                    )
                            }

                            <tr>
                                <div className='flex gap-5'>
                                    {
                                        checkButton &&
                                        <div className='flex align-middle gap-1' onClick={() => { checkHandler(todos) }}>
                                            <i className="ri-check-fill"></i>
                                            Check
                                        </div>
                                    }

                                    {
                                        editButton &&
                                        <div className='flex align-middle gap-1' onClick={() => { setTitle(todos.title); setEditId(todos.id) }}>
                                            <i className="ri-pencil-fill"></i>
                                            Edit
                                        </div>
                                    }
                                    <div className='flex align-middle gap-1' onClick={() => { deleteHandler(todos) }}>
                                        <i className="ri-delete-bin-5-fill"></i>
                                        Delete
                                    </div>
                                </div>
                            </tr>
                        </li>
                    ))
                }
            </table>
        </div >
    )
}

export default ListItems