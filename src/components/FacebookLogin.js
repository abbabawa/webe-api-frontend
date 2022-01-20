import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    urlPrefix: 'https://webe-api.herokuapp.com'
  };

  responseFacebook = async (response) => {
    
    console.log(response);
    if (response.status !== "unknown") {
      const res = await fetch(this.state.urlPrefix+"/api/auth/facebook/", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          token: response.accessToken
      }),
      headers: {
        "Content-Type": "application/json",
        'Accept': '*',
        "Access-Control-Allow": "*",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "*"
      }
    }) 
      const data = await res.json()
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }
  };

  componentClicked = () => {
    console.log("clicked");
  };

  render() {
    const { email, isLoggedIn, name, picture } = this.state;
    let fbContent;

    if (isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={picture} alt={name} />
          <h2>Welcome {name}</h2>
          Email: {email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="670815464281190"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}