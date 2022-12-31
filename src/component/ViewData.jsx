import React, { useState } from 'react'
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { firebaseConfig, db, connectionReference } from '../firebase/FirebaseConfig'

initializeApp(firebaseConfig);

let list = []

function ViewData() {
    // const [todo, setTodo] = useState([]);
    // getDocs(connectionReference)
    //     .then((snapshot) => {
    //         snapshot.docs.map((doc) => (
    //             list.push({ ...doc.data(), id: doc.id }),
    //             // setTodo([{ ...doc.data(), id: doc.id }]),
    //             console.log('Todo Data', list)
    //         )
    //         )
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //     })

    onSnapshot(connectionReference, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            list.push({
                ...doc.data(), id: doc.id
            })
        })
    })

    const deleteHandler = (id) => {
        const documentReference = doc(db, 'tasklist', id)
        deleteDoc(documentReference)
    }
    return (
        <div >
            <h2>view from firebase</h2>
            {
                list.map((lists) => (
                    <li key={lists.id} className='list-none flex justify-around'>{lists.task}
                        <div>
                            <p onClick={() => deleteHandler(lists.id)}>delete</p>
                        </div>
                    </li>
                ))
            }
            {
                useEffect(() => {
                    console.log('data in list', list)
                }, [])
            }
        </div >
    )
}

export default ViewData