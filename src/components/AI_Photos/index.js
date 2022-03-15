import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AiPhotos() {

    const[image, setImage]=useState("");

    useEffect(()=>{
        axios.get("https://api.generated.photos/api/v1/faces?version=3&gender=female&age=young-adult&ethnicity=black",{
            headers:{
                Authorization:`API-Key DvNL0GJYdu7bRhSA8MgOXg`,
            },
        })
        .then((res)=>{
            console.log(res.data.faces[0].urls[4][512])
            setImage(res.data.faces[0].urls[4][512])
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <img src={image} alt=""/>
    </div>
  )
}

export default AiPhotos