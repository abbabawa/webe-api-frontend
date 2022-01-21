import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Facebook from './FacebookLogin';
import Register from './Register';

import { useNavigate } from "react-router-dom"
import Profile from './Profile';

const clientId = "293068939315-j9sg0k19mnep7mepfrs7vtkmt3n0lqfo.apps.googleusercontent.com";

function Login(props) {
    const navigate = useNavigate()
    const [urlPrefix, setUrlPrefix] = useState('https://webe-api.herokuapp.com')
    useEffect(()=>{
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // development build code
            setUrlPrefix("http://localhost:3001")
            console.log("dev")
        } else {
            // production build code
            setUrlPrefix("https://webe-api.herokuapp.com/")
            console.log("prod")
        }
    }, [])
    //https://webe-api.herokuapp.com/api/auth/google/
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [cardsDisplay, setCardsDisplay] = useState({login: true, register: false})

    const toggleCards = (e)=>{
        setCardsDisplay(prev=>{
            let obj = e.target.id === 'login' ? {login: true, register: false} : {login: false, register: true} 
            return obj
        })
    }

    const onLoginSuccess = async (googleData) => {console.log(googleData)
        console.log('Login Success:', googleData.profileObj);
        console.log(urlPrefix, googleData.tokenId)
        try{
            const res = await fetch(urlPrefix+"/api/auth/google/", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                userToken: googleData.tokenId
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
            if(data.accessToken !==  ''){
                props.setUser(JSON.stringify({id: data.id, name: data.firstName+" "+data.lastName, accessToken: data.accessToken, email: data.email}))
                props.setAuthorization(data.accessToken)
                navigate("/home")
                return
            }
            // console.log("data "+data)
            console.log(data)
        }catch(e){
            console.log(e)
        }
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    const [loginInputs, setLoginInputs] = useState({email: '', password: ''})

    const handleChange = (e)=>{
        setLoginInputs({
            ...loginInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(urlPrefix+"/api/auth/login/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(loginInputs),
          headers: {
            "Content-Type": "application/json",
            'Accept': '*',
            "Access-Control-Allow": "*",
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "*"
          }
        }).then(res=>{
            console.log(res)

            if(res.accessToken !==  ''){console.log(res)
                props.setUser(JSON.stringify({id: res.id, name: res.firstName+" "+res.lastName, accessToken: res.accessToken, email: res.email}))
                props.setAuthorization(res.accessToken)
                //navigate("/home")
            }
        }).catch(e=>{console.log(e)})
    }
    const goHome = ()=>{
        navigate("/home")
    }
    return (
        <>
            {/* <div>
                { showloginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

                { showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
            </div>
            <div>
                <Facebook urlPrefix={urlPrefix} />
            </div> */}
            <Col md="6" className='mx-auto mt-4'>
                <Col md="12" className='mx-auto mt-4'>
                    <Card className='bg-light'>
                        <Card.Body>
                            <h2 className='text-center my-3'>WeBe API Test</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="12" className='mx-auto mt-4'>
                    <Card className='bg-light'>
                        <Card.Header>
                            <ul className="nav nav-tabs p-0">
                                <li className='nav-item me-4' id="login" onClick={toggleCards}>Login</li>
                                <li className='nav-item' id="register" onClick={toggleCards}>Register</li>
                            </ul>
                        </Card.Header>
                        <Card.Body className={cardsDisplay.login ? '' : 'd-none'}>
                            <h3 className='text-center my-3'>Login</h3>
                            <form>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                                    <div class="col-sm-9">
                                        <input type="email" name="email" onChange={handleChange} value={loginInputs.email} class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" name="password" onChange={handleChange} value={loginInputs.password} class="form-control" />
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Sign in</button>
                            </form>
                            <h4 className='text-center'>OR</h4>
                            <div className='d-md-flex justify-content-around mt-3'>
                                { showloginButton ?
                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Sign In With Google"
                                        onSuccess={onLoginSuccess}
                                        onFailure={onLoginFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                    /> : null}

                                { showlogoutButton ?
                                    <Profile  /> : null
                                }
                                <Facebook goHome={goHome} urlPrefix={urlPrefix} setUser={props.setUser} setAuthorization={props.setAuthorization} />
                            </div>
                        </Card.Body>
                        <Card.Body className={cardsDisplay.register ? '' : 'd-none'}>
                            <Register />
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
        </>
    );
}
export default Login;