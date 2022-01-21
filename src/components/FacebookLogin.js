import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
//import { useNavigate } from "react-router-dom";

const Facebook = (props)=> {
  const [state, setState] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    urlPrefix: 'https://webe-api.herokuapp.com'
  })

  const responseFacebook = async (response) => {
    // const navigate = useNavigate()
    console.log(response);
    if (response.status !== "unknown") {
      const res = await fetch(state.urlPrefix+"/api/auth/facebook/", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          userID: response.userID,
          userToken: response.accessToken,
          names: response.name,
          email: response.email,
          picture: response.picture.data.url
      }),
      headers: {
        "Content-Type": "application/json",
        'Accept': '*',
        "Access-Control-Allow": "*",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "*"
      }
    }) 
    console.log(res)
      const data = await res.json()
      console.log(data)
      if(data.accessToken !==  ''){
          props.setUser(JSON.stringify({id: data.id, name: data.firstName+" "+data.lastName, accessToken: data.accessToken}))
          props.setAuthorization(data.accessToken)
          props.goHome()
      }
      setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  
  //const { email, isLoggedIn, name, picture } = state;
  let fbContent;

    if (state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={state.picture} alt={state.name} />
          <h2>Welcome {state.name}</h2>
          Email: {state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="670815464281190"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
        />
      );
    }
    return <div>{fbContent}</div>;
}

export default Facebook