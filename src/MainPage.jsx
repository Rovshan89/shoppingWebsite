import './MainPage.css'
import { useState } from 'react'



export default function MainPage(){

  

    const[num, setNum]=useState(0)
    const[items, setItem]=useState([])
    // const[MinNum, setMinNum]=useState(0)


    const handleIncrement=()=>{
        setNum(num+1)
    }

    const handleDecrement=()=>{
        if(num>0){
        setNum(num-1)
        }
    }
    const handleAdd=()=>{
        const NewItem=`${num} Apple`
        setItem([...items, NewItem])

    }

    const appleImage= 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (<>
    
    <h1>Products</h1>
    <div>
    <ul>
            {items.map((item,index)=>(
                
                
                <li key={index}>{item}</li>
            ))}
           </ul>
        </div>
    <div className="item" id='item'>

    <img src={appleImage} alt="Apple" />     
        <div className='button'>
            <div id='left-buttons'>
            <button id='plus' onClick={handleIncrement} >+</button>
           
            
            <h3>{num}</h3>
            <button id='minus' onClick={handleDecrement} >-</button>
            </div>

            
            <button id='add' onClick={handleAdd}>add</button>
            
            
        </div>
        
    </div>
    



    </>)
}