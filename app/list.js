"use client"

import { useState } from 'react'

export default function List() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const maxCharacters = 30
    const counterColor =
        input.length >= 20 ? "rgba(219, 16, 16,1)" :
            input.length >= 15 ? "yellow" : "white"

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
            {error && <p className='empty' style={{ opacity: error ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: error ? "auto" : "none" }}>{error}</p>}

            <p style={{ color: counterColor, transition: "color 0.3s ease" }} className='counter'>
                {input.length}/{maxCharacters} characters
            </p>
            <p className='counter'>
                You have <span>{tasks.length}</span> task(s)
            </p>
            {input.length === maxCharacters && (
                <p className='warning'>{`You've reached the limit of ${maxCharacters} characters`}</p>
            )}

            <input type="text" placeholder='Type a task...' value={input} onChange={(e) => setInput(e.target.value)} maxLength={maxCharacters} onKeyDown={(e) => {
                if (e.key === 'Enter') add()
            }} />
            <button onClick={add}>Add</button>
            <button onClick={clearAll}>Clear all</button>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </div>
    )
}