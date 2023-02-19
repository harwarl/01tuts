import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Awwal');
    const [count, setCount] = useState(0);
    const handleChangeName = () => {
        const names = ['Bob', 'Mathew', 'Kelvin'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    const handleClick1 = () =>{
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }
    const handleClick4 = () =>{
        console.log(count);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleChangeName}>
                Change Name
            </button>
            <button onClick={handleClick1}>
                Increase Count
            </button>
            <button onClick={handleClick4}>
                Check Count
            </button>
            <button onClick={()=>handleClick2('Dave')}>
                Click It
            </button>
            <button onClick={(e)=>handleClick3(e)}>
                Click It
            </button>
        </main>
    )
}

export default Content