import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Awwal');
    const handleChangeName = () => {
        const names = ['Bob', 'Mathew', 'Kelvin'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    // const handleClick = () =>{
    //     console.log('You Clicked It')
    // }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleChangeName}>
                Change Name
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