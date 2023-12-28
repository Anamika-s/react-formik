import React from 'react'

export default function MapFilterReduce() {

    const double = (x)=>
    x*x;

    const triple = (x)=>
    x*x*x;

    const arr1 = [1,2,3,4,5,6];
  const arr2 = arr1.map(double);
 const arr3 = arr1.map(triple);

 const usersList = [
    {name : "ajay", marks:90},
    {name : "sagar", marks:67},
    {name : "jay", marks:96},
    {name : "ajay", marks:45}

]
const users = usersList.map(x=>console.log(x.name))
const user1 = usersList.map((item=>
<li> {item.name} </li>))

  
const sum = arr1.reduce((ac, cur)=>

{
   ac= ac+ cur;
   return ac;
})

const Max = arr1.reduce((ac, cu)=>
{
     if(cur>ac)
     ac = cur;
    return ac;
})
  return (
    <div>MapFilterReduce
{arr2}
 <h1> Sum is {sum} </h1>
    </div>
  )
}
