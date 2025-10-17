"use client"

import { useState } from 'react'

export default function List() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const maxCharacters = 28

    function add() {
        if (input.trim() === "") {
            setError("⚠️ Please, fill in this field ⚠️")

            setTimeout(() => {
                setError("")
            }, 3000)

            return
        }
        setTasks([...tasks, input])
        setInput("")
        setError("")
    }
    function clearAll() {
        setTasks([])
        setInput("")
    }
    return (
        <div>
            <h1>To-do list</h1>
            {input.length}/{maxCharacters}
            {error && <p className='empty'>{error}</p>}
            <input type="text" placeholder='Type a task...' value={input} onChange={(e) => setInput(e.target.value)} maxLength={28} onKeyDown={(e) => {
                if (e.key === 'Enter') add()
                }} />
            <button onClick={add}>Add</button>
            <button onClick={clearAll}>Clear all</button>

            <ul>
                {tasks.map((tasks, i) => (
                    <li key={i}>{tasks}</li>
                ))}
            </ul>
        </div>
    )
}