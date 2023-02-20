import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

    // const [name, setName] = useState('Awwal');
    // const handleChangeName = () => {
    //     const names = ['Bob', 'Mathew', 'Kelvin'];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    // }
    // const handleClick1 = () =>{
    //     setCount(count + 1);
    //     console.log(count);
    // }

    // const handleClick2 = (name) =>{
    //     console.log(`${name} was clicked`)
    // }
    // const handleClick3 = (e) =>{
    //     console.log(e.target.innerText)
    // }
    // const handleClick4 = () =>{
    //     console.log(count);
    // }
    const[items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'item 1'
        },
        {
            id: 2,
            checked: true,
            item: 'item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'item 3'
        }
    ])


    return (
        <main>
            {/* <p>
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
            </button> */}
            <ul>
                {items.map((item) => (
                    <li className='items' key={items.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex='0'
                        />
                    </li>
                ))}
            </ul>

        </main>
    )
}

export default Content