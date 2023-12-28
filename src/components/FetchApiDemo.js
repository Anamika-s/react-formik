import React, { useState, useEffect } from 'react'

export default function FetchApiDemo() {
    const [users,setUsers] = useState(null);
    useEffect(()=>
    {
        fetch("https://reqres.in/api/users")
        .then((res)=> res.json())
        .then((response)=>{
        	
            // console.log(response.data)
            setUsers(response.data)
            console.log("Users are " + {users})
        })
    },[])

    const Call = () =>
    {
        alert("a");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((response)=> console.log(response))
      
    }
  return (
    <div>FetchApiDemo
        <b> jjj </b>

        { users  && console.log(users.length)}
      
      { users  && <h1> {users.length} </h1>} 

      {users ? users.map((user)=>
      <li> {user.id} </li>
): <h1> There are no users </h1>}

        <button type='button' onClick={Call}> Get Data </button>
  
    </div>
  )
}
