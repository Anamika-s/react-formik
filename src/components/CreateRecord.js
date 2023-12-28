import React, { useState } from 'react'

export default function CreateRecord() {
    const [user,setUser] = useState(
        {
            name :"",
            address:"",
            mobile:""
        }
    )
    const Add= (event)=>
    {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users",
          {
            method:'POST',
            headers:
            {
                'Accept':'Application/json',
                'Content-Type':'Application/json'
            },
    
            body: JSON.stringify(user)
        }).then((res)=> res.json())
        .then((response) => console.log(response))

    }
  return (
    <div>Create
        <form onSubmit={Add}>
            <label> Name </label> 
            <input type="text" name="name" value={user.name} onChange= {(event)=> setUser({...user, [event.target.name]: event.target.value})}/>
            <br/>

            <label> Address </label> 
            <input type="text" name="address" value={user.address} onChange= {(event)=> setUser({...user, [event.target.name]: event.target.value})}/>
            <br/>
            

            <label> Mobile </label> 
            <input type="text" name="mobile" value={user.mobile} onChange= {(event)=> setUser({...user, [event.target.name]: event.target.value})}/>
            <br/>

            <button type='submit'> Submit </button>
            
        </form>
    </div>
  )
}
