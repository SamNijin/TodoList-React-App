import React from 'react'
import { v4 as uuid4 } from 'uuid'
import { initializeApp } from "firebase/app";
import { firebaseConfig, connectionReference } from '../firebase/FirebaseConfig'
import { addDoc } from 'firebase/firestore';


initializeApp(firebaseConfig)

function Form({ input, setInput, todo, setTodo }) {

    const inputHandler = e => {
        setInput(e.target.value)
    }
    const submitHandler = () => {
        // e.preventDefault()
        // setTodo([...todo, { id: uuid4(), title: input }])

        addDoc(connectionReference, {
            id: uuid4(),
            task: input
        })
        setInput('')
    }
    let color = ''
    input.length <= 7 ?
        color = 'text-green-500' :
        input.length <= 12 ?
            color = 'text-yellow-500' :
            color = 'text-red-600'
    return (
        <div className='bg-purple-200 max-w-sm md:max-w-lg py-10 mx-auto lg:mt-8 rounded-xl shadow-2xl mb-7 transition-all duration-200'>
            <h2 className='text-base sm:text-xl lg:text-2xl font-medium sm:font-semibold lg:font-bold text-purple-800 uppercase py-1 sm:py-3 lg:py-5'>Add New Items</h2>
            <form onSubmit={submitHandler} className='my-2 sm:my-3 md:my-4 lg:my-5'>
                <input type="text" value={input} placeholder='Enter Items' onChange={inputHandler} maxLength="20" className='w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/2  px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' required autoFocus />

                <div className='flex justify-center lg:justify-end lg:w-72 lg:ml-2 mt-1 lg:mt-3'>
                    <p className={'font-semibold text-base ' + color}>Remaing characters {20 - input.length}</p>
                </div>
            </form>
            {
                input === '' ?
                    <button onClick={submitHandler} disabled className='bg-gray-500 px-3 py-1 mt-2 rounded-md cursor-not-allowed text-lg font-semibold uppercase text-purple-100 teansition-all duration-1000'>Submit</button> :
                    <button onClick={submitHandler} className='bg-purple-500 px-3 py-1 rounded-lg mt-2  text-lg font-semibold text-white uppercase transition-all duration-1000'>Submit</button>
            }
        </div>
    )
}

export default Form