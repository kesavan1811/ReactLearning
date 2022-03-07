import React, { useState } from 'react'
const allUsers = require('./user.json')

const UserFilter=()=> {

    const[users, setUsers]=useState([])

   const handleChange=(e)=>{
         setUsers(e.target.value)
    }

   const handleSubmitUsers =(e)=>{
        e.preventDefault();
        alert("your selected values is" + users)
    }

   const getUnique=(arr,comp)=>{
        const unique=arr
        // store the comparision values in array
        .map(e=>e[comp])

        // store the keys of the objects
        .map((e,i,final)=>final.indexOf(e)===i&&i)

        // eliminate the dead keys & store unique objects
        .filter(e=>arr[e])
        .map(e=>arr[e]);
    return unique
    }

    const filterDropdown = allUsers.filter(function(result){
        return result.title===users;
    })

  return (
    <div>
        <form onSubmit={handleSubmitUsers} > 
        <select value={users} onChange={handleChange} >
            {allUsers.map(user=>(
                <option key={user.id} value={user.title} > {user.title} </option>
            ))}
        </select>
        <br/>
        <br/>
        <input type="submit" value={"Submit"} ></input>
        <div>
            {filterDropdown.map(user=>(
                <div key={user.id} style={{margin:"10%"}}>
                    {user.body}
                    <br/>
                    </div>
            ))}
        </div>
        </form>
    </div>
  )
}

export default UserFilter