import './App.css';
import { Container, Row } from 'react-bootstrap';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';


import Home from './pages/Home';
import WeGallery from './pages/WeGallery';

const makeGetRequest = async (url)=>{
	let user = JSON.parse(getUser())
	headers.Authorization = 'Bearer '+user.accessToken
	let options = {
		method: 'GET',
		headers: headers
	}
	return new Promise((resolve, reject)=>{
		fetch(url, options).then(response=>{
			response.json().then((res)=>{//console.log(res)
				resolve(res)
			})
		}).catch(err=>{
			reject(err)
		})
	})
}

const headers = {
	'Content-Type': 'application/json',
	// 'Content-Type': 'application/x-www-form-urlencoded',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST', 
	'Authorization': ''
  }

const makePostRequest = async (url, data)=>{
	let user = JSON.parse(getUser())
	if(user){
		headers.Authorization = 'Bearer '+user.accessToken
	}
	let requestData = {
		method: 'POST',
		port: 3000, 
		path: '/',
		// mode: 'cors', 
		// cache: 'no-cache', 
		// credentials: 'same-origin',
		headers: headers,
		redirect: 'follow', // manual, *follow, error
		//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	}
	return new Promise((resolve, reject)=>{
		fetch(url, requestData).then(response=>{
			response.json().then((res)=>{console.log(res)
				resolve(res)
			})
		}).catch(err=>{
			reject(err)
		})
	})
}

const setAuthorization = (token)=>{
	headers.Authorization = 'Bearer '+token
}

const getAuthorization = ()=>{
  return headers.Authorization
}

const setUser = (user)=>{console.log(user)
	localStorage.setItem('user', user)
}

const getUser = ()=>{
	return localStorage.getItem('user')
}

function App() {
  return (
      <Container fluid className="">
        <Row className=''>
          <Routes>                    
              <Route path="/" element={<Login setUser={setUser} setAuthorization={setAuthorization} makePostRequest={makePostRequest} getUser={getUser} />} />
              <Route path="/home" element={<Home getUser={getUser} getAuthorization={getAuthorization} />}  />
              <Route path="/gallery" element={<WeGallery />} />
          </Routes>
        </Row>
      </Container>
  );
}

export default App;
