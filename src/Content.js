import React from 'react'

const Content = () => {
    const handleChangeName = () => {
        const names = ['Bob', 'Mathew', 'Kelvin'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    const handleClick = () =>{
        console.log('You Clicked It')
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }
    const handleClick4 = (name) =>{
        console.log(`${name} Clicked It`)
    }

    return (
        <main>
            <p onDoubleClick={() => handleClick4(handleChangeName())}>
                Hello {handleChangeName()}
            </p>
            <button onClick={handleClick}>
                Click It
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