import React, { useState } from "react";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { doc, getDocs, deleteDoc } from "firebase/firestore";
import {
    firebaseConfig,
    db,
    connectionReference,
} from "../firebase/FirebaseConfig";

initializeApp(firebaseConfig);

function ViewData() {
    const [state, setstate] = useState([]);

    useEffect(() => {
        FetchData();
    }, [state]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    function FetchData() {
        getDocs(connectionReference)
            .then((snapshot) => {
                const task = snapshot.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setstate(task);
            })
            .catch((err) => console.log(err.message));
    }

    const deleteHandler = (id) => {
        console.log("clicked delete", id);
        const documentReference = doc(db, "tasklist", id);
        deleteDoc(documentReference);
    };
    return (
        <div>
            <h2>view from firebase</h2>
            {state.map((lists) => (
                <li
                    key={lists.id}
                    className="list-none lg:flex lg:justify-between lg:px-40"
                >
                    {lists.data.task}
                    <div className="mb-2">
                        <button
                            className="px-5 py-2 rounded-md bg-purple-700"
                            onClick={() => deleteHandler(lists.id)}
                        >
                            delete
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default ViewData;
