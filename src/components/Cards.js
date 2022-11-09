import { toBeChecked } from "@testing-library/jest-dom/dist/matchers"
import { useState } from "react"
import Card from "./Card"
let count = 0
function Cards(){
    
    const [items,setItems]=useState([
        {id:1,img: "https://www.countryflagicons.com/SHINY/64/AM.png",state:""},
        {id:1,img: "https://www.countryflagicons.com/SHINY/64/AM.png",state:""},
        {id:2,img:"https://www.countryflagicons.com/SHINY/64/DE.png",state:""},
        {id:2,img:"https://www.countryflagicons.com/SHINY/64/DE.png",state:""},
        {id:3,img:"https://www.countryflagicons.com/SHINY/64/AR.png",state:""},
        {id:3,img:"https://www.countryflagicons.com/SHINY/64/AR.png",state:""},
        {id:4,img:"https://www.countryflagicons.com/SHINY/64/BR.png",state:""},
        {id:4,img:"https://www.countryflagicons.com/SHINY/64/BR.png",state:""},
        {id:5,img:"https://www.countryflagicons.com/SHINY/64/CN.png",state:""},
        {id:5,img:"https://www.countryflagicons.com/SHINY/64/CN.png",state:""},
        {id:6,img:"https://www.countryflagicons.com/SHINY/64/ES.png",state:""},
        {id:6,img:"https://www.countryflagicons.com/SHINY/64/ES.png",state:""},
        {id:7,img:"https://www.countryflagicons.com/SHINY/64/FR.png",state:""},
        {id:7,img:"https://www.countryflagicons.com/SHINY/64/FR.png",state:""},
        {id:8,img:"https://www.countryflagicons.com/SHINY/64/EU.png",state:""},
        {id:8,img:"https://www.countryflagicons.com/SHINY/64/EU.png",state:""},
    ].sort(()=>Math.random()-0.5))  
    const [prev,setPrev]= useState(-1)
    function check(current){
        if(items[current].id == items[prev].id){
            items[current].state = "correct"
            items[prev].state = "correct"
            count++
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].state = "wrong"
            items[prev].state = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].state = ""
                items[prev].state = ""
                setItems([...items])
                setPrev(-1)
            }, 500)
        }
        
        
    }
     console.log(count);
    if (count===8) {
        return a()
    }
    function a(){
      console.log(count)
            return <div> <h1>Shnorhavorum Enq Dzez Hajoxvec Haxtel </h1></div>

            
        
    }

    


function handleClick(id){
    
   if(prev===-1){
    items[id].state="active"
    setItems([...items])
    setPrev(id)
   }else{
    check(id)
   }
}

    return(
        <div className="container">
            
            {
                
                items.map((item,index)=>(
                    <Card key={index} item={item} id={index} handleClick={handleClick} a={a} />
                    
                ))
            }
        </div>
        
    )

}

export default Cards