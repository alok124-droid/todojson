import React from 'react'

const Input = (props) => {

    let[newData,setNewData]=React.useState("")

    let handleChange=(e)=>{
        setNewData( e.target.value)
    }
    let myFun=()=>{
        fetch("http://localhost:3004/students",{
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify({
        name: newData,
        content: true,
     }),


        }) .then((res)=>
        res.json()
        ).then((res)=>{
            props.myu([...props.myd,res])
              setNewData("")
        })
    }
  return (
    <div>Input
        <input type="text" placeholder='Enter Your Data' className='input' onChange={handleChange} value={newData} />
        <button className='b' onClick={myFun}>+</button>
    </div>
  )
}

export default Input