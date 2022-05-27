import React from 'react'
import Input from './Input'

const Todo = () => {

let[data,setData]=React.useState([])


React.useEffect(()=>{
    fetch("http://localhost:3004/students")
    .then((res)=>
    res.json()
    ).then((res)=>{
        setData(res)
      
    })
},[])


  return (
    <>Todo
    <Input myd={data} myu={setData}/>
<div className='main'>
    {data.map((elem)=>(
        <div key={elem.id} className="indiv">{elem.name}</div>
    ))}
</div>


</>
  )
}

export default Todo