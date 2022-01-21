import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = ()=>{
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
    const [inputElements, setElement] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const handleChange = e=>{
        setElement({
            ...inputElements,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e=>{
        e.preventDefault()
        fetch(urlPrefix+"/api/auth/register/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(inputElements),
          headers: {
            "Content-Type": "application/json",
            'Accept': '*',
            "Access-Control-Allow": "*",
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "*"
          }
        }).then(res=>{
            console.log(res)
            if(res.status === 201){
                navigate("/home")
            }
        }) 

    }
    return (
        <>
                            <h3 className='text-center my-3'>Register</h3>
                            <form>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-3 col-form-label">First Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" name="firstName" class="form-control" onChange={handleChange} value={inputElements.fname} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Last Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" name="lastName" class="form-control" onChange={handleChange} value={inputElements.lname} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                                    <div class="col-sm-9">
                                        <input type="email" name="email" class="form-control"onChange={handleChange} value={inputElements.email} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" name="password" class="form-control" onChange={handleChange} value={inputElements.password} />
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Sign in</button>
                            </form>
        </>
    )
}

export default Register