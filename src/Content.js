import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items, setItems] = useState([
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

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('Shopping List', JSON.stringify(listItems));
    }
    const handleDelete = (id) =>{
        const listItems = items.filter( item => item.id !== id)
        setItems(listItems);
        localStorage.setItem('Shoppig List', JSON.stringify(listItems));
    }


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
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className='items' key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label 
                        style={item.checked? {textDecoration: "line-through"}: null}
                        onDoubleClick={()=>handleCheck(item.id)}
                        >
                            {item.item}
                        </label>
                        <FaTrashAlt
                            role='button'
                            tabIndex='0'
                            onClick={()=>handleDelete(item.id)}
                        />
                    </li>
                ))}
            </ul>
            ): (
                <p style={{margin: "2rem"}}> Your List is Empty</p>
            )}
        </main>
    )
}

export default Content