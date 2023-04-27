import { useState } from 'react'
import './veri.js'
import questions from './veri.js'
function Card({title,info}){
console.log(questions[0].title)

const [goster, gosterGuncelle]=useState(false)

function Goster(){
    gosterGuncelle((prev)=>!prev)
}

    return(
        <>
        <p> {title}</p>
        {goster?<p>{info}</p>:""}
        <button onClick={Goster} className="buton" >+</button>
        </>
    )
}

export default Card