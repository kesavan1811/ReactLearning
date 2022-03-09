import React, { useState } from 'react';
import FacebookLogin  from 'react-facebook-login';

const FacebookLoginReact=()=> {

    const[accessToken, setAccessToken]=useState("");

    const componentClicked = data =>{
        console.log("data",data)
    }

    const responseFacebook = (response) => {
        console.log(response.accessToken);
        setAccessToken(response.accessToken)
      }
  return (
    <div>
          <FacebookLogin
            appId="330960402323488"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
    </div>
  )
}

export default FacebookLoginReact