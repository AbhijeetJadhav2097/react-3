
import {useState} from 'react';

const Count = () => {
    let [count , setCount] = useState(0)
    let style = {
                countStyle: {
                    margin: 0, fontSize: '5em'
                },
                buttonStyle: {
                    padding: '4px',
                    borderRadius: '10px',
                    fontSize: "1.2em"
                },
            };

//  const increment = () =>{
//     setCount(count + 1)
//  }

//  const increment = () =>{
//     setCount((prevCount) => {
//        return prevCount + 1
//     })
//  }

//another way of writing code 
 const increment = () =>{
    setCount((prevCount) => prevCount + 1
    )
 }
 const increment5 = () =>{
    increment()
    increment()
    increment()
    increment()
    increment()
 }

// const decrement = () => {
//     setCount(count - 1)
// }


// const decrement = () => {
//     setCount((prevCount)=> {
//       return  prevCount - 1 })
// }
//another way of writing code in single line 
const decrement = () => {
    setCount((prevCount)=> prevCount - 1 )
}

const decrement5 = () => {
    decrement()
    decrement()
    decrement()
    decrement()
    decrement()
}

 return (
     <>
        <p style = {style.countStyle}>{count}</p>
        <button style = {style.buttonStyle} onClick={increment}>Increment</button>
        <button style = {style.buttonStyle} onClick={increment5}>Increment5</button>
        <button style = {style.buttonStyle} onClick={decrement5}>Decrement5</button>
        <button style={style.buttonStyle} onClick={decrement}> Decrement</button>
        </>
 );
}


export default Count;