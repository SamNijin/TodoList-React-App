import React from 'react'
import { useState } from 'react'

function ListItems({ todo, setTodo }) {
    let checkButton = false
    let editButton = true
    // let edit = false
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
            {

                todo.map(todos => (
                    <li key={todos.id} className='list-none sm:flex sm:justify-around max-w-full pl-0 sm:px-5 md:px-auto'>
                        {
                            // edit ?
                            editId === todos.id ?
                                (
                                    checkButton = true,
                                    editButton = false,
                                    <div>
                                        <input type="text" value={title} onChange={editHandler} maxLength='20' />
                                    </div>
                                ) :
                                (
                                    checkButton = false,
                                    editButton = true,
                                    <div>
                                        <h4 > {todos.title}</h4>
                                    </div>
                                )
                        }

                        <div className=' flex justify-center pb-5 sm:pb-0 gap-10 '>
                            {
                                checkButton &&
                                <div className='flex align-middle gap-1 cursor-pointer text-green-600 font-bold' onClick={() => { checkHandler(todos) }}>
                                    <i className="ri-check-fill"></i>
                                    Check
                                </div>
                            }

                            {
                                editButton &&
                                <div className='flex align-middle gap-1 cursor-pointer text-purple-800' onClick={() => { setTitle(todos.title); setEditId(todos.id) }}>
                                    <i className="ri-pencil-fill"></i>
                                    Edit
                                </div>
                            }
                            <div className='flex align-middle gap-1 cursor-pointer text-red-600' onClick={() => { deleteHandler(todos) }}>
                                <i className="ri-delete-bin-5-fill"></i>
                                Delete
                            </div>
                        </div>
                    </li>
                ))
            }
        </div >
    )
}

export default ListItems